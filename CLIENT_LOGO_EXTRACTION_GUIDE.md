# Client Logo Extraction Guide

## Overview
This guide will help you extract individual client logos from the `clients.jpeg` file and place them in the correct directory structure.

## Required Client Logos
Based on the clients.jpeg image, you need to extract the following logos:

### 1. KiKKA boo
- **File name**: `kikka-boo.png`
- **Path**: `/public/images/clients/kikka-boo.png`
- **Description**: European baby products brand

### 2. Bubbles
- **File name**: `bubbles.png`
- **Path**: `/public/images/clients/bubbles.png`
- **Description**: Baby care distribution company

### 3. Disney
- **File name**: `disney.png`
- **Path**: `/public/images/clients/disney.png`
- **Description**: Global entertainment leader

### 4. Baby Care
- **File name**: `baby-care.png`
- **Path**: `/public/images/clients/baby-care.png`
- **Description**: Healthcare & baby products company

### 5. BEABA
- **File name**: `beaba.png`
- **Path**: `/public/images/clients/beaba.png`
- **Description**: French premium baby brand

### 6. YEEHOO
- **File name**: `yeehoo.png`
- **Path**: `/public/images/clients/yeehoo.png`
- **Description**: Modern baby products brand

### 7. Mothercare
- **File name**: `mothercare.png`
- **Path**: `/public/images/clients/mothercare.png`
- **Description**: World-renowned baby retailer

### 8. Chicco
- **File name**: `chicco.png`
- **Path**: `/public/images/clients/chicco.png`
- **Description**: Italian baby care brand

### 9. Pigeon
- **File name**: `pigeon.png`
- **Path**: `/public/images/clients/pigeon.png`
- **Description**: Japanese baby care company

### 10. Munchkin
- **File name**: `munchkin.png`
- **Path**: `/public/images/clients/munchkin.png`
- **Description**: American innovative baby products

### 11. Tommee Tippee
- **File name**: `tommee-tippee.png`
- **Path**: `/public/images/clients/tommee-tippee.png`
- **Description**: British feeding solutions brand

### 12. MAM
- **File name**: `mam.png`
- **Path**: `/public/images/clients/mam.png`
- **Description**: Austrian baby bottles and pacifiers

## Extraction Steps

### Method 1: Using Image Editing Software (Recommended)
1. Open `public/images/clients.jpeg` in Photoshop, GIMP, or similar software
2. Use the selection tool to select each individual logo
3. Copy and paste each logo into a new transparent background document
4. Save each logo as PNG format with the exact filename listed above
5. Place all extracted logos in the `public/images/clients/` directory

### Method 2: Using Online Tools
1. Upload `clients.jpeg` to an online image editor like Photopea.com
2. Use selection tools to isolate each logo
3. Export each logo as PNG with transparent background
4. Download and rename according to the list above

### Method 3: Using AI Tools
1. Use AI-powered background removal tools to isolate each logo
2. Tools like remove.bg, Canva, or similar can help extract logos cleanly
3. Ensure each logo has a transparent background
4. Save with the correct filenames

## Quality Guidelines
- **Format**: PNG with transparent background
- **Size**: Minimum 200x200px, maximum 500x500px
- **Quality**: High resolution, clean edges
- **Background**: Transparent (no white/colored background)
- **Naming**: Exact filenames as specified (lowercase, hyphenated)

## Fallback Handling
The website code includes fallback handling:
- If individual logos are not found, it will display the client name as text
- Error handling ensures the website continues to function
- You can add logos gradually - the site will work with partial logo sets

## Directory Structure
```
public/
  images/
    clients/
      kikka-boo.png
      bubbles.png
      disney.png
      baby-care.png
      beaba.png
      yeehoo.png
      mothercare.png
      chicco.png
      pigeon.png
      munchkin.png
      tommee-tippee.png
      mam.png
```

## Testing
After extracting the logos:
1. Start the development server: `npm run dev`
2. Navigate to the home page
3. Check the "Customers" and "Clients" sections
4. Verify all logos display correctly
5. Test hover effects and responsive behavior

## Notes
- The website is already configured to use these individual logo paths
- Customer data includes industry information and partnership details
- Both B2C (Customers) and B2B (Clients) sections will use these logos
- Logos should maintain brand consistency and quality standards