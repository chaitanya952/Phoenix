// src/utils/imageUtils.ts

export const generateProductImagePath = (product: any, category: any): string => {
  // Extract the folder name from the category's image path
  const categoryImagePath = category.image;
  const folderName = categoryImagePath.split('/')[2]; // Gets "Standard Neck Bottles JPEG" from "/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg"
  
  // Generate image path based on product type
  let imagePath: string;
  
  if (product.modelNo.includes('-')) {
    // For products like RN0001-60ml, WN0001-210ml (Standard/Wide Neck)
    // Special cases: Products with "Handle" go to different folders
    let actualFolderName = folderName;
    if (folderName.includes('Wide Neck Bottles JPEG') && product.description.includes('Handle')) {
      actualFolderName = 'Wide Neck Bottles with Handle  JPEG'; // Note: double space in folder name
    } else if (folderName.includes('Standard Neck Bottles JPEG') && product.description.includes('Handle')) {
      actualFolderName = 'Standard Neck Bottles With Handle  JPEG'; // Note: double space in folder name
    }
    imagePath = `/images/${actualFolderName}/${product.modelNo.replace('-', ' - ')}.jpg`;
  } else if (/^SP\d{4}$/i.test(product.modelNo)) {
    // For Sippy Cups (SPxxxx) - extract capacity from description
    const capacityMatch = product.description.match(/(\d+ml)/);
    const capacity = capacityMatch ? capacityMatch[1] : '';
    
    // Handle special cases for sippy cups with multiple images
    if (product.modelNo === 'SP0003') {
      // SP0003 has multiple images, use the first one
      imagePath = `/images/${folderName}/${product.modelNo} - ${capacity} 1.jpg`;
    } else if (product.modelNo === 'SP0008') {
      // SP0008 has multiple images, use the first one
      imagePath = `/images/${folderName}/${product.modelNo} - ${capacity} 1.jpg`;
    } else if (capacity) {
      imagePath = `/images/${folderName}/${product.modelNo} - ${capacity}.jpg`;
    } else {
      // Fallback for sippy cups without capacity
      imagePath = `/images/Phoenix_Logo.png`;
    }
  } else {
    // For other products like Teethers & Pacifiers (TP0001) or Cutlery & Tableware (CT0001)
    // Choose extension based on folder naming conventions (.JPG used in these folders)
    const useUppercaseJPG = /Teethers & Pacifiers|Cutlery & Tableware/i.test(folderName);
    const extension = useUppercaseJPG ? '.JPG' : '.jpg';

    // Handle known filename exceptions
    let filename = product.modelNo;
    if (folderName.includes('Cutlery & Tableware') && product.modelNo === 'CT0003') {
      // File is named "CT0003 CT0003.JPG" in assets
      filename = 'CT0003 CT0003';
    }

    // Special fallback for Teethers & Pacifiers models with placeholders only
    if (folderName.includes('Teethers & Pacifiers')) {
      const placeholders = new Set(['TP0017','TP0020','TP0021','TP0022','TP0023','TP0024']);
      if (placeholders.has(product.modelNo)) {
        imagePath = `/images/Missing Images JPEG/${product.modelNo}.jpg`;
      } else {
        imagePath = `/images/${folderName}/${filename}${extension}`;
      }
    } else {
      imagePath = `/images/${folderName}/${filename}${extension}`;
    }
  }
  
  return imagePath;
};