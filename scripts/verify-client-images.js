// Client Images Verification Script
const fs = require('fs');
const path = require('path');

const TRUSTED_CLIENTS_DIR = path.join(__dirname, '..', 'public', 'images', 'trustedClients');

function verifyClientImages() {
  console.log('🔍 Verifying trusted client images...\n');
  
  // Check if trustedClients directory exists
  if (!fs.existsSync(TRUSTED_CLIENTS_DIR)) {
    console.log('❌ trustedClients directory does not exist');
    return;
  }
  
  console.log('✅ trustedClients directory exists');
  
  // Get all image files
  const files = fs.readdirSync(TRUSTED_CLIENTS_DIR);
  const imageFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg') || 
    file.toLowerCase().endsWith('.png')
  );
  
  console.log(`\n📊 Found ${imageFiles.length} client images:`);
  
  imageFiles.forEach((file, index) => {
    const filePath = path.join(TRUSTED_CLIENTS_DIR, file);
    const stats = fs.statSync(filePath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`   ${index + 1}. ${file} (${sizeKB}KB)`);
  });
  
  // Images referenced in the Clients component
  const referencedImages = [
    '1.jpg', 'Picture1.jpg', 'Picture2.jpg', 'Picture3.jpg', 'Picture4.jpg',
    'Picture5.png', 'Picture6.png', 'Picture7.png', 'Picture8.png', 'Picture9.png',
    'Picture10.png', 'Picture11.jpg', 'Picture12.jpg', 'Picture13.png', 'Picture14.jpg',
    'Picture15.jpg', 'Picture16.jpg', 'Picture17.jpg', 'Picture18.png', 'Picture19.jpg',
    'Picture20.jpg', 'Picture21.png', 'Picture22.png', 'Picture23.png', 'Picture24.png',
    'Picture25.jpg', 'Picture26.jpg', 'Picture27.png', 'Picture28.jpg', 'Picture29.png',
    'Picture30.png', 'Picture31.png', 'Picture32.jpg', 'Picture33.png', 'Picture34.jpg',
    'Picture35.png', 'Picture36.png', 'Picture37.jpg', 'Picture38.png', 'Picture39.png',
    'Picture40.png', 'Picture41.png', 'Picture42.png', 'Picture43.png', 'Picture44.jpg',
    'Picture45.jpg'
  ];
  
  console.log(`\n🔗 Checking ${referencedImages.length} referenced images:`);
  
  let foundCount = 0;
  let missingImages = [];
  
  referencedImages.forEach(imageName => {
    if (imageFiles.includes(imageName)) {
      foundCount++;
    } else {
      missingImages.push(imageName);
    }
  });
  
  console.log(`✅ Found: ${foundCount}/${referencedImages.length} referenced images`);
  
  if (missingImages.length > 0) {
    console.log(`\n⚠️  Missing images (${missingImages.length}):`);
    missingImages.forEach(img => console.log(`   - ${img}`));
  }
  
  // Extra images not referenced
  const extraImages = imageFiles.filter(file => !referencedImages.includes(file));
  if (extraImages.length > 0) {
    console.log(`\n📎 Extra images not referenced (${extraImages.length}):`);
    extraImages.forEach(img => console.log(`   - ${img}`));
  }
  
  console.log('\n🎉 Client images setup complete!');
  console.log('\n📋 Images are displayed in:');
  console.log('   - Home page Clients section (grid layout)');
  console.log('   - Responsive design: 2-8 columns based on screen size');
  console.log('\n🌐 Website should be running at: http://localhost:3000');
}

// Main execution
console.log('🏢 Phoenix Baby Products - Client Images Verification\n');
verifyClientImages();