#!/usr/bin/env python3
"""
Script to update catalogData.ts with complete Phoenix catalog data
"""

import json
import re
from typing import Dict, List, Any

def load_phoenix_catalog(json_path: str) -> List[Dict[str, Any]]:
    """Load Phoenix catalog from JSON file"""
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data

def clean_value(value: Any) -> Any:
    """Clean NaN values and format numbers"""
    if value is None or (isinstance(value, float) and str(value).lower() == 'nan'):
        return None
    if isinstance(value, float):
        # Round to 6 decimal places to avoid floating point precision issues
        return round(value, 6)
    return value

def categorize_products(products: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    """Categorize products based on bottle shapes and handle presence"""
    categories = {
        'std-straight': [],
        'std-straight-handle': [],
        'std-curvy': [],
        'std-curvy-handle': [],
        'std-mambo': [],
        'std-mambo-handle': [],
        'std-aqua': [],
        'std-aqua-handle': []
    }
    
    for product in products:
        description = product.get('Description', '').lower()
        
        # Categorize by bottle shape and handle presence
        if 'straight' in description:
            if 'handle' in description:
                categories['std-straight-handle'].append(product)
            else:
                categories['std-straight'].append(product)
        elif 'curvy' in description:
            if 'handle' in description:
                categories['std-curvy-handle'].append(product)
            else:
                categories['std-curvy'].append(product)
        elif 'mambo' in description:
            if 'handle' in description:
                categories['std-mambo-handle'].append(product)
            else:
                categories['std-mambo'].append(product)
        elif 'aqua' in description:
            if 'handle' in description:
                categories['std-aqua-handle'].append(product)
            else:
                categories['std-aqua'].append(product)
        else:
            # Default to straight category for unmatched products
            if 'handle' in description:
                categories['std-straight-handle'].append(product)
            else:
                categories['std-straight'].append(product)
    
    return categories

def convert_to_typescript_product(product: Dict[str, Any]) -> str:
    """Convert a product dictionary to TypeScript object string"""
    lines = []
    lines.append("      {")
    
    # Map JSON keys to TypeScript interface keys
    key_mapping = {
        'S.No': 'sNo',
        'Model No.': 'modelNo',
        'Image': 'image',
        'Description': 'description',
        'Capacity': 'capacity',
        'Mold Nos.': 'moldNos',
        'Remarks': 'remarks',
        'Packaging': 'packaging',
        'Inner': 'inner',
        'Outer': 'outer',
        'INR': 'inr',
        'USD': 'usd',
        'MOQ': 'moq',
        'Mono Dimensions (LBH) mm': 'monoDimensions',
        'Inner Dimensions': 'innerDimensions',
        'Master Dimensions': 'masterDimensions',
        'CBM _ Master': 'cbm'
    }
    
    for json_key, ts_key in key_mapping.items():
        value = clean_value(product.get(json_key))
        if value is not None:
            if isinstance(value, str):
                # Escape quotes and format string
                escaped_value = value.replace("'", "\\'").replace('"', '\\"')
                lines.append(f"        {ts_key}: '{escaped_value}',")
            elif isinstance(value, (int, float)):
                lines.append(f"        {ts_key}: {value},")
    
    lines.append("      },")
    return "\n".join(lines)

def generate_category_section(category_id: str, category_name: str, display_name: str, 
                            description: str, image: str, products: List[Dict[str, Any]]) -> str:
    """Generate a complete category section"""
    lines = []
    lines.append("  {")
    lines.append(f"    id: '{category_id}',")
    lines.append(f"    name: '{category_name}',")
    lines.append(f"    displayName: '{display_name}',")
    lines.append(f"    description: '{description}',")
    lines.append(f"    image: '{image}',")
    lines.append("    products: [")
    
    for product in products:
        lines.append(convert_to_typescript_product(product))
    
    lines.append("    ]")
    lines.append("  },")
    
    return "\n".join(lines)

def main():
    # Load Phoenix catalog data
    phoenix_data = load_phoenix_catalog(r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix_Catlog7.json')
    
    # Categorize products
    categorized = categorize_products(phoenix_data)
    
    # Category definitions
    category_definitions = {
        'std-straight': {
            'name': 'Standard Straight',
            'displayName': 'Standard Neck Straight Bottles',
            'description': 'Classic straight-shaped standard neck bottles with reliable performance and proven design. Perfect for everyday feeding with universal compatibility.',
            'image': '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg'
        },
        'std-straight-handle': {
            'name': 'Standard Straight Handle',
            'displayName': 'Standard Neck Straight Bottles with Handle',
            'description': 'Straight-shaped standard neck bottles with ergonomic handles for easy grip and independent feeding. Perfect for transitioning babies.',
            'image': '/images/Standard Neck Bottles With Handle  JPEG/RNH0001 - 125ml.jpg'
        },
        'std-curvy': {
            'name': 'Standard Curvy',
            'displayName': 'Standard Neck Curvy Bottles',
            'description': 'Ergonomically curved standard neck bottles designed for comfortable grip and natural feeding position. Modern design meets functionality.',
            'image': '/images/Standard Neck Bottles JPEG/RN0008 - 125ml.jpg'
        },
        'std-curvy-handle': {
            'name': 'Standard Curvy Handle',
            'displayName': 'Standard Neck Curvy Bottles with Handle',
            'description': 'Curved standard neck bottles with comfortable handles for enhanced grip. Combines ergonomic bottle shape with easy-hold handles.',
            'image': '/images/Standard Neck Bottles With Handle  JPEG/RNH0008 - 125ml.jpg'
        },
        'std-mambo': {
            'name': 'Standard Mambo',
            'displayName': 'Standard Neck Mambo Bottles',
            'description': 'Stylish mambo-shaped standard neck bottles with unique design elements. Combines aesthetic appeal with practical feeding solutions.',
            'image': '/images/Standard Neck Bottles JPEG/RN0015 - 120ml.jpg'
        },
        'std-mambo-handle': {
            'name': 'Standard Mambo Handle',
            'displayName': 'Standard Neck Mambo Bottles with Handle',
            'description': 'Mambo-shaped standard neck bottles with ergonomic handles. Unique design with practical grip for independent feeding.',
            'image': '/images/Standard Neck Bottles With Handle  JPEG/RNH0015 - 120ml.jpg'
        },
        'std-aqua': {
            'name': 'Standard Aqua',
            'displayName': 'Standard Neck Aqua Bottles',
            'description': 'Aqua-series standard neck bottles with sleek design and superior functionality. Premium feeding bottles for discerning parents.',
            'image': '/images/Standard Neck Bottles JPEG/RN0019 - 120ml.jpg'
        },
        'std-aqua-handle': {
            'name': 'Standard Aqua Handle',
            'displayName': 'Standard Neck Aqua Bottles with Handle',
            'description': 'Aqua-series standard neck bottles with comfortable handles. Premium design with ergonomic grip for easy feeding.',
            'image': '/images/Standard Neck Bottles With Handle  JPEG/RNH0019 - 120ml.jpg'
        }
    }
    
    # Generate TypeScript file content
    lines = []
    lines.append("// src/data/catalogData.ts")
    lines.append("export interface CatalogProduct {")
    lines.append("  sNo?: number;")
    lines.append("  modelNo: string;")
    lines.append("  image?: string;")
    lines.append("  description: string;")
    lines.append("  capacity?: string;")
    lines.append("  moldNos?: string;")
    lines.append("  remarks?: string;")
    lines.append("  packaging: string;")
    lines.append("  inner: number;")
    lines.append("  outer: number;")
    lines.append("  inr: number;")
    lines.append("  usd: number;")
    lines.append("  moq: number;")
    lines.append("  dimensions?: string;")
    lines.append("  cbm?: number;")
    lines.append("  monoDimensions?: string;")
    lines.append("  innerDimensions?: string;")
    lines.append("  masterDimensions?: string;")
    lines.append("}")
    lines.append("")
    lines.append("export interface ProductCategory {")
    lines.append("  id: string;")
    lines.append("  name: string;")
    lines.append("  displayName: string;")
    lines.append("  description: string;")
    lines.append("  image: string;")
    lines.append("  products: CatalogProduct[];")
    lines.append("}")
    lines.append("")
    lines.append("export const PRODUCT_CATEGORIES: ProductCategory[] = [")
    
    # Generate categories with products
    for category_id, products in categorized.items():
        if products:  # Only include categories that have products
            category_def = category_definitions[category_id]
            category_section = generate_category_section(
                category_id,
                category_def['name'],
                category_def['displayName'],
                category_def['description'],
                category_def['image'],
                products
            )
            lines.append(category_section)
    
    lines.append("];")
    
    # Write to file
    output_content = "\n".join(lines)
    with open(r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts', 'w', encoding='utf-8') as f:
        f.write(output_content)
    
    print("✅ Successfully updated catalogData.ts with Phoenix catalog data")
    print(f"📊 Total products processed: {len(phoenix_data)}")
    for category_id, products in categorized.items():
        if products:
            print(f"   - {category_definitions[category_id]['displayName']}: {len(products)} products")

if __name__ == "__main__":
    main()