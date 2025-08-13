#!/usr/bin/env python3
"""
Script to compare pricing between JSON catalog and current TypeScript catalog
"""

import json
import re

def load_json_catalog(json_file_path):
    """Load and parse the JSON catalog file"""
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            products = json.load(f)
        return products
    except Exception as e:
        print(f"Error reading JSON file: {e}")
        return []

def extract_ts_products(ts_file_path):
    """Extract product data from TypeScript file"""
    try:
        with open(ts_file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Find all modelNo entries and their corresponding prices
        model_pattern = r"modelNo:\s*'([^']+)'"
        inr_pattern = r"inr:\s*([\d.]+)"
        usd_pattern = r"usd:\s*([\d.]+)"
        
        models = re.findall(model_pattern, content)
        inr_prices = re.findall(inr_pattern, content)
        usd_prices = re.findall(usd_pattern, content)
        
        products = []
        for i, model in enumerate(models):
            if i < len(inr_prices) and i < len(usd_prices):
                products.append({
                    'modelNo': model,
                    'inr': float(inr_prices[i]),
                    'usd': float(usd_prices[i])
                })
        
        return products
    except Exception as e:
        print(f"Error reading TypeScript file: {e}")
        return []

def compare_pricing():
    """Compare pricing between JSON and TypeScript files"""
    
    # Load data
    json_file = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix_Catlog7.json"
    ts_file = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts"
    
    json_products = load_json_catalog(json_file)
    ts_products = extract_ts_products(ts_file)
    
    # Create lookup dictionaries
    json_lookup = {}
    for product in json_products:
        model_no = product.get('Model No.', '')
        if model_no:
            json_lookup[model_no] = {
                'inr': product.get('INR', 0),
                'usd': product.get('USD', 0)
            }
    
    ts_lookup = {}
    for product in ts_products:
        model_no = product.get('modelNo', '')
        if model_no:
            ts_lookup[model_no] = {
                'inr': product.get('inr', 0),
                'usd': product.get('usd', 0)
            }
    
    print(f"JSON products: {len(json_lookup)}")
    print(f"TypeScript products: {len(ts_lookup)}")
    
    # Find matches and differences
    matches = 0
    price_differences = []
    
    for model_no in ts_lookup:
        if model_no in json_lookup:
            matches += 1
            json_inr = json_lookup[model_no]['inr']
            json_usd = json_lookup[model_no]['usd']
            ts_inr = ts_lookup[model_no]['inr']
            ts_usd = ts_lookup[model_no]['usd']
            
            # Check for differences (allowing small floating point differences)
            inr_diff = abs(json_inr - ts_inr) > 0.01
            usd_diff = abs(json_usd - ts_usd) > 0.000001
            
            if inr_diff or usd_diff:
                price_differences.append({
                    'model': model_no,
                    'json_inr': json_inr,
                    'ts_inr': ts_inr,
                    'json_usd': json_usd,
                    'ts_usd': ts_usd
                })
    
    print(f"\nMatching models: {matches}")
    print(f"Price differences found: {len(price_differences)}")
    
    if price_differences:
        print("\nPrice differences:")
        for diff in price_differences[:10]:  # Show first 10
            print(f"  {diff['model']}:")
            print(f"    INR: JSON={diff['json_inr']}, TS={diff['ts_inr']}")
            print(f"    USD: JSON={diff['json_usd']:.6f}, TS={diff['ts_usd']:.6f}")
    
    # Find models in JSON but not in TS
    json_only = set(json_lookup.keys()) - set(ts_lookup.keys())
    ts_only = set(ts_lookup.keys()) - set(json_lookup.keys())
    
    print(f"\nModels in JSON only: {len(json_only)}")
    if json_only:
        print("  Examples:", list(json_only)[:5])
    
    print(f"Models in TS only: {len(ts_only)}")
    if ts_only:
        print("  Examples:", list(ts_only)[:5])

if __name__ == "__main__":
    compare_pricing()