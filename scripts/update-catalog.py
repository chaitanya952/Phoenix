#!/usr/bin/env python3
"""
Script to update catalogData.ts with data from Phoenix_Catlog7.json
"""

import json
import re
from collections import defaultdict

def load_json_catalog(json_file_path):
    """Load and parse the JSON catalog file"""
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            products = json.load(f)
        return products
    except Exception as e:
        print(f"Error reading JSON file: {e}")
        return []

def convert_json_to_ts_product(json_product):
    """Convert a JSON product to TypeScript CatalogProduct format"""
    
    # Handle NaN values
    def safe_get(key, default=None):
        value = json_product.get(key, default)
        if str(value).lower() == 'nan' or value is None:
            return default
        return value
    
    # Extract model number and capacity
    model_no = safe_get('Model No.', '')
    capacity = safe_get('Capacity', '')
    
    # Create the product object
    product = {
        'sNo': int(safe_get('S.No', 0)) if safe_get('S.No') and str(safe_get('S.No')).lower() != 'nan' else None,
        'modelNo': model_no,
        'description': safe_get('Description', ''),
        'capacity': capacity,
        'moldNos': safe_get('Mold Nos.', ''),
        'packaging': safe_get('Packaging', ''),
        'inner': int(safe_get('Inner', 0)),
        'outer': int(safe_get('Outer', 0)),
        'inr': float(safe_get('INR', 0)),
        'usd': round(float(safe_get('USD', 0)), 6),
        'moq': int(safe_get('MOQ', 0))
    }
    
    # Add optional fields if they exist
    mono_dims = safe_get('Mono Dimensions (LBH) mm')
    if mono_dims and str(mono_dims).lower() != 'nan':
        product['monoDimensions'] = mono_dims.replace('\n', ', ')
    
    inner_dims = safe_get('Inner Dimensions')
    if inner_dims and str(inner_dims).lower() != 'nan':
        product['innerDimensions'] = inner_dims.replace('\n', ', ')
    
    master_dims = safe_get('Master Dimensions')
    if master_dims and str(master_dims).lower() != 'nan':
        product['masterDimensions'] = master_dims.replace('\n', ', ')
    
    cbm = safe_get('CBM _ Master')
    if cbm and str(cbm).lower() != 'nan':
        product['cbm'] = float(cbm)
    
    return product

def group_products_by_type(products):
    """Group products by their type/style"""
    groups = defaultdict(list)
    
    for product in products:
        description = product.get('description', '').lower()
        
        # Determine product group based on description
        if 'zozo straight' in description and 'handle' not in description:
            groups['zozo_straight'].append(product)
        elif 'zozo + straight' in description and 'handle' not in description:
            groups['zozo_plus_straight'].append(product)
        elif 'slender straight' in description and 'handle' not in description:
            groups['slender_straight'].append(product)
        elif '3 dot straight' in description and 'handle' not in description:
            groups['3dot_straight'].append(product)
        elif 'thumb straight' in description and 'handle' not in description:
            groups['thumb_straight'].append(product)
        elif 'crystal straight' in description and 'handle' not in description:
            groups['crystal_straight'].append(product)
        elif 'kk straight' in description and 'handle' not in description:
            groups['kk_straight'].append(product)
        else:
            # For now, put other products in a general group
            groups['other'].append(product)
    
    return groups

def generate_ts_products_array(products):
    """Generate TypeScript array string for products"""
    if not products:
        return "[]"
    
    lines = ["["]
    
    for i, product in enumerate(products):
        lines.append("      {")
        
        # Add fields in order
        if product.get('sNo') is not None:
            lines.append(f"        sNo: {product['sNo']},")
        
        lines.append(f"        modelNo: '{product['modelNo']}',")
        lines.append(f"        description: '{product['description']}',")
        
        if product.get('capacity'):
            lines.append(f"        capacity: '{product['capacity']}',")
        
        if product.get('moldNos'):
            lines.append(f"        moldNos: '{product['moldNos']}',")
        
        lines.append(f"        packaging: '{product['packaging']}',")
        lines.append(f"        inner: {product['inner']},")
        lines.append(f"        outer: {product['outer']},")
        lines.append(f"        inr: {product['inr']},")
        lines.append(f"        usd: {product['usd']},")
        lines.append(f"        moq: {product['moq']},")
        
        # Add optional fields
        if product.get('monoDimensions'):
            lines.append(f"        monoDimensions: '{product['monoDimensions']}',")
        
        if product.get('innerDimensions'):
            lines.append(f"        innerDimensions: '{product['innerDimensions']}',")
        
        if product.get('masterDimensions'):
            lines.append(f"        masterDimensions: '{product['masterDimensions']}',")
        
        if product.get('cbm') is not None:
            lines.append(f"        cbm: {product['cbm']},")
        
        # Remove trailing comma from last field
        if lines[-1].endswith(','):
            lines[-1] = lines[-1][:-1]
        
        if i < len(products) - 1:
            lines.append("      },")
        else:
            lines.append("      }")
    
    lines.append("    ]")
    return "\n".join(lines)

def main():
    """Main function to update the catalog"""
    
    # Load JSON data
    json_file = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix_Catlog7.json"
    json_products = load_json_catalog(json_file)
    
    if not json_products:
        print("No products found in JSON file")
        return
    
    print(f"Loaded {len(json_products)} products from JSON")
    
    # Convert to TypeScript format
    ts_products = []
    for json_product in json_products:
        ts_product = convert_json_to_ts_product(json_product)
        ts_products.append(ts_product)
    
    # Group products
    grouped_products = group_products_by_type(ts_products)
    
    print(f"Product groups:")
    for group_name, products in grouped_products.items():
        print(f"  {group_name}: {len(products)} products")
    
    # Generate the standard neck products array
    # For now, let's take the first 10 products from the main groups
    std_neck_products = []
    
    # Add products from main groups (limit to match current catalog structure)
    for group in ['zozo_straight', 'zozo_plus_straight', 'slender_straight', '3dot_straight']:
        if group in grouped_products:
            # Take first few products from each group
            group_products = grouped_products[group][:3]  # Limit to 3 per group
            std_neck_products.extend(group_products)
    
    print(f"\nSelected {len(std_neck_products)} products for standard neck category")
    
    # Generate TypeScript code
    ts_array = generate_ts_products_array(std_neck_products)
    
    # Write to output file for review
    output_file = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\scripts\updated_std_neck_products.ts"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("// Updated Standard Neck Products from Phoenix_Catlog7.json\n")
        f.write("// This is a preview - review before updating catalogData.ts\n\n")
        f.write("const stdNeckProducts = ")
        f.write(ts_array)
        f.write(";\n")
    
    print(f"\nGenerated TypeScript code written to: {output_file}")
    print("Please review the output before updating catalogData.ts")

if __name__ == "__main__":
    main()