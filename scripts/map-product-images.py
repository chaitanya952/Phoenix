#!/usr/bin/env python3
"""
Script to map product images to catalog data based on model numbers and capacities
"""

import json
import os
import re
from typing import Dict, List, Any

def find_matching_image(model_no: str, capacity: str, image_directories: List[str]) -> str:
    """Find matching image file for a product"""
    # Extract model number and capacity for matching
    model_base = model_no.split('-')[0]  # e.g., "RN0001" from "RN0001-60ml"
    capacity_clean = capacity.replace('ml', '')  # e.g., "60" from "60ml"
    
    # Possible image filename patterns
    possible_names = [
        f"{model_base} - {capacity}",
        f"{model_base} - {capacity_clean}ml",
        f"{model_no}",
        f"{model_base}-{capacity}",
        f"{model_base}-{capacity_clean}ml"
    ]
    
    # Search in all image directories
    for img_dir in image_directories:
        if not os.path.exists(img_dir):
            continue
            
        for filename in os.listdir(img_dir):
            if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
                # Remove extension for comparison
                name_without_ext = os.path.splitext(filename)[0]
                
                # Check if any pattern matches
                for pattern in possible_names:
                    if pattern.lower() == name_without_ext.lower():
                        # Return relative path from public directory
                        relative_path = os.path.relpath(os.path.join(img_dir, filename), 
                                                      r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public')
                        return '/' + relative_path.replace('\\', '/')
    
    return None

def update_catalog_with_images():
    """Update catalog data with image mappings"""
    
    # Image directories to search
    image_directories = [
        r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public\images\Standard Neck Bottles JPEG',
        r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public\images\Standard Neck Bottles With Handle  JPEG'
    ]
    
    # Read current catalog data
    catalog_path = r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\src\data\catalogData.ts'
    
    with open(catalog_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract the products data using regex
    # This is a simple approach - in production, you'd want more robust parsing
    lines = content.split('\n')
    updated_lines = []
    
    i = 0
    images_mapped = 0
    
    while i < len(lines):
        line = lines[i]
        updated_lines.append(line)
        
        # Look for product objects
        if 'modelNo:' in line and 'capacity:' in lines[i+2] if i+2 < len(lines) else False:
            # Extract model number and capacity
            model_match = re.search(r"modelNo: '([^']+)'", line)
            capacity_match = re.search(r"capacity: '([^']+)'", lines[i+2])
            
            if model_match and capacity_match:
                model_no = model_match.group(1)
                capacity = capacity_match.group(1)
                
                # Find matching image
                image_path = find_matching_image(model_no, capacity, image_directories)
                
                if image_path:
                    # Check if image property already exists
                    image_line_found = False
                    j = i + 1
                    while j < len(lines) and not lines[j].strip().startswith('}'):
                        if 'image:' in lines[j]:
                            # Update existing image line
                            lines[j] = f"        image: '{image_path}',"
                            image_line_found = True
                            images_mapped += 1
                            break
                        j += 1
                    
                    # If no image property exists, add it after modelNo
                    if not image_line_found:
                        updated_lines.append(f"        image: '{image_path}',")
                        images_mapped += 1
        
        i += 1
    
    # Write updated content back to file
    updated_content = '\n'.join(updated_lines)
    
    with open(catalog_path, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    
    print(f"✅ Successfully mapped {images_mapped} product images")
    return images_mapped

def main():
    """Main function"""
    try:
        images_mapped = update_catalog_with_images()
        print(f"📸 Image mapping completed: {images_mapped} products now have images")
        
        # Verify some mappings
        print("\n🔍 Sample image mappings:")
        
        # Check a few specific products
        sample_products = [
            ("RN0001-60ml", "60ml"),
            ("RN0001-125ml", "125ml"),
            ("RN0008-125ml", "125ml"),
            ("RN0015-120ml", "120ml")
        ]
        
        image_directories = [
            r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public\images\Standard Neck Bottles JPEG',
            r'c:\Users\Admin\OneDrive\Apps\baohui-baby-website\public\images\Standard Neck Bottles With Handle  JPEG'
        ]
        
        for model_no, capacity in sample_products:
            image_path = find_matching_image(model_no, capacity, image_directories)
            if image_path:
                print(f"   {model_no} ({capacity}) → {image_path}")
            else:
                print(f"   {model_no} ({capacity}) → No image found")
                
    except Exception as e:
        print(f"❌ Error during image mapping: {str(e)}")

if __name__ == "__main__":
    main()