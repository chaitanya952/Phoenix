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
  } else if (folderName.includes('Sippy Cups')) {
    // For Sippy Cups like SP0001 - extract capacity from description
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
    // For other products like Teethers & Pacifiers (TP0001) - use modelNo directly
    // Determine extension based on folder name
    const extension =  '.jpg';
    imagePath = `/images/${folderName}/${product.modelNo}${extension}`;
  }
  
  return imagePath;
};