// src/utils/constants.ts
import { Product, CompanyStats, Customer, Service, Certification, FAQ, TeamMember, NewsItem, Testimonial } from '../types';

export const COMPANY_STATS: CompanyStats = {
  years: 20,
  employees: 500,
  factoryArea: 70000,
  countries: 60,
  monthlyCapacity: 1000000
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wide Neck Bottles',
    description: 'Premium wide neck feeding bottles with superior design and multiple capacity options',
    image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
    category: 'Feeding',
    features: ['Wide Neck Design', 'Easy to Clean', 'Anti-Colic', 'BPA Free', 'Multiple Capacities'],
    subProducts: [
      {
        id: '1-1',
        name: 'WN0001 Wide Neck Bottle',
        description: 'Classic wide neck bottle with ergonomic design',
        image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Wide Neck', 'Easy Fill', 'Anti-Colic Vent', 'BPA-Free', 'Dishwasher Safe'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '210ml, 240ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear transparent design',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Good drop resistance with sturdy construction',
        durability: 'Long-lasting with proper care'
      },
      {
        id: '1-2',
        name: 'WN0013 Wide Neck Bottle',
        description: 'Advanced wide neck bottle with premium features',
        image: '/images/Wide Neck Bottles JPEG/WN0013 - 150ml.jpg',
        material: 'PPSU (Polyphenylsulfone)',
        features: ['Premium Material', 'Heat Resistant', 'Crystal Clear', 'BPA-Free', 'Long-lasting'],
        specifications: {
          'Material': 'PPSU (Polyphenylsulfone)',
          'Capacity': '150ml, 210ml, 300ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC, EN'
        },
        transparency: 'High transparency with amber tint',
        heatResistance: 'Can withstand 180°C-200°C',
        dropResistance: 'Excellent drop resistance',
        durability: 'Most durable option, withstands repeated sterilization'
      },
      {
        id: '1-3',
        name: 'WN0021 Wide Neck Bottle',
        description: 'Ergonomic wide neck bottle with comfortable grip',
        image: '/images/Wide Neck Bottles JPEG/WN0021 - 150ml.jpg',
        material: 'Tritan Copolyester',
        features: ['Crystal Clear', 'Impact Resistant', 'Stain Resistant', 'BPA-Free', 'Easy Grip'],
        specifications: {
          'Material': 'Tritan Copolyester',
          'Capacity': '150ml, 270ml, 330ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Glass-like clarity',
        heatResistance: 'Up to 90°C',
        dropResistance: 'Excellent impact resistance',
        durability: 'Maintains clarity and performance long-term'
      }
    ]
  },
  {
    id: '2',
    name: 'Wide Neck Bottles with Handle',
    description: 'Convenient wide neck bottles with ergonomic handles for easy gripping',
    image: '/images/Wide Neck Bottles with Handle  JPEG/WN0029 - 210ml.jpg',
    category: 'Feeding',
    features: ['Ergonomic Handle', 'Wide Neck', 'Easy Grip', 'Anti-Colic', 'BPA Free'],
    subProducts: [
      {
        id: '2-1',
        name: 'WN0029 Handle Bottle',
        description: 'Wide neck bottle with comfortable side handles',
        image: '/images/Wide Neck Bottles with Handle  JPEG/WN0029 - 210ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Dual Handles', 'Wide Neck', 'Easy Grip', 'BPA-Free', 'Anti-Colic System'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '210ml, 240ml',
          'Age Range': '3+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear with colored handles',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Enhanced with handle protection',
        durability: 'Sturdy handle construction'
      },
      {
        id: '2-2',
        name: 'WN0033 Handle Bottle',
        description: 'Premium handle bottle with multiple capacity options',
        image: '/images/Wide Neck Bottles with Handle  JPEG/WN0033 - 150ml.jpg',
        material: 'PPSU (Polyphenylsulfone)',
        features: ['Premium Handles', 'Heat Resistant', 'Multiple Sizes', 'BPA-Free', 'Easy Clean'],
        specifications: {
          'Material': 'PPSU (Polyphenylsulfone)',
          'Capacity': '150ml, 210ml, 300ml',
          'Age Range': '3+ months',
          'Certification': 'FDA, LFGB, CPC, EN'
        },
        transparency: 'Amber tinted with clear handles',
        heatResistance: 'Can withstand 180°C-200°C',
        dropResistance: 'Superior with reinforced handles',
        durability: 'Professional grade construction'
      }
    ]
  },
  {
    id: '3',
    name: 'Standard Neck Bottles',
    description: 'Classic standard neck bottles with reliable performance and proven design',
    image: '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg',
    category: 'Feeding',
    features: ['Standard Neck', 'Universal Compatibility', 'Reliable Design', 'BPA Free', 'Easy to Use'],
    subProducts: [
      {
        id: '3-1',
        name: 'RN0001 Standard Bottle',
        description: 'Classic standard neck bottle for everyday feeding',
        image: '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Universal Nipples', 'Lightweight', 'BPA-Free', 'Cost Effective'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '125ml, 250ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear transparent',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Good basic protection',
        durability: 'Reliable everyday use'
      },
      {
        id: '3-2',
        name: 'RN0013 Standard Bottle',
        description: 'Enhanced standard neck bottle with improved features',
        image: '/images/Standard Neck Bottles JPEG/RN0013 - 125ml.jpg',
        material: 'PPSU (Polyphenylsulfone)',
        features: ['Premium Standard Neck', 'Heat Resistant', 'Crystal Clear', 'BPA-Free', 'Professional Grade'],
        specifications: {
          'Material': 'PPSU (Polyphenylsulfone)',
          'Capacity': '125ml, 250ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC, EN'
        },
        transparency: 'High clarity with amber tint',
        heatResistance: 'Can withstand 180°C-200°C',
        dropResistance: 'Excellent structural integrity',
        durability: 'Superior long-term performance'
      }
    ]
  },
  {
    id: '4',
    name: 'Standard Neck Bottles with Handle',
    description: 'Standard neck bottles enhanced with comfortable handles for better grip',
    image: '/images/Standard Neck Bottles With Handle  JPEG/RN0029 - 125ml.jpg',
    category: 'Feeding',
    features: ['Standard Neck', 'Ergonomic Handles', 'Easy Grip', 'Universal Compatibility', 'BPA Free'],
    subProducts: [
      {
        id: '4-1',
        name: 'RN0029 Handle Bottle',
        description: 'Standard neck bottle with practical side handles',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0029 - 125ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Comfortable Handles', 'Easy Grip', 'BPA-Free', 'Lightweight'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '125ml, 250ml',
          'Age Range': '3+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear with colored handles',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Enhanced with handle support',
        durability: 'Reliable handle attachment'
      }
    ]
  },
  {
    id: '5',
    name: 'Sippy Cups',
    description: 'Transition cups for toddlers with spill-proof design and various capacity options',
    image: '/images/Sippy Cups JPEG/SP0001 - 150ml.jpg',
    category: 'Drinking',
    features: ['Spill-Proof', 'Easy Transition', 'Multiple Capacities', 'BPA Free', 'Toddler Friendly'],
    subProducts: [
      {
        id: '5-1',
        name: 'SP0001 Sippy Cup',
        description: 'Basic sippy cup perfect for first-time users',
        image: '/images/Sippy Cups JPEG/SP0001 - 150ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Spill-Proof Spout', 'Easy Grip', 'Lightweight', 'BPA-Free', 'Easy Clean'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '150ml',
          'Age Range': '6+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear with colored spout',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Good for toddler use',
        durability: 'Designed for active toddlers'
      },
      {
        id: '5-2',
        name: 'SP0003 Sippy Cup',
        description: 'Advanced sippy cup with enhanced features',
        image: '/images/Sippy Cups JPEG/SP0003 - 200ml 1.jpg',
        material: 'Tritan Copolyester',
        features: ['Crystal Clear', 'Spill-Proof', 'Impact Resistant', 'BPA-Free', 'Stain Resistant'],
        specifications: {
          'Material': 'Tritan Copolyester',
          'Capacity': '200ml',
          'Age Range': '6+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Glass-like clarity',
        heatResistance: 'Up to 90°C',
        dropResistance: 'Excellent impact resistance',
        durability: 'Long-lasting performance'
      }
    ]
  },
  {
    id: '6',
    name: 'Cutlery & Tableware',
    description: 'Complete feeding solutions including spoons, forks, bowls and plates for solid food introduction',
    image: '/images/Cutlery & Tableware JPEG/CT0001.JPG',
    category: 'Feeding',
    features: ['Complete Set', 'Age-Appropriate', 'Safe Materials', 'Easy to Clean', 'Ergonomic Design'],
    subProducts: [
      {
        id: '6-1',
        name: 'CT0001 Feeding Set',
        description: 'Complete tableware set for baby feeding',
        image: '/images/Cutlery & Tableware JPEG/CT0001.JPG',
        material: 'Food-Grade PP/Silicone',
        features: ['Complete Set', 'Non-Slip Base', 'Soft Edges', 'BPA-Free', 'Dishwasher Safe'],
        specifications: {
          'Material': 'Food-Grade PP/Silicone',
          'Set Includes': 'Bowl, Plate, Spoon, Fork',
          'Age Range': '6+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Colorful opaque design',
        heatResistance: 'Up to 120°C',
        dropResistance: 'Excellent with soft materials',
        durability: 'Long-lasting with proper care'
      },
      {
        id: '6-2',
        name: 'CT0002 Utensil Set',
        description: 'Ergonomic utensils designed for little hands',
        image: '/images/Cutlery & Tableware JPEG/CT0002.JPG',
        material: 'Food-Grade Silicone',
        features: ['Ergonomic Design', 'Soft Tips', 'Easy Grip', 'BPA-Free', 'Gentle on Gums'],
        specifications: {
          'Material': 'Food-Grade Silicone',
          'Set Includes': 'Training Spoon, Fork',
          'Age Range': '6+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Semi-transparent silicone',
        heatResistance: 'Up to 200°C',
        dropResistance: 'Excellent shock absorption',
        durability: 'Maintains flexibility over time'
      }
    ]
  },
  {
    id: '7',
    name: 'Teethers & Pacifiers',
    description: 'Safe and soothing teethers and pacifiers for baby comfort and development',
    image: '/images/Teethers & Pacifiers JPEG/TP0001.JPG',
    category: 'Care',
    features: ['Safe Materials', 'Soothing Design', 'Easy to Clean', 'BPA Free', 'Orthodontic Shape'],
    subProducts: [
      {
        id: '7-1',
        name: 'TP0001 Teether',
        description: 'Soft silicone teether for soothing baby gums',
        image: '/images/Teethers & Pacifiers JPEG/TP0001.JPG',
        material: 'Food-Grade Silicone',
        features: ['Soft Texture', 'Easy Grip', 'Soothing Relief', 'BPA-Free', 'Easy to Clean'],
        specifications: {
          'Material': 'Food-Grade Silicone',
          'Design': 'Ergonomic teething surface',
          'Age Range': '3+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Colorful translucent',
        heatResistance: 'Up to 200°C for sterilization',
        dropResistance: 'Flexible and unbreakable',
        durability: 'Long-lasting silicone construction'
      },
      {
        id: '7-2',
        name: 'TP0005 Pacifier',
        description: 'Orthodontic pacifier designed for healthy oral development',
        image: '/images/Teethers & Pacifiers JPEG/TP0005.JPG',
        material: 'Food-Grade Silicone',
        features: ['Orthodontic Shape', 'Soft Silicone', 'Air Holes', 'BPA-Free', 'Easy Grip Handle'],
        specifications: {
          'Material': 'Food-Grade Silicone',
          'Design': 'Orthodontic nipple shape',
          'Age Range': '0+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear with colored shield',
        heatResistance: 'Up to 200°C for sterilization',
        dropResistance: 'Durable construction',
        durability: 'Maintains shape and softness'
      }
    ]
  },
  {
    id: '8',
    name: 'Silicone Feeding Bottles',
    description: 'Premium silicone feeding bottles offering natural feel and superior flexibility',
    image: '/images/Silicone Feeding Bottle Big Assembly.jpg',
    category: 'Feeding',
    features: ['100% Silicone', 'Natural Feel', 'Flexible', 'BPA Free', 'Easy to Squeeze'],
    subProducts: [
      {
        id: '8-1',
        name: 'Large Silicone Bottle',
        description: 'Large capacity silicone bottle for growing babies',
        image: '/images/Silicone Feeding Bottle Big Assembly.jpg',
        material: 'Food-Grade Silicone',
        features: ['Large Capacity', 'Soft & Flexible', 'Natural Feel', 'BPA-Free', 'Easy to Squeeze'],
        specifications: {
          'Material': '100% Food-Grade Silicone',
          'Capacity': '240ml, 300ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Semi-transparent with soft appearance',
        heatResistance: 'Up to 200°C',
        dropResistance: 'Excellent shock absorption, virtually unbreakable',
        durability: 'Long-lasting, maintains flexibility over time'
      },
      {
        id: '8-2',
        name: 'Small Silicone Bottle',
        description: 'Compact silicone bottle perfect for newborns',
        image: '/images/Silicone Feeding Bottle Small.jpg',
        material: 'Food-Grade Silicone',
        features: ['Compact Size', 'Soft Touch', 'Easy Grip', 'BPA-Free', 'Newborn Friendly'],
        specifications: {
          'Material': '100% Food-Grade Silicone',
          'Capacity': '120ml, 180ml',
          'Age Range': '0-12 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Semi-transparent silicone',
        heatResistance: 'Up to 200°C',
        dropResistance: 'Unbreakable silicone construction',
        durability: 'Maintains softness and flexibility'
      }
    ]
  },
  {
    id: '9',
    name: 'Cereal Feeders',
    description: 'Specialized feeders for introducing cereals and semi-solid foods safely',
    image: '/images/Cereal Feeder.jpg',
    category: 'Feeding',
    features: ['Safe Introduction', 'Controlled Flow', 'Easy to Clean', 'BPA Free', 'Age-Appropriate'],
    subProducts: [
      {
        id: '9-1',
        name: 'CF0002 Cereal Feeder',
        description: 'Advanced cereal feeder with controlled dispensing system',
        image: '/images/Cereal Feeder CF0002.jpg',
        material: 'Food-Grade PP/Silicone',
        features: ['Controlled Flow', 'Easy Fill', 'Spill-Proof', 'BPA-Free', 'Easy to Clean'],
        specifications: {
          'Material': 'Food-Grade PP/Silicone',
          'Capacity': '120ml',
          'Age Range': '4+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear body with colored components',
        heatResistance: 'Up to 120°C',
        dropResistance: 'Good with protective design',
        durability: 'Designed for repeated use'
      }
    ]
  },
  {
    id: '10',
    name: 'MotherCare Collection',
    description: 'Premium collection designed in partnership with MotherCare for superior quality',
    image: '/images/MotherCare JPEG/MC0001.jpg',
    category: 'Premium',
    features: ['Premium Quality', 'MotherCare Design', 'Superior Materials', 'BPA Free', 'Tested & Certified'],
    subProducts: [
      {
        id: '10-1',
        name: 'MC0001 Premium Bottle',
        description: 'Premium feeding bottle from MotherCare collection',
        image: '/images/MotherCare JPEG/MC0001.jpg',
        material: 'Premium PPSU',
        features: ['Premium Design', 'Superior Quality', 'MotherCare Brand', 'BPA-Free', 'Professional Grade'],
        specifications: {
          'Material': 'Premium PPSU',
          'Capacity': 'Multiple sizes available',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC, EN, MotherCare Standards'
        },
        transparency: 'Crystal clear with premium finish',
        heatResistance: 'Can withstand 200°C',
        dropResistance: 'Superior construction',
        durability: 'Premium long-lasting performance'
      },
      {
        id: '10-2',
        name: 'MC0003 Premium Set',
        description: 'Complete premium feeding set from MotherCare collection',
        image: '/images/MotherCare JPEG/MC0003.jpg',
        material: 'Premium Materials Mix',
        features: ['Complete Set', 'Premium Quality', 'MotherCare Design', 'BPA-Free', 'Gift Ready'],
        specifications: {
          'Material': 'Premium PP/PPSU/Silicone',
          'Set Includes': 'Multiple feeding accessories',
          'Age Range': '0+ months',
          'Certification': 'FDA, LFGB, CPC, EN, MotherCare Standards'
        },
        transparency: 'Premium clear finish',
        heatResistance: 'Up to 200°C',
        dropResistance: 'Premium construction',
        durability: 'Superior long-term performance'
      }
    ]
  },
  {
    id: '11',
    name: 'Gift Sets',
    description: 'Beautiful gift sets perfect for baby showers and new parents',
    image: '/images/Gift Sets JPEG/GS0001.jpg',
    category: 'Gift Sets',
    features: ['Complete Sets', 'Gift Ready', 'Premium Packaging', 'BPA Free', 'Perfect for Gifting'],
    subProducts: [
      {
        id: '11-1',
        name: 'GS0001 Starter Set',
        description: 'Complete starter set for new parents',
        image: '/images/Gift Sets JPEG/GS0001.jpg',
        material: 'Mixed Premium Materials',
        features: ['Complete Starter Kit', 'Gift Box', 'Multiple Items', 'BPA-Free', 'New Parent Essential'],
        specifications: {
          'Material': 'PP/PPSU/Silicone Mix',
          'Set Includes': 'Bottles, Cups, Utensils, Accessories',
          'Age Range': '0+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Mixed clear and colored items',
        heatResistance: 'Varies by component (up to 200°C)',
        dropResistance: 'Excellent across all components',
        durability: 'Long-lasting complete solution'
      }
    ]
  },
  {
    id: '12',
    name: 'Spare Parts',
    description: 'Replacement parts and accessories for all Phoenix baby products',
    image: '/images/Spare Parts JPEG/SP0001.jpg',
    category: 'Accessories',
    features: ['Universal Compatibility', 'High Quality', 'Easy Replacement', 'BPA Free', 'Cost Effective'],
    subProducts: [
      {
        id: '12-1',
        name: 'SP0001 Nipple Set',
        description: 'Replacement nipples for feeding bottles',
        image: '/images/Spare Parts JPEG/SP0001.jpg',
        material: 'Food-Grade Silicone',
        features: ['Universal Fit', 'Multiple Flow Rates', 'Soft Silicone', 'BPA-Free', 'Easy to Replace'],
        specifications: {
          'Material': 'Food-Grade Silicone',
          'Compatibility': 'Standard and Wide Neck',
          'Flow Rates': 'Slow, Medium, Fast',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear silicone',
        heatResistance: 'Up to 200°C',
        dropResistance: 'Flexible construction',
        durability: 'Long-lasting silicone'
      }
    ]
  }
];

export const CUSTOMERS: Customer[] = [
  { id: '1', name: 'KiKKA boo', logo: '/images/customers/kikka-boo.jpg' },
  { id: '2', name: 'Bubbles', logo: '/images/customers/bubbles.jpg' },
  { id: '3', name: 'Disney', logo: '/images/customers/disney.jpg' },
  { id: '4', name: 'Baby Care', logo: '/images/customers/baby-care.jpg' },
  { id: '5', name: 'BEABA', logo: '/images/customers/beaba.jpg' },
  { id: '6', name: 'YEEHOO', logo: '/images/customers/yeehoo.jpg' }
];

export const COMPANY_INFO = {
  mission: "To provide safe, innovative, and high-quality baby products that support healthy development and bring peace of mind to parents worldwide.",
  vision: "To be the global leader in baby product manufacturing, setting industry standards for safety, quality, and innovation while fostering sustainable practices.",
  values: [
    "Safety First - Every product undergoes rigorous testing",
    "Quality Excellence - Premium materials and craftsmanship",
    "Innovation - Continuous research and development",
    "Sustainability - Eco-friendly manufacturing processes",
    "Customer Focus - Understanding and exceeding expectations",
    "Integrity - Transparent and ethical business practices"
  ],
  history: "Phoenix began as a small family business with a vision to create safer baby products. Over the years, we've grown into a leading manufacturer serving 60+ countries worldwide, while maintaining our commitment to quality and innovation.",
  headquarters: "Guangzhou, China"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Li Wei',
    position: 'Chief Executive Officer',
    image: '/images/team/ceo.jpg',
    bio: 'Leading Phoenix with over 20 years of experience in baby product manufacturing and international business.',
    experience: '20+ years'
  },
  {
    id: '2',
    name: 'Sarah Chen',
    position: 'Head of R&D',
    image: '/images/team/rd-head.jpg',
    bio: 'PhD in Materials Science, specializing in safe baby product materials and innovative design solutions.',
    experience: '15+ years'
  },
  {
    id: '3',
    name: 'Michael Zhang',
    position: 'Quality Assurance Director',
    image: '/images/team/qa-director.jpg',
    bio: 'Ensuring every product meets international safety standards with comprehensive testing protocols.',
    experience: '18+ years'
  },
  {
    id: '4',
    name: 'Emma Liu',
    position: 'International Sales Manager',
    image: '/images/team/sales-manager.jpg',
    bio: 'Building global partnerships and expanding our reach to families worldwide.',
    experience: '12+ years'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'FDA Approved',
    description: 'All products meet US Food and Drug Administration standards for baby products',
    image: '/images/certifications/fda.png',
    issuer: 'US Food and Drug Administration',
    validUntil: '2025-12-31'
  },
  {
    id: '2',
    name: 'LFGB Certified',
    description: 'German food and consumer goods safety certification',
    image: '/images/certifications/lfgb.png',
    issuer: 'German Federal Institute',
    validUntil: '2025-06-30'
  },
  {
    id: '3',
    name: 'CPC Compliant',
    description: 'Children\'s Product Certificate ensuring safety for children under 12',
    image: '/images/certifications/cpc.png',
    issuer: 'CPSC',
    validUntil: '2025-12-31'
  },
  {
    id: '4',
    name: 'EN 14350 Standard',
    description: 'European standard for child care articles and drinking equipment',
    image: '/images/certifications/en.png',
    issuer: 'European Committee for Standardization',
    validUntil: '2025-08-31'
  },
  {
    id: '5',
    name: 'ISO 9001:2015',
    description: 'Quality management system certification',
    image: '/images/certifications/iso9001.png',
    issuer: 'International Organization for Standardization',
    validUntil: '2026-03-15'
  },
  {
    id: '6',
    name: 'OEKO-TEX Standard 100',
    description: 'Textile safety certification for harmful substances',
    image: '/images/certifications/oeko-tex.png',
    issuer: 'OEKO-TEX Association',
    validUntil: '2025-09-30'
  }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Are your products BPA-free?',
    answer: 'Yes, all our plastic and silicone products are completely BPA-free and made from food-grade materials that are safe for babies.',
    category: 'Safety'
  },
  {
    id: '2',
    question: 'What certifications do your products have?',
    answer: 'Our products are certified by FDA, LFGB, CPC, EN standards, and more. Each product comes with relevant safety certifications for international markets.',
    category: 'Certifications'
  },
  {
    id: '3',
    question: 'How do you ensure product quality?',
    answer: 'We have a comprehensive quality control system including material testing, production monitoring, and final product inspection. Every batch is tested before shipping.',
    category: 'Quality'
  },
  {
    id: '4',
    question: 'Do you offer custom manufacturing?',
    answer: 'Yes, we provide OEM and ODM services with custom designs, colors, and packaging options. Minimum order quantities apply.',
    category: 'Manufacturing'
  },
  {
    id: '5',
    question: 'What is your production capacity?',
    answer: 'Our monthly production capacity is 1,000,000 units across all product lines, with the ability to scale based on demand.',
    category: 'Manufacturing'
  },
  {
    id: '6',
    question: 'How long is the warranty period?',
    answer: 'We offer a 12-month warranty on all products against manufacturing defects. Warranty terms may vary by product type.',
    category: 'Warranty'
  },
  {
    id: '7',
    question: 'Do you ship internationally?',
    answer: 'Yes, we ship to over 60 countries worldwide. Shipping times and costs vary by destination.',
    category: 'Shipping'
  },
  {
    id: '8',
    question: 'What materials do you use?',
    answer: 'We use premium materials including PP, PPSU, Tritan, food-grade silicone, and organic cotton, all tested for safety and durability.',
    category: 'Materials'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'Phoenix Launches New Eco-Friendly Product Line',
    excerpt: 'Introducing our latest sustainable baby products made from recycled materials.',
    content: 'We are excited to announce the launch of our new eco-friendly product line, featuring baby bottles and cups made from recycled materials...',
    image: '/images/news/eco-friendly-launch.jpg',
    date: '2024-01-15',
    category: 'Product Launch'
  },
  {
    id: '2',
    title: 'Expansion into European Markets',
    excerpt: 'Phoenix expands operations to serve European customers better.',
    content: 'Following successful market research and regulatory approvals, we are expanding our operations into key European markets...',
    image: '/images/news/europe-expansion.jpg',
    date: '2024-01-10',
    category: 'Business'
  },
  {
    id: '3',
    title: 'New Safety Testing Facility Opens',
    excerpt: 'State-of-the-art testing facility ensures highest safety standards.',
    content: 'Our new 5000 sq ft safety testing facility is now operational, featuring advanced equipment for comprehensive product testing...',
    image: '/images/news/testing-facility.jpg',
    date: '2024-01-05',
    category: 'Innovation'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'BabyFirst Retail',
    position: 'Purchasing Manager',
    content: 'Phoenix has been our trusted partner for over 5 years. Their product quality is exceptional and customer service is outstanding.',
    image: '/images/testimonials/sarah-johnson.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Michael Chen',
    company: 'KidsWorld Distribution',
    position: 'CEO',
    content: 'The reliability and safety of Phoenix products give us confidence in our retail partnerships. Highly recommended.',
    image: '/images/testimonials/michael-chen.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    company: 'Little Angels Store',
    position: 'Store Owner',
    content: 'Parents trust our store because we stock Phoenix products. The quality speaks for itself.',
    image: '/images/testimonials/emma-rodriguez.jpg',
    rating: 5
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'OEM Manufacturing',
    description: 'Custom manufacturing services for your brand with our proven expertise',
    icon: 'BuildingOfficeIcon',
    features: ['Custom Design', 'Brand Packaging', 'Quality Assurance', 'Flexible MOQ']
  },
  {
    id: '2',
    title: 'ODM Solutions',
    description: 'Complete product development from concept to market-ready products',
    icon: 'LightBulbIcon',
    features: ['Product Design', 'Material Selection', 'Prototype Development', 'Market Testing']
  },
  {
    id: '3',
    title: 'Quality Testing',
    description: 'Comprehensive testing services ensuring international safety standards',
    icon: 'ShieldCheckIcon',
    features: ['Safety Testing', 'Material Analysis', 'Durability Testing', 'Certification Support']
  },
  {
    id: '4',
    title: 'Global Shipping',
    description: 'Reliable worldwide shipping and logistics solutions',
    icon: 'TruckIcon',
    features: ['Express Shipping', 'Bulk Orders', 'Customs Support', 'Tracking System']
  }
];

export const WARRANTY_INFO = {
  standard: {
    period: '12 months',
    coverage: 'Manufacturing defects and material failures',
    conditions: [
      'Normal use and care',
      'Original purchase receipt required',
      'Excludes wear and tear',
      'Excludes misuse or damage'
    ]
  },
  returns: {
    period: '30 days',
    conditions: [
      'Unused and in original packaging',
      'All accessories included',
      'Return shipping costs apply',
      'Refund processed within 5-7 business days'
    ]
  },
  support: {
    email: 'support@phoenix.com',
    phone: '+86 20 1234 5678',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM (GMT+8)',
    response: '24-48 hours'
  }
};

export const RESEARCH_DEVELOPMENT = {
  innovation: [
    'Advanced material research for safer baby products',
    'Ergonomic design studies for better usability',
    'Sustainability initiatives in product development',
    'Smart technology integration for modern parents'
  ],
  evidenceBased: [
    'Clinical testing with pediatric specialists',
    'User experience studies with real families',
    'Safety testing beyond regulatory requirements',
    'Long-term durability and performance studies'
  ],
  partnerships: [
    'Collaboration with leading universities',
    'Partnerships with child development experts',
    'Research with international safety organizations',
    'Innovation labs in multiple countries'
  ]
};