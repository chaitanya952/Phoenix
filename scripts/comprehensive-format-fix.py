#!/usr/bin/env python3
"""
Comprehensive script to fix all formatting issues in catalogData.ts
"""

import re
import sys

def fix_all_formatting_issues(file_path):
    """Fix all formatting issues in the catalog file"""
    
    try:
        # Read the file
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        print("=== COMPREHENSIVE FORMATTING FIX ===")
        
        # Fix 1: Dimension strings split across lines
        # This pattern matches dimension fields that span multiple lines
        patterns_to_fix = [
            (r"(monoDimensions: '[^']*?)\n\s*([^']*?')", r"\1 \2"),
            (r"(innerDimensions: '[^']*?)\n\s*([^']*?')", r"\1 \2"),
            (r"(masterDimensions: '[^']*?)\n\s*([^']*?')", r"\1 \2"),
        ]
        
        for pattern, replacement in patterns_to_fix:
            content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # Fix 2: Clean up any remaining multi-line dimension strings
        # Look for dimension strings that still have line breaks
        def clean_dimension_value(match):
            full_match = match.group(0)
            # Remove line breaks and normalize spaces
            cleaned = re.sub(r'\s*\n\s*', ' ', full_match)
            cleaned = re.sub(r'\s+', ' ', cleaned)
            return cleaned
        
        # Apply to all dimension fields
        dimension_fields = ['monoDimensions', 'innerDimensions', 'masterDimensions']
        for field in dimension_fields:
            pattern = f"{field}: '[^']*'"
            content = re.sub(pattern, clean_dimension_value, content, flags=re.DOTALL)
        
        # Fix 3: Fix comma issues in numbers (like "5,4" should be "5.4")
        content = re.sub(r'(\d+),(\d+)mm', r'\1.\2mm', content)
        
        # Fix 4: Fix any truncated lines (like "masterDi" at end of file)
        # Look for incomplete field names at line endings
        content = re.sub(r'masterDi\s*$', 'masterDimensions: \'\'', content, flags=re.MULTILINE)
        
        # Fix 5: Ensure proper spacing in dimension strings
        # Normalize spacing around commas and equals signs
        def normalize_dimension_spacing(match):
            field_name = match.group(1)
            dimension_value = match.group(2)
            
            # Normalize spacing: remove extra spaces, ensure single space after commas
            normalized = re.sub(r'\s*=\s*', '=', dimension_value)
            normalized = re.sub(r'\s*,\s*', ', ', normalized)
            normalized = re.sub(r'\s+', ' ', normalized)
            normalized = normalized.strip()
            
            return f"{field_name}: '{normalized}'"
        
        # Apply normalization to all dimension fields
        for field in dimension_fields:
            pattern = f"({field}): '([^']*)'"
            content = re.sub(pattern, normalize_dimension_spacing, content)
        
        # Fix 6: Remove any double spaces that might have been introduced
        content = re.sub(r'  +', ' ', content)
        
        # Fix 7: Ensure proper line endings
        content = content.replace('\r\n', '\n').replace('\r', '\n')
        
        # Write the fixed content back
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("✓ All formatting issues fixed successfully")
        return True
        
    except Exception as e:
        print(f"Error fixing formatting: {e}")
        return False

def main():
    """Main function"""
    file_path = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts"
    
    success = fix_all_formatting_issues(file_path)
    return success

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1)