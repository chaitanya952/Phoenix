#!/usr/bin/env python3
"""
Script to generate a complete catalog update with all products from Phoenix JSON
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
    
    # Add sNo if it exists and is not NaN
    s_no = safe_get('S.No')
    if s_no and str(s_no).lower() != 'nan':
        product['sNo'] = int(s_no)
    
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

def categorize_std_neck_products(products):
    """Categorize standard neck products by type"""
    
    # Group products by base model (without capacity)
    model_groups = defaultdict(list)
    
    for product in products:
        model_no = product.get('modelNo', '')
        # Extract base model (e.g., RN0001 from RN0001-60ml)
        base_model = model_no.split('-')[0] if '-' in model_no else model_no
        model_groups[base_model].append(product)
    
    # Sort each group by capacity
    def capacity_sort_key(product):
        capacity = product.get('capacity', '0ml')
        # Extract numeric value from capacity string
        numeric_part = re.findall(r'\d+', capacity)
        return int(numeric_part[0]) if numeric_part else 0
    
    for base_model in model_groups:
        model_groups[base_model].sort(key=capacity_sort_key)
    
    # Sort model groups by model number
    sorted_groups = dict(sorted(model_groups.items()))
    
    return sorted_groups

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
    """Main function to generate the complete catalog"""
    
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
    
    # Categorize products
    model_groups = categorize_std_neck_products(ts_products)
    
    print(f"Found {len(model_groups)} different model groups")
    
    # Flatten all products in order
    all_std_neck_products = []
    for base_model in sorted(model_groups.keys()):
        all_std_neck_products.extend(model_groups[base_model])
    
    print(f"Total standard neck products: {len(all_std_neck_products)}")
    
    # Generate TypeScript code
    ts_array = generate_ts_products_array(all_std_neck_products)
    
    # Write to output file
    output_file = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\scripts\complete_std_neck_products.ts"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write("// Complete Standard Neck Products from Phoenix_Catlog7.json\n")
        f.write("// Ready to replace the std-feeding products array in catalogData.ts\n\n")
        f.write("const completeStdNeckProducts = ")
        f.write(ts_array)
        f.write(";\n\n")
        f.write(f"// Total products: {len(all_std_neck_products)}\n")
        f.write(f"// Model groups: {len(model_groups)}\n")
    
    print(f"\nComplete TypeScript code written to: {output_file}")
    print("This contains all 140 standard neck products from the Phoenix catalog")
    
    # Show summary by model type
    print(f"\nSummary by model:")
    for base_model in sorted(model_groups.keys())[:10]:  # Show first 10
        products = model_groups[base_model]
        capacities = [p.get('capacity', 'N/A') for p in products]
        print(f"  {base_model}: {len(products)} products ({', '.join(capacities)})")
    
    if len(model_groups) > 10:
        print(f"  ... and {len(model_groups) - 10} more model groups")

if __name__ == "__main__":
    main()