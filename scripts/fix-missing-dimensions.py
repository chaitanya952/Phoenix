#!/usr/bin/env python3
"""
Script to fix missing dimension data in catalog
"""

import json
import re
from typing import Dict, List, Any

def load_phoenix_data() -> Dict[str, Dict[str, Any]]:
    """Load Phoenix catalog data as lookup dictionary"""
    with open(r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix_Catlog7.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    
    # Create lookup by model number
    lookup = {}
    for product in data:
        model_no = product.get('Model No.')
        if model_no:
            lookup[model_no] = product
    
    return lookup

def clean_value(value: Any) -> Any:
    """Clean NaN values and format properly"""
    if value is None or (isinstance(value, float) and str(value).lower() == 'nan'):
        return None
    return value

def fix_catalog_dimensions():
    """Fix missing dimensions in catalog data"""
    
    # Load Phoenix data
    phoenix_lookup = load_phoenix_data()
    
    # Read catalog file
    catalog_path = r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts'
    with open(catalog_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    lines = content.split('\n')
    updated_lines = []
    fixes_applied = 0
    
    i = 0
    while i < len(lines):
        line = lines[i]
        updated_lines.append(line)
        
        # Look for products with modelNo
        if 'modelNo:' in line:
            model_match = re.search(r"modelNo: '([^']+)'", line)
            if model_match:
                model_no = model_match.group(1)
                phoenix_product = phoenix_lookup.get(model_no)
                
                if phoenix_product:
                    # Check if dimensions are missing in the current product
                    product_end = i + 1
                    while product_end < len(lines) and not lines[product_end].strip().startswith('},'):
                        product_end += 1
                    
                    # Check what dimensions are present
                    has_mono = any('monoDimensions:' in lines[j] for j in range(i, product_end))
                    has_inner = any('innerDimensions:' in lines[j] for j in range(i, product_end))
                    has_master = any('masterDimensions:' in lines[j] for j in range(i, product_end))
                    has_cbm = any('cbm:' in lines[j] for j in range(i, product_end))
                    
                    # Get dimension data from Phoenix catalog
                    mono_dim = clean_value(phoenix_product.get('Mono Dimensions (LBH) mm'))
                    inner_dim = clean_value(phoenix_product.get('Inner Dimensions'))
                    master_dim = clean_value(phoenix_product.get('Master Dimensions'))
                    cbm_val = clean_value(phoenix_product.get('CBM _ Master'))
                    
                    # Add missing dimensions
                    dimensions_to_add = []
                    
                    if not has_mono and mono_dim:
                        # Clean up dimension string (remove newlines, extra spaces)
                        mono_clean = re.sub(r'\s+', ' ', str(mono_dim).replace('\n', ', ').strip())
                        dimensions_to_add.append(f"        monoDimensions: '{mono_clean}',")
                    
                    if not has_inner and inner_dim:
                        inner_clean = re.sub(r'\s+', ' ', str(inner_dim).replace('\n', ', ').strip())
                        dimensions_to_add.append(f"        innerDimensions: '{inner_clean}',")
                    
                    if not has_master and master_dim:
                        master_clean = re.sub(r'\s+', ' ', str(master_dim).replace('\n', ', ').strip())
                        dimensions_to_add.append(f"        masterDimensions: '{master_clean}',")
                    
                    if not has_cbm and cbm_val:
                        dimensions_to_add.append(f"        cbm: {cbm_val},")
                    
                    # Insert dimensions before the closing brace
                    if dimensions_to_add:
                        # Find the position to insert (before closing brace)
                        insert_pos = product_end - 1
                        while insert_pos > i and lines[insert_pos].strip() in ['', '},']:
                            insert_pos -= 1
                        
                        # Insert after the last property line
                        for dim_line in reversed(dimensions_to_add):
                            lines.insert(insert_pos + 1, dim_line)
                            fixes_applied += 1
        
        i += 1
    
    # Write updated content
    updated_content = '\n'.join(lines)
    with open(catalog_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ Fixed {fixes_applied} missing dimension entries")
    return fixes_applied

def main():
    """Main function"""
    try:
        print("🔧 Fixing missing dimension data...")
        fixes = fix_catalog_dimensions()
        
        if fixes > 0:
            print(f"📐 Successfully added {fixes} missing dimension entries")
            print("🔍 Running validation again to verify fixes...")
            
            # Run a quick validation
            import subprocess
            result = subprocess.run([
                'python', 
                r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\scripts\validate-catalog-data.py'
            ], capture_output=True, text=True, cwd=r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website')
            
            if result.returncode == 0:
                print("✅ Validation completed successfully")
            else:
                print("⚠️  Validation had some issues, but dimension fixes were applied")
        else:
            print("ℹ️  No dimension fixes were needed")
            
    except Exception as e:
        print(f"❌ Error fixing dimensions: {str(e)}")

if __name__ == "__main__":
    main()