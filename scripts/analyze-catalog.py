#!/usr/bin/env python3
"""
Script to analyze the Phoenix catalog JSON file and extract product information
"""

import json
import sys
from collections import defaultdict

def analyze_catalog(json_file_path):
    """Analyze the catalog JSON file and extract product categories"""
    
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            products = json.load(f)
    except Exception as e:
        print(f"Error reading JSON file: {e}")
        return
    
    print(f"Total products found: {len(products)}")
    
    # Group products by model prefix
    model_groups = defaultdict(list)
    descriptions = set()
    capacities = set()
    
    for product in products:
        model_no = product.get('Model No.', '')
        description = product.get('Description', '')
        capacity = product.get('Capacity', '')
        
        if model_no:
            # Extract model prefix (e.g., RN0001, WN0001, SP0001)
            prefix = model_no.split('-')[0] if '-' in model_no else model_no
            model_groups[prefix].append(product)
            
        if description:
            descriptions.add(description)
            
        if capacity:
            capacities.add(capacity)
    
    print(f"\nModel prefixes found: {len(model_groups)}")
    for prefix, items in sorted(model_groups.items()):
        print(f"  {prefix}: {len(items)} products")
    
    print(f"\nUnique descriptions: {len(descriptions)}")
    for desc in sorted(descriptions):
        print(f"  - {desc}")
    
    print(f"\nUnique capacities: {len(capacities)}")
    for cap in sorted(capacities):
        print(f"  - {cap}")
    
    # Categorize products
    std_neck_products = []
    wide_neck_products = []
    sippy_cups = []
    teethers_pacifiers = []
    other_products = []
    
    for product in products:
        description = product.get('Description', '').lower()
        model_no = product.get('Model No.', '')
        
        if 'std. neck' in description or 'standard neck' in description:
            std_neck_products.append(product)
        elif 'wide neck' in description:
            wide_neck_products.append(product)
        elif 'sippy' in description or 'sipper' in description:
            sippy_cups.append(product)
        elif 'teether' in description or 'pacifier' in description:
            teethers_pacifiers.append(product)
        else:
            other_products.append(product)
    
    print(f"\nProduct categorization:")
    print(f"  Standard Neck: {len(std_neck_products)}")
    print(f"  Wide Neck: {len(wide_neck_products)}")
    print(f"  Sippy Cups: {len(sippy_cups)}")
    print(f"  Teethers & Pacifiers: {len(teethers_pacifiers)}")
    print(f"  Other: {len(other_products)}")
    
    if other_products:
        print(f"\nOther products:")
        for product in other_products[:10]:  # Show first 10
            print(f"  - {product.get('Model No.', 'N/A')}: {product.get('Description', 'N/A')}")
    
    return {
        'std_neck': std_neck_products,
        'wide_neck': wide_neck_products,
        'sippy_cups': sippy_cups,
        'teethers_pacifiers': teethers_pacifiers,
        'other': other_products
    }

if __name__ == "__main__":
    json_file = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix_Catlog7.json"
    analyze_catalog(json_file)