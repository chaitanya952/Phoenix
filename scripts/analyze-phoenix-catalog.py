#!/usr/bin/env python3
"""
Script to analyze Phoenix Catalog 7 Excel file and understand its structure
"""

import pandas as pd
import sys
import os

def analyze_excel_file(file_path):
    """Analyze the Excel file structure and content"""
    try:
        # Read the Excel file
        excel_file = pd.ExcelFile(file_path)
        
        print("=== PHOENIX CATALOG 7 ANALYSIS ===")
        print(f"File: {file_path}")
        print(f"Number of sheets: {len(excel_file.sheet_names)}")
        print(f"Sheet names: {excel_file.sheet_names}")
        print()
        
        # Analyze each sheet
        for sheet_name in excel_file.sheet_names:
            print(f"=== SHEET: {sheet_name} ===")
            try:
                df = pd.read_excel(file_path, sheet_name=sheet_name)
                print(f"Dimensions: {df.shape[0]} rows x {df.shape[1]} columns")
                print(f"Columns: {list(df.columns)}")
                
                # Show first few rows
                print("\nFirst 5 rows:")
                print(df.head().to_string())
                
                # Check for categories if this looks like product data
                if 'category' in df.columns or 'Category' in df.columns:
                    category_col = 'category' if 'category' in df.columns else 'Category'
                    categories = df[category_col].value_counts()
                    print(f"\nCategories found:")
                    print(categories)
                
                print("\n" + "="*50 + "\n")
                
            except Exception as e:
                print(f"Error reading sheet {sheet_name}: {e}")
                print()
        
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return False
    
    return True

if __name__ == "__main__":
    file_path = r"c:\Users\Admin\OneDrive\Apps\baohui-baby-website\DATA\Phoenix Catlog7.xlsx"
    
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        sys.exit(1)
    
    analyze_excel_file(file_path)