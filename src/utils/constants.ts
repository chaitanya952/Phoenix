// src/utils/constants.ts
import { Product, CompanyStats, Customer, Service, Certification, FAQ, TeamMember, NewsItem, Testimonial } from '../types';

export const COMPANY_STATS: CompanyStats = {
  years: 10,
  employees: 150,
  factoryArea: 60000,
  countries: 50,
  monthlyCapacity: 1000000
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wide Neck Bottles',
    description: 'Premium wide neck feeding bottles with superior design and multiple capacity options',
    image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
    category: 'Wide Neck Feeding Bottles',
    features: ['Wide Neck Design', 'Easy to Clean', 'Anti-Colic', 'BPA Free', 'Multiple Capacities'],
    volume: '210 - 270 ml',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '0 to 3',
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
    category: 'Wide Neck Feeding Bottles',
    features: ['Ergonomic Handle', 'Wide Neck', 'Easy Grip', 'Anti-Colic', 'BPA Free'],
    volume: '210 - 270 ml',
    specialFeatures: ['handle'],
    material: 'food grade plastic',
    ageGroup: '3 to 6',
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
    category: 'Standard Neck Feeding Bottles',
    features: ['Standard Neck', 'Universal Compatibility', 'Reliable Design', 'BPA Free', 'Easy to Use'],
    volume: '125 - 180 ml',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '0 to 3',
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
      },
      {
        id: '3-3',
        name: 'RN0041 Standard Bottle',
        description: 'Reliable standard neck bottle with multiple capacity options',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0041 - 125ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Universal Compatibility', 'Lightweight', 'BPA-Free', 'Cost Effective'],
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
        id: '3-4',
        name: 'RN0047 Standard Bottle',
        description: 'Standard neck bottle with larger capacity options',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0047 - 180ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Larger Capacity', 'Universal Nipples', 'BPA-Free', 'Easy to Clean'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '180ml, 300ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear transparent',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Good basic protection',
        durability: 'Reliable everyday use'
      },
      {
        id: '3-5',
        name: 'RN0056 Standard Bottle',
        description: 'Standard neck bottle with medium to large capacity range',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0056 - 180ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Medium-Large Capacity', 'Universal Compatibility', 'BPA-Free', 'Durable Design'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '180ml, 270ml',
          'Age Range': '0-24 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear transparent',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Good basic protection',
        durability: 'Reliable everyday use'
      }
    ]
  },
  {
    id: '4',
    name: 'Standard Neck Bottles with Handle',
    description: 'Standard neck bottles enhanced with comfortable handles for better grip',
    image: '/images/Standard Neck Bottles With Handle  JPEG/RN0029 - 125ml.jpg',
    category: 'Standard Neck Feeding Bottles',
    features: ['Standard Neck', 'Ergonomic Handles', 'Easy Grip', 'Universal Compatibility', 'BPA Free'],
    volume: '125 - 300 ml',
    specialFeatures: ['handle'],
    material: 'food grade plastic',
    ageGroup: '3 to 6',
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
      },
      {
        id: '4-2',
        name: 'RN0041 Handle Bottle',
        description: 'Standard neck bottle with ergonomic handles for easy grip',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0041 - 125ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Ergonomic Handles', 'Easy Grip', 'BPA-Free', 'Lightweight'],
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
      },
      {
        id: '4-3',
        name: 'RN0047 Handle Bottle',
        description: 'Standard neck bottle with handles for larger capacity feeding',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0047 - 180ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Larger Capacity', 'Comfortable Handles', 'BPA-Free', 'Easy Clean'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '180ml, 300ml',
          'Age Range': '3+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear with colored handles',
        heatResistance: 'Up to 110°C-120°C',
        dropResistance: 'Enhanced with handle support',
        durability: 'Reliable handle attachment'
      },
      {
        id: '4-4',
        name: 'RN0056 Handle Bottle',
        description: 'Standard neck bottle with handles for medium to large capacity',
        image: '/images/Standard Neck Bottles With Handle  JPEG/RN0056 - 180ml.jpg',
        material: 'PP (Polypropylene)',
        features: ['Standard Neck', 'Medium-Large Capacity', 'Comfortable Handles', 'BPA-Free', 'Durable Design'],
        specifications: {
          'Material': 'PP (Polypropylene)',
          'Capacity': '180ml, 270ml',
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
    category: 'Sippers & Cups',
    features: ['Spill-Proof', 'Easy Transition', 'Multiple Capacities', 'BPA Free', 'Toddler Friendly'],
    volume: '125 - 180 ml',
    specialFeatures: ['handle'],
    material: 'food grade plastic',
    ageGroup: '6 to 9',
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
    category: 'Cutlery & Tableware',
    features: ['Complete Set', 'Age-Appropriate', 'Safe Materials', 'Easy to Clean', 'Ergonomic Design'],
    volume: 'all',
    specialFeatures: ['handle'],
    material: 'food grade plastic',
    ageGroup: '6 to 9',
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
    category: 'Teethers & Pacifiers',
    features: ['Safe Materials', 'Soothing Design', 'Easy to Clean', 'BPA Free', 'Orthodontic Shape'],
    volume: 'all',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '3 to 6',
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
    category: 'Wide Neck Feeding Bottles',
    features: ['100% Silicone', 'Natural Feel', 'Flexible', 'BPA Free', 'Easy to Squeeze'],
    volume: '>300 ml',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '0 to 3',
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
    category: 'Others',
    features: ['Safe Introduction', 'Controlled Flow', 'Easy to Clean', 'BPA Free', 'Age-Appropriate'],
    volume: '125 - 180 ml',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '6 to 9',
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
    category: 'Mother Care',
    features: ['Premium Quality', 'MotherCare Design', 'Superior Materials', 'BPA Free', 'Tested & Certified'],
    volume: '210 - 270 ml',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '0 to 3',
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
    volume: 'all',
    specialFeatures: ['handle', 'without handle'],
    material: 'food grade plastic',
    ageGroup: '0 to 3',
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
    category: 'Spare Parts',
    features: ['Universal Compatibility', 'High Quality', 'Easy Replacement', 'BPA Free', 'Cost Effective'],
    volume: 'all',
    specialFeatures: ['without handle'],
    material: 'food grade plastic',
    ageGroup: '0 to 3',
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
  },
  {
    id: '13',
    name: 'Stainless Steel Bottles',
    description: 'Premium stainless steel bottles for superior durability and temperature retention',
    image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
    category: 'Wide Neck Feeding Bottles',
    features: ['Stainless Steel', 'Temperature Retention', 'Durable', 'BPA Free', 'Easy to Clean'],
    volume: '>300 ml',
    specialFeatures: ['without handle'],
    material: 'stainless steel',
    ageGroup: '6 to 9',
    subProducts: [
      {
        id: '13-1',
        name: 'SS0001 Steel Bottle',
        description: 'Premium stainless steel feeding bottle',
        image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
        material: 'Stainless Steel',
        features: ['Food Grade Steel', 'Temperature Control', 'Rust Resistant', 'BPA-Free', 'Long Lasting'],
        specifications: {
          'Material': '304 Stainless Steel',
          'Capacity': '350ml, 400ml',
          'Age Range': '6+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Opaque metallic finish',
        heatResistance: 'Excellent heat retention',
        dropResistance: 'Superior impact resistance',
        durability: 'Extremely durable, long-lasting'
      }
    ]
  },
  {
    id: '14',
    name: 'Glass Bottles',
    description: 'Premium borosilicate glass bottles for pure feeding experience',
    image: '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg',
    category: 'Standard Neck Feeding Bottles',
    features: ['Borosilicate Glass', 'Pure Taste', 'Easy to Clean', 'BPA Free', 'Heat Resistant'],
    volume: '<100 ml',
    specialFeatures: ['without handle'],
    material: 'borosilicate glass',
    ageGroup: '0 to 3',
    subProducts: [
      {
        id: '14-1',
        name: 'GL0001 Glass Bottle',
        description: 'Premium borosilicate glass feeding bottle',
        image: '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg',
        material: 'Borosilicate Glass',
        features: ['Pure Glass', 'No Taste Transfer', 'Easy Sterilization', 'BPA-Free', 'Crystal Clear'],
        specifications: {
          'Material': 'Borosilicate Glass',
          'Capacity': '80ml, 120ml',
          'Age Range': '0-6 months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Crystal clear glass',
        heatResistance: 'Excellent thermal shock resistance',
        dropResistance: 'Moderate - handle with care',
        durability: 'Long-lasting with proper care'
      }
    ]
  },
  {
    id: '15',
    name: 'Training Cups with Strap',
    description: 'Training cups with convenient hanging strap for on-the-go feeding',
    image: '/images/Sippy Cups JPEG/SP0001 - 150ml.jpg',
    category: 'Sippers & Cups',
    features: ['Hanging Strap', 'Spill-Proof', 'Easy Grip', 'BPA Free', 'Travel Friendly'],
    volume: '125 - 180 ml',
    specialFeatures: ['hanging strap'],
    material: 'food grade plastic',
    ageGroup: '9 to 12',
    subProducts: [
      {
        id: '15-1',
        name: 'TC0001 Training Cup',
        description: 'Training cup with convenient hanging strap',
        image: '/images/Sippy Cups JPEG/SP0001 - 150ml.jpg',
        material: 'Food-Grade PP',
        features: ['Hanging Strap', 'Spill-Proof Design', 'Easy Grip', 'BPA-Free', 'Portable'],
        specifications: {
          'Material': 'Food-Grade PP',
          'Capacity': '150ml, 180ml',
          'Age Range': '9+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Clear with colored components',
        heatResistance: 'Up to 110°C',
        dropResistance: 'Good with strap protection',
        durability: 'Designed for active toddlers'
      }
    ]
  },
  {
    id: '16',
    name: 'Advanced Toddler Cups',
    description: 'Advanced cups for toddlers over 12 months with sophisticated features',
    image: '/images/Sippy Cups JPEG/SP0003 - 200ml 1.jpg',
    category: 'Sippers & Cups',
    features: ['Advanced Design', '360° Drinking', 'Spill-Proof', 'BPA Free', 'Toddler Friendly'],
    volume: '210 - 270 ml',
    specialFeatures: ['handle'],
    material: 'food grade plastic',
    ageGroup: '> 12',
    subProducts: [
      {
        id: '16-1',
        name: 'AC0001 Advanced Cup',
        description: 'Advanced toddler cup with 360° drinking edge',
        image: '/images/Sippy Cups JPEG/SP0003 - 200ml 1.jpg',
        material: 'Tritan Copolyester',
        features: ['360° Drinking', 'Advanced Valve', 'Easy Clean', 'BPA-Free', 'Toddler Safe'],
        specifications: {
          'Material': 'Tritan Copolyester',
          'Capacity': '240ml, 270ml',
          'Age Range': '12+ months',
          'Certification': 'FDA, LFGB, CPC'
        },
        transparency: 'Crystal clear',
        heatResistance: 'Up to 90°C',
        dropResistance: 'Excellent impact resistance',
        durability: 'Long-lasting advanced design'
      }
    ]
  }
];

// Client images are now handled directly in the Clients component
export const TRUSTED_CLIENTS_COUNT = 50;

export const COMPANY_INFO = {
  mission: "To nurture every precious moment between parent and child through thoughtfully crafted baby products. We create safe, innovative feeding solutions that support healthy development while giving parents the confidence and peace of mind they deserve. Every Phoenix product is designed with a mother's love and a scientist's precision.",
  vision: "To be the world's most trusted companion in every baby's feeding journey, creating products that celebrate the beautiful bond between parent and child while setting new standards for safety, comfort, and innovation in baby care.",
  values: [
    "💝 Love First - Every product is crafted with the same care a mother shows her child",
    "🛡️ Safety Always - Zero compromise on child safety with rigorous testing and premium materials",
    "🌟 Innovation with Purpose - Smart designs that make feeding time easier and more enjoyable",
    "🌱 Sustainable Future - Eco-friendly practices for a better world for our children",
    "👨‍👩‍👧‍👦 Parent Partnership - We listen, understand, and create solutions for real parenting needs",
    "🏆 Excellence Everywhere - From design to delivery, we maintain the highest quality standards"
  ],
  history: "Born from a mother's love and a father's determination, Phoenix began as a dream to create the perfect feeding bottle for our own children. What started in a small workshop has grown into India's largest baby product manufacturing facility, but our heart remains the same - every product we make is tested by parents, approved by babies, and crafted with unconditional love. Today, we're proud to be part of millions of feeding moments worldwide, supporting parents in their most precious journey.",
  headquarters: "S.No 30/5&30/EE, V SRP Properties, Block C2, beside Reliance Petrol Station, Manoharabad, Hyderabad, Telangana 502334, India"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Krishna Sighakolli',
    position: 'CEO & Managing Director',
    image: '/images/team/krishna-sighakolli.jpg',
    bio: 'Seasoned entrepreneur with extensive experience in the baby product category. Successfully led teams of over 200 professionals with a focus on innovation and quality. Pioneer in introducing new products that cater to evolving needs of parents and babies.',
    experience: '10+ years'
  },
  {
    id: '3',
    name: 'Vyshnavi Yakkali',
    position: 'CHRO & Director',
    image: '/images/team/vyshnavi-yakkali.jpg',
    bio: 'Dynamic leader with Double MBA in HR and Finance. Drives company growth through expert human resource management and financial acumen. Committed to building high-performing teams and delivering quality products.',
    experience: '8+ years'
  },
  {
    id: '4',
    name: 'M Raman',
    position: 'VP Sales & Strategy',
    image: '/images/team/m-raman.jpg',
    bio: 'Veteran sales and strategy leader driving business growth and market expansion with deep industry expertise.',
    experience: '25+ years'
  },
  {
    id: '5',
    name: 'Chanti Babu',
    position: 'Production Head',
    image: '/images/team/chanti-babu.jpg',
    bio: 'Experienced production leader ensuring efficient manufacturing operations and quality output.',
    experience: '20+ years'
  },
  {
    id: '6',
    name: 'Ram Prasath',
    position: 'IMM Head',
    image: '/images/team/ram-prasath.jpg',
    bio: 'Expert in injection molding manufacturing with extensive experience in production optimization.',
    experience: '15+ years'
  },
  {
    id: '7',
    name: 'Pawan Kumar',
    position: 'Blow Molding Head',
    image: '/images/team/pawan-kumar-bm.jpg',
    bio: 'Specialist in blow molding processes ensuring high-quality bottle and container production.',
    experience: '15+ years'
  },
  {
    id: '8',
    name: 'Raju R V',
    position: 'Printing Head',
    image: '/images/team/raju-rv.jpg',
    bio: 'Expert in printing operations ensuring high-quality product branding and packaging.',
    experience: '17+ years'
  }
];

// Company Facts Data Structure
export const COMPANY_FACTS = {
  factoryArea: {
    title: "Factory Area",
    value: "60,000 Sq.ft",
    description: "Modern manufacturing facility with advanced infrastructure",
    icon: "🏭"
  },
  responseTime: {
    title: "Response Time", 
    value: "24 hours",
    description: "Fast response time for customer inquiries and support",
    icon: "⚡"
  },
  workforce: {
    title: "Skilled Workforce",
    value: "150+ workers",
    description: "Skilled and semi-skilled workers with 20+ department heads",
    icon: "👥"
  },
  equipment: {
    title: "Production Equipment",
    value: "50+ machines",
    description: "Advanced production equipment for quality manufacturing",
    icon: "⚙️"
  },
  tooling: {
    title: "Production Molds",
    value: "700+ molds",
    description: "Extensive collection of production molds and dies",
    icon: "🔧"
  },
  products: {
    title: "Product Range",
    value: "400+ products",
    description: "Unique baby & mother care products in our portfolio",
    icon: "🍼"
  }
};

// Manufacturing Process Data Structure
export const MANUFACTURING_PROCESS = [
  {
    step: "1",
    title: "Product Design & Development",
    description: "Comprehensive product development from concept to tooling design",
    icon: "🎨",
    details: [
      "Concept Creation",
      "3D Modelling & Prototyping",
      "Tooling Design",
      "Safety-first design principles"
    ]
  },
  {
    step: "2", 
    title: "Raw Material Procurement",
    description: "Premium, baby-safe materials sourcing with strict quality standards",
    icon: "🧪",
    details: [
      "Quality material sourcing",
      "Vendor quality checks",
      "Proper storage systems",
      "Material safety certification"
    ]
  },
  {
    step: "3",
    title: "Advanced Molding Processes",
    description: "Multiple molding technologies for diverse product requirements",
    icon: "⚙️",
    details: [
      "Injection Molding",
      "2 Stage Stretch Blow Molding",
      "ISBM - Injection Stretch Blow Molding",
      "EBM - Extrusion Blow Molding"
    ]
  },
  {
    step: "4",
    title: "Surface Treatment & Finishing",
    description: "Advanced surface treatments for product safety and quality",
    icon: "✨",
    details: [
      "UV Sterilization treatment",
      "Plasma treatment",
      "Polishing and deburring",
      "Quality surface finishing"
    ]
  },
  {
    step: "5",
    title: "Printing & Branding",
    description: "Safe printing processes using baby-safe inks for branding",
    icon: "🖨️",
    details: [
      "Screen Printing",
      "Pad Printing",
      "Heat Transfer Printing",
      "Baby-safe inks for markings"
    ]
  },
  {
    step: "6",
    title: "Assembly & Integration",
    description: "Precision assembly in dust-free cleanroom environment",
    icon: "🔧",
    details: [
      "Dust-free cleanroom assembly",
      "Ultrasonic welding techniques",
      "Snap-fit assembly methods",
      "Complete product integration"
    ]
  },
  {
    step: "7",
    title: "Quality Control & Testing",
    description: "Comprehensive quality control with multiple testing protocols",
    icon: "🔍",
    details: [
      "In-process dimensional checks",
      "Leak and flow testing",
      "Drop test validation",
      "Batch coding & traceability"
    ]
  },
  {
    step: "8",
    title: "Packaging & Dispatch",
    description: "Hygienic packaging and efficient logistics management",
    icon: "📦",
    details: [
      "Hygienic primary packaging",
      "Export-ready secondary packaging",
      "Climate-controlled warehouse",
      "Complete shipping documentation"
    ]
  }
];

// Services Offered Data Structure
export const SERVICES_OFFERED = [
  {
    title: "Custom Color Solutions",
    description: "Personalized color options to match your brand identity and market preferences.",
    icon: "🎨",
    features: [
      "Wide range of color options",
      "Brand color matching",
      "Color consistency across batches",
      "Pantone color matching available"
    ]
  },
  {
    title: "Custom Logo & Branding", 
    description: "Professional logo application and branding services for your products.",
    icon: "🏷️",
    features: [
      "Screen printing services",
      "Pad printing applications",
      "Heat transfer printing",
      "Baby-safe ink formulations"
    ]
  },
  {
    title: "Custom Packaging",
    description: "Tailored packaging solutions that reflect your brand and protect your products.",
    icon: "📦",
    features: [
      "Custom package design",
      "Brand-specific packaging materials",
      "Export-ready packaging",
      "Sustainable packaging options"
    ]
  },
  {
    title: "Custom Mold Development",
    description: "Specialized mold creation for unique product designs and specifications.",
    icon: "🔧",
    features: [
      "Custom tooling design",
      "Precision mold manufacturing",
      "Prototype development",
      "Mold maintenance services"
    ]
  },
  {
    title: "OEM Manufacturing",
    description: "Complete original equipment manufacturing services for your brand.",
    icon: "🏭",
    features: [
      "Full manufacturing capabilities",
      "Quality assurance programs",
      "Flexible production volumes",
      "International compliance"
    ]
  },
  {
    title: "Quality Testing & Certification",
    description: "Comprehensive testing services ensuring safety and compliance standards.",
    icon: "🔬",
    features: [
      "Safety and toxicity testing",
      "International certification support",
      "Quality control processes",
      "Third-party inspection services"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: '1',
    name: 'FDA Approved',
    description: 'All products meet US Food and Drug Administration standards for baby products',
    image: '/images/certs/FDA.png',
    issuer: 'US Food and Drug Administration',
    validUntil: '2025-12-31'
  },
  {
    id: '2',
    name: 'UKAS Certified',
    description: 'German food and consumer goods safety certification',
    image: '/images/certs/UKAS.jpeg',
    issuer: 'German Federal Institute',
    validUntil: '2025-06-30'
  },
  {
    id: '3',
    name: 'GMP Certified',
    description: 'Good Manufacturing Practice certification ensuring quality production standards',
    image: '/images/certs/GMP.png',
    issuer: 'International GMP Association',
    validUntil: '2025-12-31'
  },
  {
    id: '4',
    name: 'ISO Certified',
    description: 'International Organization for Standardization quality management certification',
    image: '/images/certs/ISO.png',
    issuer: 'ISO',
    validUntil: '2025-08-31'
  },
  {
    id: '5',
    name: 'Quality Certified',
    description: 'Quality management system certification for baby products',
    image: '/images/certs/cert1.jpeg',
    issuer: 'International Quality Association',
    validUntil: '2026-03-15'
  },
  {
    id: '6',
    name: 'Safety Standard Certified',
    description: 'Safety certification for baby products ensuring highest safety standards',
    image: '/images/certs/download.jpeg',
    issuer: 'International Safety Standards',
    validUntil: '2025-09-30'
  }
];

export const FAQS: FAQ[] = [
  {
    id: '1',
    question: 'Are your feeding bottles BPA-free?',
    answer: 'Yes, all our feeding bottles and accessories are made from 100% BPA-free, food-grade materials, ensuring complete safety for your baby.',
    category: 'Safety'
  },
  {
    id: '2',
    question: 'What materials are your products made of?',
    answer: 'We use high-quality, certified food-grade plastics such as Polypropylene (PP), Tritan, and Silicone, depending on the product. These materials are safe, durable, and approved by global safety standards like BIS, EN, and FDA.',
    category: 'Materials'
  },
  {
    id: '3',
    question: 'Are your bottles sterilizer and dishwasher safe?',
    answer: 'Yes, most of our products are designed to withstand steam sterilization, UV sterilization, boiling, and dishwasher cleaning. Please refer to the product label for specific instructions.',
    category: 'Safety'
  },
  {
    id: '4',
    question: 'How do I choose the right nipple/teat size for my baby?',
    answer: 'We offer teats in various flow rates:\nSlow Flow – for 0–3 months\nMedium Flow – for 3–6 months\nFast Flow – for 6+ months\nCheck product labels or consult your pediatrician if in doubt.',
    category: 'Product Usage'
  },
  {
    id: '5',
    question: 'Are your products tested and certified?',
    answer: 'Yes. All our products undergo rigorous quality testing including leak tests, drop tests, sterilization resistance, and chemical safety. We comply with standards like IS 14625, EN 14350, ISO 9001, and FDA guidelines.',
    category: 'Certifications'
  },
  {
    id: '6',
    question: 'Do your bottles have anti-colic features?',
    answer: 'Yes, many of our bottles feature advanced anti-colic venting systems designed to reduce gas, spit-up, and fussiness by minimizing air ingestion.',
    category: 'Product Features'
  },
  {
    id: '7',
    question: 'Where are your products manufactured?',
    answer: 'Our products are proudly manufactured in India, at our state-of-the-art facility in Hyderabad, adhering to strict quality and hygiene protocols.',
    category: 'Manufacturing'
  },
  {
    id: '8',
    question: 'Can I recycle your products?',
    answer: 'Yes. Our packaging and many components are recyclable. We are committed to eco-friendly manufacturing practices and encourage responsible disposal.',
    category: 'Environmental'
  },
  {
    id: '9',
    question: 'Do you supply to hospitals, retailers, or private labels?',
    answer: 'Yes. We support bulk, B2B, OEM, and private label manufacturing. Please contact our sales team for more information.',
    category: 'Business'
  },
  {
    id: '10',
    question: 'How can I place an order or become a distributor?',
    answer: 'You can reach out via our Contact Us page. We\'d be happy to assist you with catalogs, pricing, and distribution partnerships.',
    category: 'Business'
  },
  {
    id: '11',
    question: 'Do you offer customization for baby products?',
    answer: 'Yes, we offer full customization including:\nBottle color and design\nPrinting/logo branding\nPackaging design\nCustom nipple flow types\nWe support OEM, ODM, and private label manufacturing.',
    category: 'Customization'
  },
  {
    id: '12',
    question: 'What is your Minimum Order Quantity (MOQ)?',
    answer: 'Our standard MOQs are:\nFeeding Bottles: 3,000 – 5,000 units per design\nSippers/Cutlery: 5,000 – 10,000 units\nHowever, MOQs can vary based on customization and packaging. We\'re flexible for first orders and pilot runs.',
    category: 'Business'
  },
  {
    id: '13',
    question: 'What is your lead time for bulk orders?',
    answer: 'Typical lead times:\nStandard products: 30 - 40 working days\nCustomized products: 40 - 60 working days after design approval and advance payment\nFor urgent needs, we offer priority production slots (subject to capacity).',
    category: 'Business'
  },
  {
    id: '14',
    question: 'Do you support private label or OEM production?',
    answer: 'Absolutely. We specialize in OEM/private label manufacturing. You can choose from our existing molds or develop your own with support from our R&D and mold design team.',
    category: 'Manufacturing'
  },
  {
    id: '15',
    question: 'Can I order samples before placing a bulk order?',
    answer: 'Yes. We provide:\nStandard samples (free or at nominal cost + courier)\nCustomized samples (chargeable with mold/sample cost, adjusted in bulk order)',
    category: 'Business'
  },
  {
    id: '16',
    question: 'Do you offer export services?',
    answer: 'Yes, we export globally and comply with international certifications like:\nFDA (USA)\nEN 14350 (Europe)\nISO & CE Certifications\nWe support shipping via sea/air/courier with full documentation.',
    category: 'Business'
  },
  {
    id: '17',
    question: 'Can you develop new molds for custom baby products?',
    answer: 'Yes, we offer in-house mold development for unique products. Timeline:\nMold design: 7–10 days\nMold development: 30-45 days\nWe maintain confidentiality through NDA agreements.',
    category: 'Manufacturing'
  },
  {
    id: '18',
    question: 'What certifications do your products meet?',
    answer: 'Our products conform to:\nIS 14625 (India BIS Standard)\nEN 14350 (Europe)\nFDA 21 CFR (USA)\nISO 9001 / ISO 13485 (Quality Management)\nWe can provide COA, MSDS, and batch test reports on request.\nISO 22000\nISO 14001\nCE Marking\nGMP Certified',
    category: 'Certifications'
  },
  {
    id: '19',
    question: 'What payment terms do you offer?',
    answer: 'Typical payment terms:\n50% advance, 50% before dispatch\nFlexible terms available for repeat or large-volume customers\nWe accept NEFT, RTGS, LC, and international transfers.',
    category: 'Business'
  },
  {
    id: '20',
    question: 'Can I visit your factory?',
    answer: 'Yes, we welcome factory visits by appointment. We\'re based in Hyderabad, India, and follow strict safety and hygiene protocols.',
    category: 'Business'
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'Behind the Scenes: How Our Baby Bottles Are Made',
    excerpt: 'Take an exclusive look at our transparent manufacturing process, from selecting FDA-approved materials to rigorous quality testing.',
    content: 'When it comes to your babys health, transparency matters. We are pulling back the curtain to show you how our baby bottles are carefully crafted from start to finish. Our process begins with choosing the safest materials - BPA-free, phthalate-free, and lead-free components that are FDA-approved and tested for food safety compliance...',
    image: '/images/News/BTS.jpeg',
    date: '2024-01-15',
    category: 'Manufacturing',
    author: 'Production Team',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'How We Ensure Every Bottle Meets Safety Standards',
    excerpt: 'Discover our comprehensive safety protocols, from laboratory testing to international compliance standards.',
    content: 'When it comes to feeding your baby, nothing matters more than safety. Every bottle we produce goes through rigorous testing and quality control processes to ensure it meets—and often exceeds—global safety standards...',
    image: '/images/News/3.jpeg',
    date: '2024-01-10',
    category: 'Safety',
    author: 'Quality Assurance Team',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Signs Your Baby Is Ready to Transition from Bottle to Cup',
    excerpt: 'Expert guidance on recognizing when your little one is ready for this important developmental milestone.',
    content: 'As your baby grows, so do their feeding needs. Most pediatricians recommend starting the transition around 12 months and fully weaning off bottles by 18 months. Key signs of readiness include sitting up independently, showing interest in what you are drinking, and demonstrating feeding independence...',
    image: '/images/News/4.jpeg',
    date: '2024-01-05',
    category: 'Child Development',
    author: 'Pediatric Consultants',
    readTime: '6 min read'
  },
  {
    id: '4',
    title: 'Why We Use Medical-Grade Silicone in Our Nipples',
    excerpt: 'Learn about the superior safety and performance benefits of medical-grade silicone for your baby feeding experience.',
    content: 'Medical-grade silicone is a high-purity, hypoallergenic material specifically tested and approved for medical and food applications. Its free from BPA, phthalates, PVC, latex, and harmful additives, making it ideal for baby bottle nipples that go directly into your little ones mouth...',
    image: '/images/News/5.jpeg',
    date: '2024-01-01',
    category: 'Innovation',
    author: 'R&D Team',
    readTime: '4 min read'
  },
  {
  id: '5',
  title: 'Top 5 Tips to Prevent Gas and Colic in Bottle-Fed Babies',
  excerpt: 'Discover simple yet effective bottle-feeding practices to reduce gas, colic, and discomfort in your baby’s tummy.',
  content: 'Nothing is harder for a parent than seeing their baby cry in discomfort—especially when it’s from gas or colic. While some fussiness is normal, excessive crying, bloating, or visible discomfort during or after feeding may point to gas or colic.\n\nThe good news? With the right bottle-feeding practices and tools, you can significantly reduce these issues. Here are our Top 5 Tips to Prevent Gas and Colic in Bottle-Fed Babies:\n\n1. Use an Anti-Colic Bottle — Standard bottles can trap air, which your baby might swallow during feeding, leading to gas and discomfort. Anti-colic bottles with venting systems, slow flow rates, and soft nipples can help.\n\n2. Feed in an Upright Position — Hold your baby at a 45-degree angle and keep the bottle tilted to fill the nipple with milk. Keep them upright for 20–30 minutes after feeding to aid digestion.\n\n3. Choose the Right Nipple Flow — A flow that’s too fast or too slow can cause air intake. Start with a slow-flow nipple and adjust as your baby grows.\n\n4. Take Breaks and Burp Often — Burp your baby every 2–3 ounces or halfway through the bottle to release trapped air. Try over-the-shoulder, upright, or lap positions.\n\n5. Watch for Overfeeding — Overfeeding can cause discomfort, bloating, and gas. Follow your baby’s hunger cues and avoid pushing them to finish the bottle.\n\nThese steps can make a big difference in making feeding a more comfortable and soothing experience for your little one.',
  image: '/images/News/6.jpeg',
  date: '2024-02-01',
  category: 'Parenting',
  author: 'R&D Team',
  readTime: '5 min read'
},
{
  id: '6',
  title: "The Truth About BPA: Why Safe Materials Matter in Baby Bottles",
  excerpt: "Learn why BPA-free matters, the risks of BPA, and how to choose the safest bottles for your baby.",
  content: `As parents, nothing matters more than the safety and well-being of our children. One topic that continues to raise questions is BPA in baby bottles. BPA, or bisphenol A, is a chemical once common in plastics, but research has shown it can leach into food and beverages, potentially disrupting hormones and impacting development. 

Infants are especially vulnerable, and studies have linked BPA exposure to developmental issues, reproductive problems, and certain health risks. While the FDA banned BPA in baby bottles and sippy cups in 2012, not all BPA-free products are equally safe—some use replacements like BPS or BPF, which may pose similar concerns.

For the safest choice, look for bottles made from glass, stainless steel, medical-grade silicone, or certified BPA-free plastics tested by third-party labs. Avoid heating plastic bottles, replace damaged bottles, and choose trusted brands transparent about their materials.

Choosing safe baby bottles isn’t about fear—it’s about informed choices. Your baby deserves nothing less than the safest start in life.`,
  category: "Safety",
  image: "/images/News/1.jpeg",
  date: '2024-03-01',
  author: 'R&D Team',
  readTime: '5 min read'
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
    title: 'Reliable Shipping',
    description: 'Fast and secure shipping with comprehensive logistics solutions',
    icon: 'TruckIcon',
    features: ['Express Shipping', 'Bulk Orders', 'Secure Packaging', 'Tracking System']
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

export const WHY_PHOENIX = {
  reasons: [
    {
      id: '1',
      title: 'Safety First',
      description: 'Every product undergoes rigorous safety testing and meets international standards including FDA, LFGB, and CPC certifications.',
      icon: 'ShieldCheckIcon',
      color: 'text-green-600'
    },
    {
      id: '2',
      title: 'Premium Quality',
      description: 'We use only the finest materials like PPSU, Tritan, and food-grade silicone to ensure durability and safety.',
      icon: 'StarIcon',
      color: 'text-yellow-600'
    },
    {
      id: '3',
      title: 'Innovation Driven',
      description: 'Our R&D team continuously develops new technologies and designs to meet evolving parent and baby needs.',
      icon: 'LightBulbIcon',
      color: 'text-blue-600'
    },
    {
      id: '4',
      title: 'Product Excellence',
      description: 'Over 1M+ premium baby products manufactured with love and precision for families everywhere.',
      icon: 'CubeIcon',
      color: 'text-purple-600'
    }
  ]
};

export const WHAT_SETS_APART = {
  differentiators: [
    {
      id: '1',
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facilities with automated quality control systems',
      features: ['ISO 9001:2015 Certified', 'Automated Production Lines', 'Real-time Quality Monitoring', '99.9% Quality Rate'],
      icon: 'CogIcon'
    },
    {
      id: '2',
      title: 'Material Excellence',
      description: 'Premium materials sourced from certified suppliers worldwide',
      features: ['Food-Grade Materials', 'BPA-Free Guarantee', 'Heat Resistant', 'Eco-Friendly Options'],
      icon: 'BeakerIcon'
    },
    {
      id: '3',
      title: 'Design Innovation',
      description: 'Award-winning designs that combine functionality with aesthetics',
      features: ['Ergonomic Design', 'Anti-Colic Technology', 'Easy-Clean Features', 'Parent-Friendly'],
      icon: 'PencilIcon'
    },
    {
      id: '4',
      title: 'Customer Focus',
      description: 'Dedicated support and customization services for all clients',
      features: ['24/7 Support', 'Custom Solutions', 'Fast Response', 'Global Shipping'],
      icon: 'HeartIcon'
    }
  ]
};

export const FACTORY_MERITS = {
  facilities: [
    {
      id: '1',
      title: 'Infrastructure',
      value: '60,000',
      description: 'Sq.ft facility',
      details: "India's biggest facility - 3x larger than next biggest competitor (20,000 Sq.ft)",
      icon: 'BuildingOfficeIcon'
    },
    {
      id: '2',
      title: 'Machines',
      value: '50+',
      description: 'Production machines',
      details: 'Over 50 advanced machines vs competitors with around 15 machines',
      icon: 'CogIcon'
    },
    {
      id: '3',
      title: 'Molds',
      value: '700+',
      description: 'Production molds',
      details: 'Around 700 molds vs competitors with around 100 molds',
      icon: 'SparklesIcon'
    },
    {
      id: '4',
      title: 'Production Capacity',
      value: '2M+',
      description: 'Bottles monthly',
      details: 'Can produce 2+ million bottles monthly vs competitors with less than 1 million',
      icon: 'ArrowPathIcon'
    }
  ],
  features: [
    {
      id: '1',
      title: 'Advanced Lab & Hygiene Facility',
      description: 'Lab approved by ISO, BIS and EN standards vs competitors with simple lab setup',
      icon: 'BeakerIcon'
    },
    {
      id: '2',
      title: 'Experienced Team & Expertise',
      description: 'Each Department HOD has at least 5-7 years experience vs competitors running traditional setup',
      icon: 'UsersIcon'
    },
    {
      id: '3',
      title: 'Clean Room Environment',
      description: 'Sterile production environment meeting pharmaceutical standards',
      icon: 'SparklesIcon'
    },
    {
      id: '4',
      title: 'Automated Systems',
      description: 'Advanced robotics and automation for consistent quality',
      icon: 'ComputerDesktopIcon'
    }
  ]
};

export const RAW_MATERIALS = {
  materials: [
    {
      id: '1',
      name: 'PPSU (Polyphenylsulfone)',
      description: 'Premium medical-grade plastic with exceptional heat resistance and clarity',
      properties: ['Heat resistant up to 180°C', 'Crystal clear transparency', 'Chemical resistant', 'BPA-free'],
      applications: ['Premium bottles', 'Sippy cups', 'Training cups'],
      certifications: ['FDA approved', 'LFGB certified', 'Medical grade'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      id: '2',
      name: 'PP (Polypropylene)',
      description: 'Food-grade plastic known for durability and safety',
      properties: ['Lightweight and durable', 'Excellent chemical resistance', 'Recyclable', 'Cost-effective'],
      applications: ['Standard bottles', 'Bottle accessories', 'Storage containers'],
      certifications: ['FDA approved', 'Food contact safe', 'Recyclable'],
      color: 'bg-green-100 text-green-800'
    },
    {
      id: '3',
      name: 'Tritan™ Copolyester',
      description: 'Advanced BPA-free plastic with glass-like clarity and durability',
      properties: ['Shatter-resistant', 'Dishwasher safe', 'Stain resistant', 'Odor resistant'],
      applications: ['Training cups', 'Water bottles', 'Food containers'],
      certifications: ['BPA-free certified', 'FDA approved', 'EU compliant'],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      id: '4',
      name: 'Food-Grade Silicone',
      description: 'Premium silicone for soft components and sealing',
      properties: ['Temperature resistant', 'Flexible and soft', 'Non-toxic', 'Easy to clean'],
      applications: ['Nipples', 'Seals', 'Soft spouts', 'Teething products'],
      certifications: ['Medical grade', 'FDA approved', 'LFGB certified'],
      color: 'bg-pink-100 text-pink-800'
    }
  ],
  qualityStandards: [
    'All materials undergo rigorous testing for safety and purity',
    'Regular supplier audits ensure consistent quality',
    'Traceability system tracks materials from source to product',
    'Environmental impact assessment for all materials',
    'Continuous research for safer, more sustainable alternatives'
  ]
};
