// Client Logo Extraction Helper Script
// This script helps verify the client logo structure and provides utilities

const fs = require('fs');
const path = require('path');

const CLIENTS_DIR = path.join(__dirname, '..', 'public', 'images', 'clients');
const CLIENTS_JPEG = path.join(__dirname, '..', 'public', 'images', 'clients.jpeg');

const EXPECTED_CLIENTS = [
  { id: 'kikka-boo', name: 'KiKKA boo', industry: 'Baby Products Retail' },
  { id: 'bubbles', name: 'Bubbles', industry: 'Baby Care Distribution' },
  { id: 'disney', name: 'Disney', industry: 'Licensed Products' },
  { id: 'baby-care', name: 'Baby Care', industry: 'Healthcare & Baby Products' },
  { id: 'beaba', name: 'BEABA', industry: 'Premium Baby Products' },
  { id: 'yeehoo', name: 'YEEHOO', industry: 'Baby Products Manufacturing' },
  { id: 'mothercare', name: 'Mothercare', industry: 'Global Baby Retail' },
  { id: 'chicco', name: 'Chicco', industry: 'Baby Products & Toys' },
  { id: 'pigeon', name: 'Pigeon', industry: 'Baby Feeding Products' },
  { id: 'munchkin', name: 'Munchkin', industry: 'Innovative Baby Products' },
  { id: 'tommee-tippee', name: 'Tommee Tippee', industry: 'Baby Feeding Solutions' },
  { id: 'mam', name: 'MAM', industry: 'Baby Products & Pacifiers' }
];

function checkClientLogos() {
  console.log('🔍 Checking client logo structure...\n');
  
  // Check if clients directory exists
  if (!fs.existsSync(CLIENTS_DIR)) {
    console.log('❌ Clients directory does not exist');
    return;
  }
  
  // Check if source clients.jpeg exists
  if (!fs.existsSync(CLIENTS_JPEG)) {
    console.log('❌ Source clients.jpeg file not found');
    return;
  }
  
  console.log('✅ Clients directory exists');
  console.log('✅ Source clients.jpeg found');
  console.log('');
  
  // Check each expected client logo
  let foundLogos = 0;
  let missingLogos = [];
  
  EXPECTED_CLIENTS.forEach(client => {
    const logoPath = path.join(CLIENTS_DIR, `${client.id}.png`);
    if (fs.existsSync(logoPath)) {
      console.log(`✅ ${client.name} logo found`);
      foundLogos++;
    } else {
      console.log(`❌ ${client.name} logo missing (${client.id}.png)`);
      missingLogos.push(client);
    }
  });
  
  console.log(`\n📊 Summary: ${foundLogos}/${EXPECTED_CLIENTS.length} logos found`);
  
  if (missingLogos.length > 0) {
    console.log('\n🚨 Missing logos:');
    missingLogos.forEach(client => {
      console.log(`   - ${client.name} (${client.id}.png) - ${client.industry}`);
    });
    
    console.log('\n📋 Next steps:');
    console.log('1. Open public/images/clients.jpeg in an image editor');
    console.log('2. Extract each missing logo as a separate PNG file');
    console.log('3. Save with transparent background');
    console.log('4. Use the exact filenames listed above');
    console.log('5. Place in public/images/clients/ directory');
  } else {
    console.log('\n🎉 All client logos are present!');
  }
}

function generateExtractionTemplate() {
  console.log('\n📝 Generating extraction template...');
  
  const template = `# Client Logo Extraction Checklist

## Source File
- [ ] Open: public/images/clients.jpeg

## Extract the following logos:

${EXPECTED_CLIENTS.map(client => 
  `- [ ] **${client.name}**
  - File: ${client.id}.png
  - Industry: ${client.industry}
  - Path: public/images/clients/${client.id}.png`
).join('\n\n')}

## Quality Requirements
- Format: PNG with transparent background
- Size: 200x200px minimum
- Clean edges, no artifacts
- Consistent quality across all logos

## Testing
After extraction, run: \`node scripts/extract-client-logos.js\`
`;

  const templatePath = path.join(__dirname, '..', 'CLIENT_EXTRACTION_CHECKLIST.md');
  fs.writeFileSync(templatePath, template);
  console.log(`✅ Template saved to: CLIENT_EXTRACTION_CHECKLIST.md`);
}

// Main execution
console.log('🏢 Phoenix Baby Products - Client Logo Extraction Helper\n');

checkClientLogos();
generateExtractionTemplate();

console.log('\n🔧 Usage:');
console.log('- Run this script anytime to check logo status');
console.log('- Follow the extraction guide in CLIENT_LOGO_EXTRACTION_GUIDE.md');
console.log('- Use the checklist in CLIENT_EXTRACTION_CHECKLIST.md');