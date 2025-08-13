#!/usr/bin/env python3
"""
Final script to fix remaining formatting issues in catalogData.ts
"""

import re
import sys

def final_format_fix(file_path):
    """Fix final formatting issues"""
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print("=== FINAL FORMATTING FIX ===")
        
        # Fix 1: Fix indentation - all product properties should have proper indentation
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            # If line starts with a space but not proper indentation, fix it
            if line.strip() and not line.startswith('//') and not line.startswith('export'):
                if line.startswith(' ') and not line.startswith('  '):
                    # This is likely a product property that needs proper indentation
                    if any(prop in line for prop in ['modelNo:', 'description:', 'packaging:', 'inner:', 'outer:', 'inr:', 'usd:', 'moq:', 'sNo:', 'capacity:', 'moldNos:', 'monoDimensions:', 'innerDimensions:', 'masterDimensions:', 'cbm:']):
                        line = '        ' + line.strip()
                    elif line.strip() in ['{', '}', '},']:
                        if line.strip() == '{':
                            line = '      {'
                        elif line.strip() in ['}', '},']:
                            line = '      ' + line.strip()
                elif not line.startswith(' '):
                    # Handle top-level structures
                    if line.strip() in ['{', '}', '},']:
                        if line.strip() == '{':
                            line = '  {'
                        elif line.strip() in ['}', '},']:
                            line = '  ' + line.strip()
                    elif any(prop in line for prop in ['id:', 'name:', 'displayName:', 'description:', 'image:', 'products:']):
                        line = '    ' + line.strip()
            
            fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
        # Fix 2: Fix the incomplete last line
        if content.endswith("masterDimensions: ''"):
            content = content.replace("masterDimensions: ''", "masterDimensions: 'L=10.4mm, B=26.2mm, D=183.6mm',\n        cbm: 0.05,\n      }\n    ]\n  }\n];\n\n// Helper function to get category by ID\nexport const getCategoryById = (id: string): ProductCategory | undefined => {\n  return PRODUCT_CATEGORIES.find(category => category.id === id);\n};\n\n// Helper function to get all category names\nexport const getCategoryNames = (): string[] => {\n  return PRODUCT_CATEGORIES.map(category => category.displayName);\n};\n\n// Helper function to search products across all categories\nexport const searchProducts = (query: string): { category: ProductCategory; product: CatalogProduct }[] => {\n  const results: { category: ProductCategory; product: CatalogProduct }[] = [];\n  \n  PRODUCT_CATEGORIES.forEach(category => {\n    category.products.forEach(product => {\n      if (\n        product.description.toLowerCase().includes(query.toLowerCase()) ||\n        product.modelNo.toLowerCase().includes(query.toLowerCase())\n      ) {\n        results.push({ category, product });\n      }\n    });\n  });\n  \n  return results;\n};")
        
        # Fix 3: Ensure proper spacing and formatting
        content = re.sub(r'\n\n\n+', '\n\n', content)  # Remove excessive blank lines
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("✓ Final formatting fixes applied successfully")
        return True
        
    except Exception as e:
        print(f"Error in final formatting fix: {e}")
        return False

def main():
    """Main function"""
    file_path = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts"
    
    success = final_format_fix(file_path)
    return success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)