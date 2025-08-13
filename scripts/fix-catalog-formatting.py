#!/usr/bin/env python3
"""
Script to fix formatting issues in catalogData.ts
- Fix line breaks in dimension strings
- Fix indentation issues
- Clean up formatting
"""

import re
import sys

def fix_catalog_formatting(file_path):
    """Fix formatting issues in the catalog file"""
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print("=== FIXING CATALOG FORMATTING ===")
        
        # Fix dimension strings that are split across multiple lines
        # Pattern to match dimension strings with line breaks
        dimension_pattern = r"(monoDimensions|innerDimensions|masterDimensions): '([^']*?)'"
        
        def fix_dimension_string(match):
            field_name = match.group(1)
            dimension_value = match.group(2)
            
            # Remove line breaks and extra spaces, normalize formatting
            cleaned_value = re.sub(r'\s*\n\s*', ' ', dimension_value)
            cleaned_value = re.sub(r'\s+', ' ', cleaned_value)
            cleaned_value = cleaned_value.strip()
            
            return f"{field_name}: '{cleaned_value}'"
        
        # Apply the fix
        content = re.sub(dimension_pattern, fix_dimension_string, content, flags=re.DOTALL)
        
        # Fix any remaining formatting issues
        # Fix comma spacing issues like "B=5,4mm" to "B=5.4mm"
        content = re.sub(r'B=(\d+),(\d+)mm', r'B=\1.\2mm', content)
        
        # Fix any double spaces
        content = re.sub(r'  +', ' ', content)
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("✓ Catalog formatting fixed successfully")
        return True
        
    except Exception as e:
        print(f"Error fixing catalog formatting: {e}")
        return False

def main():
    """Main function"""
    file_path = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts"
    
    success = fix_catalog_formatting(file_path)
    return success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)