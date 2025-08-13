#!/usr/bin/env python3
"""
Final script to fix remaining formatting issues in catalogData.ts
"""

import re
import sys

def final_format_fix(file_path):
    """Fix remaining formatting issues"""
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print("=== FINAL FORMATTING FIX ===")
        
        # Fix the incomplete file ending
        if content.endswith("masterDimensions: ''"):
            # Complete the file properly
            content = content.replace("masterDimensions: ''", """masterDimensions: 'L=10.4mm, B=26.2mm, D=183.6mm',
        cbm: 0.05,
      }
    ]
  }
];

// Helper function to get category by ID
export const getCategoryById = (id: string): ProductCategory | undefined => {
  return PRODUCT_CATEGORIES.find(category => category.id === id);
};

// Helper function to get all category names
export const getCategoryNames = (): string[] => {
  return PRODUCT_CATEGORIES.map(category => category.displayName);
};

// Helper function to search products across all categories
export const searchProducts = (query: string): { category: ProductCategory; product: CatalogProduct }[] => {
  const results: { category: ProductCategory; product: CatalogProduct }[] = [];
  
  PRODUCT_CATEGORIES.forEach(category => {
    category.products.forEach(product => {
      if (
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.modelNo.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({ category, product });
      }
    });
  });
  
  return results;
};""")
        
        # Fix indentation issues - replace single space indentation with proper indentation
        lines = content.split('\n')
        fixed_lines = []
        
        for line in lines:
            if not line.strip():
                fixed_lines.append('')
                continue
                
            # Fix single-space indentation to proper indentation
            if line.startswith(' ') and not line.startswith('  '):
                # This is single-space indented, needs to be fixed
                content_part = line.lstrip()
                
                # Determine proper indentation level
                if any(content_part.startswith(prop) for prop in ['modelNo:', 'description:', 'packaging:', 'inner:', 'outer:', 'inr:', 'usd:', 'moq:', 'sNo:', 'capacity:', 'moldNos:', 'remarks:', 'monoDimensions:', 'innerDimensions:', 'masterDimensions:', 'cbm:']):
                    fixed_lines.append('        ' + content_part)
                elif content_part.startswith('}') and content_part.endswith(','):
                    fixed_lines.append('      ' + content_part)
                else:
                    fixed_lines.append(line)
            else:
                fixed_lines.append(line)
        
        content = '\n'.join(fixed_lines)
        
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