// src/utils/constants.ts
import { Product, CompanyStats, Customer, Service, Certification, FAQ, TeamMember, NewsItem, Testimonial } from '../types';

export const COMPANY_STATS: CompanyStats = {
  years: 20,
  employees: 150,
  factoryArea: 60000,
  countries: 60,
  monthlyCapacity: 3000000
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
    volume: '125 - 180 ml',
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

export const CUSTOMERS: Customer[] = [
  { id: '1', name: 'KiKKA boo', logo: '/images/customers/kikka-boo.jpg' },
  { id: '2', name: 'Bubbles', logo: '/images/customers/bubbles.jpg' },
  { id: '3', name: 'Disney', logo: '/images/customers/disney.jpg' },
  { id: '4', name: 'Baby Care', logo: '/images/customers/baby-care.jpg' },
  { id: '5', name: 'BEABA', logo: '/images/customers/beaba.jpg' },
  { id: '6', name: 'YEEHOO', logo: '/images/customers/yeehoo.jpg' }
];

export const COMPANY_INFO = {
  mission: "Our mission is to design and manufacture high-quality baby products that prioritize child safety, promote healthy development, and support modern parenting needs. We are committed to continuous innovation, sustainability, and excellence in every product we create, ensuring peace of mind for parents and comfort for babies.",
  vision: "To become the most trusted and innovative baby care brand, enriching every child's early years with safe, sustainable, and thoughtfully designed products.",
  values: [
    "Safety First - We prioritize child safety in everything we make",
    "Innovative Design - Our R&D team continuously explores smart, functional, and ergonomic designs",
    "Sustainability - We are committed to using eco-friendly practices and materials",
    "Parent-Centric Approach - We listen to parents and respond with solutions that make their journey easier",
    "Quality Excellence - Premium materials and rigorous testing standards",
    "Global Standards - Manufacturing to meet international safety and quality requirements"
  ],
  history: "At Phoenix, we believe that every baby deserves the very best. Founded with a vision to redefine quality and safety in baby care, we are a passionate team dedicated to designing and manufacturing premium baby products that support healthy development and modern parenting. We specialize in feeding bottles, sippers, cutlery, tableware, and hygiene accessories — crafted with care using safe, BPA-free, and food-grade materials.",
  headquarters: "Hyderabad, India"
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Krishna Sighakolli',
    position: 'CEO & Managing Director',
    image: '/images/team/krishna-sighakolli.jpg',
    bio: 'Seasoned entrepreneur with extensive experience in the baby product category. Successfully led teams of over 200 professionals with a focus on innovation and quality. Pioneer in introducing new products that cater to evolving needs of parents and babies.',
    experience: '20+ years'
  },
  {
    id: '2',
    name: 'Harshavardhan Reddy R',
    position: 'COO & Director',
    image: '/images/team/harshavardhan-reddy.jpg',
    bio: 'Dynamic entrepreneur with Master\'s in International Business from Cardiff University, UK. Responsible for overseeing operations and driving business growth with innovative strategies that improve efficiency and customer satisfaction.',
    experience: '15+ years'
  },
  {
    id: '3',
    name: 'Vyshnavi Yakkali',
    position: 'CHRO & Director',
    image: '/images/team/vyshnavi-yakkali.jpg',
    bio: 'Dynamic leader with Double MBA in HR and Finance. Drives company growth through expert human resource management and financial acumen. Committed to building high-performing teams and delivering quality products.',
    experience: '12+ years'
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