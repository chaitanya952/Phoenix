#!/usr/bin/env python3
"""
Script to validate catalog data quality and identify any issues
"""

import json
import re
from typing import Dict, List, Any, Tuple

def load_phoenix_data() -> List[Dict[str, Any]]:
    """Load original Phoenix catalog data"""
    with open(r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix_Catlog7.json', 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_catalog_products() -> List[Dict[str, Any]]:
    """Extract products from TypeScript catalog file"""
    with open(r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple regex-based extraction (for validation purposes)
    products = []
    lines = content.split('\n')
    
    i = 0
    while i < len(lines):
        if 'modelNo:' in lines[i]:
            product = {}
            # Extract product data
            j = i
            while j < len(lines) and not lines[j].strip().startswith('},'):
                line = lines[j].strip()
                
                # Extract key-value pairs
                if ':' in line and not line.startswith('//'):
                    key_match = re.search(r'(\w+):\s*([^,]+),?', line)
                    if key_match:
                        key = key_match.group(1)
                        value = key_match.group(2).strip().strip("'\"")
                        
                        # Convert numeric values
                        if key in ['sNo', 'inner', 'outer', 'inr', 'usd', 'moq', 'cbm']:
                            try:
                                product[key] = float(value) if '.' in value else int(value)
                            except ValueError:
                                product[key] = value
                        else:
                            product[key] = value
                j += 1
            
            if 'modelNo' in product:
                products.append(product)
        i += 1
    
    return products

def validate_data_consistency() -> Dict[str, List[str]]:
    """Validate data consistency between Phoenix catalog and website catalog"""
    phoenix_data = load_phoenix_data()
    catalog_products = extract_catalog_products()
    
    issues = {
        'missing_products': [],
        'price_mismatches': [],
        'missing_images': [],
        'dimension_issues': [],
        'packaging_issues': [],
        'general_issues': []
    }
    
    # Create lookup dictionaries
    phoenix_lookup = {p.get('Model No.', ''): p for p in phoenix_data}
    catalog_lookup = {p.get('modelNo', ''): p for p in catalog_products}
    
    print(f"📊 Data Validation Report")
    print(f"Phoenix catalog: {len(phoenix_data)} products")
    print(f"Website catalog: {len(catalog_products)} products")
    print("-" * 50)
    
    # Check for missing products
    phoenix_models = set(phoenix_lookup.keys())
    catalog_models = set(catalog_lookup.keys())
    
    missing_in_catalog = phoenix_models - catalog_models
    extra_in_catalog = catalog_models - phoenix_models
    
    if missing_in_catalog:
        issues['missing_products'].extend(list(missing_in_catalog))
        print(f"⚠️  Missing in website: {len(missing_in_catalog)} products")
        for model in list(missing_in_catalog)[:5]:  # Show first 5
            print(f"   - {model}")
        if len(missing_in_catalog) > 5:
            print(f"   ... and {len(missing_in_catalog) - 5} more")
    
    if extra_in_catalog:
        print(f"ℹ️  Extra in website: {len(extra_in_catalog)} products")
        for model in list(extra_in_catalog)[:5]:
            print(f"   - {model}")
    
    # Check price consistency
    price_mismatches = 0
    for model in phoenix_models & catalog_models:
        phoenix_product = phoenix_lookup[model]
        catalog_product = catalog_lookup[model]
        
        phoenix_inr = phoenix_product.get('INR')
        catalog_inr = catalog_product.get('inr')
        
        if phoenix_inr and catalog_inr:
            if abs(float(phoenix_inr) - float(catalog_inr)) > 0.01:
                issues['price_mismatches'].append(f"{model}: Phoenix={phoenix_inr}, Catalog={catalog_inr}")
                price_mismatches += 1
    
    if price_mismatches > 0:
        print(f"⚠️  Price mismatches: {price_mismatches} products")
        for mismatch in issues['price_mismatches'][:3]:
            print(f"   - {mismatch}")
    else:
        print("✅ All prices match between Phoenix catalog and website")
    
    # Check for missing images
    missing_images = 0
    for product in catalog_products:
        if not product.get('image'):
            issues['missing_images'].append(product.get('modelNo', 'Unknown'))
            missing_images += 1
    
    if missing_images > 0:
        print(f"⚠️  Missing images: {missing_images} products")
    else:
        print("✅ All products have images assigned")
    
    # Check dimension data
    missing_dimensions = 0
    for product in catalog_products:
        if not any([product.get('monoDimensions'), product.get('innerDimensions'), product.get('masterDimensions')]):
            issues['dimension_issues'].append(product.get('modelNo', 'Unknown'))
            missing_dimensions += 1
    
    if missing_dimensions > 0:
        print(f"⚠️  Missing dimensions: {missing_dimensions} products")
    else:
        print("✅ All products have dimension data")
    
    # Check packaging consistency
    packaging_types = set()
    for product in catalog_products:
        packaging = product.get('packaging')
        if packaging:
            packaging_types.add(packaging)
    
    print(f"📦 Packaging types found: {', '.join(packaging_types)}")
    
    # Check MOQ consistency
    moq_values = set()
    for product in catalog_products:
        moq = product.get('moq')
        if moq:
            moq_values.add(moq)
    
    print(f"📋 MOQ values found: {', '.join(map(str, sorted(moq_values)))}")
    
    return issues

def generate_product_summary():
    """Generate a summary of products by category"""
    catalog_products = extract_catalog_products()
    
    # Group by capacity
    capacity_groups = {}
    for product in catalog_products:
        capacity = product.get('capacity', 'Unknown')
        if capacity not in capacity_groups:
            capacity_groups[capacity] = []
        capacity_groups[capacity].append(product)
    
    print(f"\n📈 Product Summary by Capacity:")
    for capacity in sorted(capacity_groups.keys()):
        count = len(capacity_groups[capacity])
        print(f"   {capacity}: {count} products")
    
    # Price range analysis
    prices_inr = [p.get('inr', 0) for p in catalog_products if p.get('inr')]
    prices_usd = [p.get('usd', 0) for p in catalog_products if p.get('usd')]
    
    if prices_inr:
        print(f"\n💰 Price Range (INR): ₹{min(prices_inr):.2f} - ₹{max(prices_inr):.2f}")
        print(f"💰 Price Range (USD): ${min(prices_usd):.2f} - ${max(prices_usd):.2f}")

def main():
    """Main validation function"""
    try:
        print("🔍 Starting catalog data validation...\n")
        
        # Run validation
        issues = validate_data_consistency()
        
        # Generate summary
        generate_product_summary()
        
        # Overall status
        total_issues = sum(len(issue_list) for issue_list in issues.values())
        
        print(f"\n{'='*50}")
        if total_issues == 0:
            print("✅ Catalog validation completed successfully!")
            print("   No issues found - data is consistent and complete.")
        else:
            print(f"⚠️  Catalog validation completed with {total_issues} issues found.")
            print("   Review the issues above and consider fixing them.")
        
        print(f"{'='*50}")
        
    except Exception as e:
        print(f"❌ Error during validation: {str(e)}")

if __name__ == "__main__":
    main()