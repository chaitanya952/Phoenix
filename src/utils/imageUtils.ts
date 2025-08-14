// src/utils/imageUtils.ts

export const generateProductImagePath = (product: any, category: any): string => {
  // Extract the folder name from the category's image path
  const categoryImagePath = category.image;
  const folderName = categoryImagePath.split('/')[2]; // Gets "Standard Neck Bottles JPEG" from "/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg"
  
  // Generate image path based on product type
  let imagePath: string;
  
  if (product.modelNo.includes('-')) {
    // For products like RN0001-60ml, WN0001-210ml (Standard/Wide Neck)
    // Special case: Wide Neck products with "Handle" go to a different folder
    let actualFolderName = folderName;
    if (folderName.includes('Wide Neck Bottles JPEG') && product.description.includes('Handle')) {
      actualFolderName = 'Wide Neck Bottles with Handle  JPEG'; // Note: double space in folder name
    }
    imagePath = `/images/${actualFolderName}/${product.modelNo.replace('-', ' - ')}.jpg`;
  } else if (folderName.includes('Sippy Cups')) {
    // For Sippy Cups like SP0001 - extract capacity from description
    const capacityMatch = product.description.match(/(\d+ml)/);
    const capacity = capacityMatch ? capacityMatch[1] : '';
    imagePath = `/images/${folderName}/${product.modelNo} - ${capacity}.jpg`;
  } else {
    // For other products like Teethers & Pacifiers (TP0001) - use modelNo directly
    // Determine extension based on folder name
    const extension = (folderName.includes('Others') || folderName.includes('MotherCare')) ? '.jpg' : '.JPG';
    imagePath = `/images/${folderName}/${product.modelNo}${extension}`;
  }
  
  return imagePath;
};