# Content Extraction Guide for About Us Section

This guide will help you extract and organize content from your Word documents into the website's About Us section.

## Document Mapping

### 1. Vision & Mission.docx
**Target Location:** `src/utils/constants.ts` → `COMPANY_INFO` object
- Extract mission statement → Update `mission` field
- Extract vision statement → Update `vision` field
- Extract company values → Update `values` array

### 2. Facts.docx
**Target Location:** `src/utils/constants.ts` → `COMPANY_FACTS` object
- Update the following facts with actual data from your document:
  - `globalReach.value` (currently "60+ countries")
  - `productionCapacity.value` (currently "1M+ units monthly")
  - `qualityStandards.value` (currently "100% tested products")
  - `rdInvestment.value` (currently "15% of revenue")
  - `certifications.value` (currently "FDA, LFGB, CPC, EN")
  - `sustainability.value` (currently "Eco-friendly processes")

### 3. Leadership Team.docx
**Target Location:** `src/utils/constants.ts` → `TEAM_MEMBERS` array
- Replace existing team members with actual leadership team data:
  - `name`: Full name of the leader
  - `position`: Job title/role
  - `image`: Path to their photo (place photos in `/public/images/team/`)
  - `bio`: Brief biography/description
  - `experience`: Years of experience (e.g., "20+ years")

### 4. Manufacturing Process.docx
**Target Location:** `src/utils/constants.ts` → `MANUFACTURING_PROCESS` array
- Update the 4 main process steps with detailed information:
  - Step 1: Design & Development
  - Step 2: Material Selection
  - Step 3: Production
  - Step 4: Testing & Packaging
- For each step, update:
  - `title`: Process name
  - `description`: Brief overview
  - `details`: Array of specific activities/features

### 5. Services we offer.docx
**Target Location:** `src/utils/constants.ts` → `SERVICES_OFFERED` array
- Update the 6 service categories with actual service details:
  - OEM Manufacturing
  - ODM Services
  - Private Labeling
  - Quality Testing
  - Supply Chain Management
  - Technical Support
- For each service, update:
  - `title`: Service name
  - `description`: Service overview
  - `features`: Array of specific features/benefits

### 6. About us.docx
**Target Location:** `src/utils/constants.ts` → `COMPANY_INFO` object
- Extract company history → Update `history` field
- Extract headquarters information → Update `headquarters` field
- Any additional company overview content can be added to the page description

## How to Update the Content

### Step 1: Extract Content from Word Documents
1. Open each Word document
2. Copy the relevant text content
3. Format it appropriately for the website

### Step 2: Update Constants File
1. Open `src/utils/constants.ts`
2. Find the relevant data structure (COMPANY_INFO, COMPANY_FACTS, etc.)
3. Replace placeholder content with actual content from your documents

### Step 3: Add Images
1. Place team member photos in `/public/images/team/`
2. Update the `image` paths in `TEAM_MEMBERS` array
3. Ensure image names match the paths specified

### Step 4: Test the Changes
1. Save all changes
2. Run the development server: `npm start`
3. Navigate to the About page to see your updates
4. Check that all content displays correctly

## Content Structure Examples

### Mission Statement Example:
```javascript
mission: "To provide safe, innovative, and high-quality baby products that support healthy development and bring peace of mind to parents worldwide."
```

### Company Facts Example:
```javascript
globalReach: {
  title: "Global Reach",
  value: "75+ countries", // Update with actual number
  description: "Our products reach families across six continents",
  icon: "🌍"
}
```

### Team Member Example:
```javascript
{
  id: '1',
  name: 'John Smith', // Actual name from document
  position: 'Chief Executive Officer', // Actual position
  image: '/images/team/john-smith.jpg', // Actual photo path
  bio: 'Leading Phoenix with extensive experience...', // Actual bio
  experience: '25+ years' // Actual experience
}
```

### Manufacturing Process Example:
```javascript
{
  step: "1",
  title: "Design & Development",
  description: "Detailed description from your document...",
  icon: "🎨",
  details: [
    "Specific activity 1 from document",
    "Specific activity 2 from document",
    "Specific activity 3 from document",
    "Specific activity 4 from document"
  ]
}
```

## Additional Sections You Can Add

Based on your documents, you might want to add these additional sections:

1. **Our Factory** (from Our Factory.docx)
2. **Raw Materials** (from Raw Materials.docx)
3. **QC & Lab** (from QC & Lab.docx)
4. **What Sets Us Apart** (from What sets us apart.docx)
5. **Why Phoenix** (from Why Phoenix.docx)

Let me know if you'd like me to create additional sections for any of these!

## Notes
- Keep text concise and web-friendly
- Ensure all content is accurate and up-to-date
- Use consistent formatting and tone
- Test thoroughly after making changes
- Consider SEO when writing descriptions