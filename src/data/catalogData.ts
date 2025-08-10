// src/data/catalogData.ts
export interface CatalogProduct {
  sNo?: number;
  modelNo: string;
  image?: string;
  description: string;
  capacity?: string;
  moldNos?: string;
  remarks?: string;
  packaging: string;
  inner: number;
  outer: number;
  inr: number;
  usd: number;
  moq: number;
  dimensions?: string;
  cbm?: number;
  monoDimensions?: string;
  innerDimensions?: string;
  masterDimensions?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  displayName: string;
  description: string;
  image: string;
  products: CatalogProduct[];
}

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'std-feeding',
    name: 'Std. Feeding',
    displayName: 'Standard Neck Feeding Bottles',
    description: 'Classic standard neck bottles with reliable performance and proven design. Perfect for everyday feeding with universal compatibility.',
    image: '/images/Standard Neck Bottles JPEG/RN0001 - 125ml.jpg',
    products: [
      {
        sNo: 1,
        modelNo: 'RN0001-60ml',
        description: 'Zozo Straight Std. Neck Feeding Bottle',
        capacity: '60ml',
        moldNos: 'RN0001',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 22,
        usd: 0.325926,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'RN0001-125ml',
        description: 'Zozo Straight Std. Neck Feeding Bottle',
        capacity: '125ml',
        moldNos: 'RN0001',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 24,
        usd: 0.355556,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'RN0001-250ml',
        description: 'Zozo Straight Std. Neck Feeding Bottle',
        capacity: '250ml',
        moldNos: 'RN0001',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 26,
        usd: 0.385185,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'RN0002-60ml',
        description: 'Zozo + Straight Std. Neck Feeding Bottle',
        capacity: '60ml',
        moldNos: 'RN0002',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 23,
        usd: 0.340741,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'RN0002-125ml',
        description: 'Zozo + Straight Std. Neck Feeding Bottle',
        capacity: '125ml',
        moldNos: 'RN0002',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 25,
        usd: 0.370370,
        moq: 3600
      },
      {
        sNo: 6,
        modelNo: 'RN0002-250ml',
        description: 'Zozo + Straight Std. Neck Feeding Bottle',
        capacity: '250ml',
        moldNos: 'RN0002',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 27,
        usd: 0.400000,
        moq: 3600
      },
      {
        sNo: 7,
        modelNo: 'RN0003-60ml',
        description: 'Slender Straight Std. Neck Feeding Bottle',
        capacity: '60ml',
        moldNos: 'RN0003',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 22,
        usd: 0.325926,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'RN0003-125ml',
        description: 'Slender Straight Std. Neck Feeding Bottle',
        capacity: '125ml',
        moldNos: 'RN0003',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 24,
        usd: 0.355556,
        moq: 3600
      },
      {
        sNo: 9,
        modelNo: 'RN0003-250ml',
        description: 'Slender Straight Std. Neck Feeding Bottle',
        capacity: '250ml',
        moldNos: 'RN0003',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 26,
        usd: 0.385185,
        moq: 3600
      },
      {
        sNo: 10,
        modelNo: 'RN0004-60ml',
        description: '3 Dot Straight Std. Neck Feeding Bottle',
        capacity: '60ml',
        moldNos: 'RN0004',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 22.5,
        usd: 0.333333,
        moq: 3600
      }
    ]
  },
  {
    id: 'wide-feeding',
    name: 'Wide Feeding',
    displayName: 'Wide Neck Feeding Bottles',
    description: 'Premium wide neck feeding bottles with superior design and easy cleaning. Perfect for comfortable feeding experience.',
    image: '/images/Wide Neck Bottles JPEG/WN0001 - 210ml.jpg',
    products: [
      {
        sNo: 1,
        modelNo: 'WN0001-210ml',
        description: 'Natural+ Momo Wide Neck Feeding Bottle',
        capacity: '210ml',
        moldNos: 'WN0001',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 45,
        usd: 0.666667,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'WN0001-240ml',
        description: 'Natural+ Momo Wide Neck Feeding Bottle',
        capacity: '240ml',
        moldNos: 'WN0001',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 48,
        usd: 0.711111,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'WN0002-210ml',
        description: 'Superflo Momo Wide Neck Feeding Bottle',
        capacity: '210ml',
        moldNos: 'WN0002',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 37,
        usd: 0.548148,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'WN0002-240ml',
        description: 'Superflo Momo Wide Neck Feeding Bottle',
        capacity: '240ml',
        moldNos: 'WN0002',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 40,
        usd: 0.592593,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'WN0003-210ml',
        description: 'Crystal Wide Momo Wide Neck Feeding Bottle',
        capacity: '210ml',
        moldNos: 'WN0003',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 36.5,
        usd: 0.540741,
        moq: 3600
      },
      {
        sNo: 6,
        modelNo: 'WN0003-240ml',
        description: 'Crystal Wide Momo Wide Neck Feeding Bottle',
        capacity: '240ml',
        moldNos: 'WN0003',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 39.5,
        usd: 0.585185,
        moq: 3600
      },
      {
        sNo: 7,
        modelNo: 'WN0004-210ml',
        description: 'Bullet Momo Wide Neck Feeding Bottle',
        capacity: '210ml',
        moldNos: 'WN0004',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 37,
        usd: 0.548148,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'WN0004-240ml',
        description: 'Bullet Momo Wide Neck Feeding Bottle',
        capacity: '240ml',
        moldNos: 'WN0004',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 40,
        usd: 0.592593,
        moq: 3600
      },
      {
        sNo: 9,
        modelNo: 'WN0005-210ml',
        description: 'Natural+ Stylo Wide Neck Feeding Bottle',
        capacity: '210ml',
        moldNos: 'WN0005',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 45,
        usd: 0.666667,
        moq: 3600
      },
      {
        sNo: 10,
        modelNo: 'WN0005-300ml',
        description: 'Natural+ Stylo Wide Neck Feeding Bottle',
        capacity: '300ml',
        moldNos: 'WN0005',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 48,
        usd: 0.711111,
        moq: 3600
      }
    ]
  },
  {
    id: 'sippy-cups',
    name: 'Sippy Cups',
    displayName: 'Sippy Cups & Training Cups',
    description: 'Transition cups for toddlers with spill-proof design and various capacity options. Perfect for developing independence.',
    image: '/images/Sippy Cups JPEG/SP0001 - 150ml.jpg',
    products: [
      {
        modelNo: 'SP0001',
        description: 'Dolphin Sippy Cup with Soft Spout - 150ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 51,
        usd: 0.629630,
        moq: 3600
      },
      {
        modelNo: 'SP0002',
        description: 'Dolphin Sippy Cup with Soft Spout - 240ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 56,
        usd: 0.691358,
        moq: 3600
      },
      {
        modelNo: 'SP0003',
        description: 'Trendy Sippy Cup - Hard Spout - 200ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 42,
        usd: 0.518519,
        moq: 3600
      },
      {
        modelNo: 'SP0004',
        description: 'Cowboy Hard Spout Sipper - 300ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 67,
        usd: 0.827160,
        moq: 3600
      },
      {
        modelNo: 'SP0005',
        description: 'Cowboy Hard Spout Sipper - 200ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 62,
        usd: 0.765432,
        moq: 3600
      },
      {
        modelNo: 'SP0006',
        description: 'Cowboy Straw Sipper - 300ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 65,
        usd: 0.802469,
        moq: 3600
      },
      {
        modelNo: 'SP0007',
        description: 'Cowboy Straw Sipper - 200ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 61,
        usd: 0.753086,
        moq: 3600
      },
      {
        modelNo: 'SP0008',
        description: 'Rivera Straw Sipper with Hanger - 350ml',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 65,
        usd: 0.802469,
        moq: 3600
      },
      {
        modelNo: 'SP0009',
        description: 'Rio Sipper with Soft Spout',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        modelNo: 'SP0010',
        description: 'Rio Sipper with Hard Spout',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 48,
        usd: 0.592593,
        moq: 3600
      }
    ]
  },
  {
    id: 'teethers-pacifiers',
    name: 'Teethers & Pacifiers',
    displayName: 'Teethers & Pacifiers',
    description: 'Safe and soothing teethers and pacifiers for baby comfort and development. Made with food-grade materials.',
    image: '/images/Teethers & Pacifiers JPEG/TP0001.JPG',
    products: [
      {
        sNo: 1,
        modelNo: 'TP0001',
        description: 'EVA Water Filled Teether - Apple',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.30,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'TP0002',
        description: 'EVA Water Filled Teether - Mango',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.30,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'TP0003',
        description: 'EVA Water Filled Teether - Strawberry',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.30,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'TP0004',
        description: 'EVA Water Filled Teether - Face',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.30,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'TP0005',
        description: 'EVA Water Filled Teether - Hand',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.30,
        moq: 3600
      },
      {
        sNo: 6,
        modelNo: 'TP0006',
        description: 'EVA Water Filled Teether - Foot',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.30,
        moq: 3600
      },
      {
        sNo: 7,
        modelNo: 'TP0007',
        description: 'Silicone Teether - Anchor',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 60,
        usd: 0.70,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'TP0008',
        description: 'Silicone Teether - Tylo',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 50,
        usd: 0.60,
        moq: 3600
      },
      {
        sNo: 9,
        modelNo: 'TP0009',
        description: 'Silicone Teether - Zuzu',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 50,
        usd: 0.60,
        moq: 3600
      },
      {
        sNo: 10,
        modelNo: 'TP0010',
        description: 'Silicone Teether - Dodo',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 50,
        usd: 0.60,
        moq: 3600
      }
    ]
  },
  {
    id: 'cutlery-tableware',
    name: 'Cutlery & Tableware',
    displayName: 'Cutlery & Tableware',
    description: 'Complete feeding solutions including spoons, forks, bowls and plates for solid food introduction.',
    image: '/images/Cutlery & Tableware JPEG/CT0001.JPG',
    products: [
      {
        modelNo: 'CT0001',
        description: 'Soft Touch Mealtime Set - 4pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 95,
        usd: 1.172840,
        moq: 3600
      },
      {
        modelNo: 'CT0002',
        description: 'Bento Feeding Set - 5pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 125,
        usd: 1.543210,
        moq: 3600
      },
      {
        modelNo: 'CT0003',
        description: 'Soft Touch Oval Mealtime Set - 5pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 95,
        usd: 1.172840,
        moq: 3600
      },
      {
        modelNo: 'CT0004',
        description: 'Simple Snacktime Giftset - 4Pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 110,
        usd: 1.358025,
        moq: 3600
      },
      {
        modelNo: 'CT0005',
        description: 'Round Snacktime Giftset - 4Pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 105,
        usd: 1.296296,
        moq: 3600
      },
      {
        modelNo: 'CT0006',
        description: 'Round Snacktime Giftset - 5Pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 115,
        usd: 1.419753,
        moq: 3600
      },
      {
        modelNo: 'CT0007',
        description: 'Std. Neck Feeding Set - 7Pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 195,
        usd: 2.407407,
        moq: 3600
      },
      {
        modelNo: 'CT0008',
        description: 'Wide Neck Feeding Set - 6Pcs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 185,
        usd: 2.283951,
        moq: 3600
      },
      {
        modelNo: 'CT0009',
        description: '2 Tone Cutlery - 1pc',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 25,
        usd: 0.308642,
        moq: 3600
      },
      {
        modelNo: 'CT0010',
        description: '2 Tone Cutlery - 2pcs',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 30,
        usd: 0.370370,
        moq: 3600
      }
    ]
  },
  {
    id: 'mothercare',
    name: 'MotherCare',
    displayName: 'Mother Care Products',
    description: 'Essential products for nursing mothers including breast pumps, nipple shields, and storage containers.',
    image: '/images/MotherCare JPEG/MC0001.JPG',
    products: [
      {
        sNo: 1,
        modelNo: 'MC0001',
        description: 'Nipple Shield with Case',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 45,
        usd: 0.555556,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'MC0002',
        description: 'Nipple Puller with Case',
        packaging: 'Mono Box',
        inner: 24,
        outer: 288,
        inr: 50,
        usd: 0.617284,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'MC0003',
        description: 'Compact Breast Pump - L Shape',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 60,
        usd: 0.740741,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'MC0004',
        description: 'Compact Breast Pump - I Shape',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 60,
        usd: 0.740741,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'MC0005',
        description: 'Std Neck Breast Pump',
        packaging: 'Mono Box',
        inner: 0,
        outer: 24,
        inr: 130,
        usd: 1.500000,
        moq: 2000
      },
      {
        sNo: 6,
        modelNo: 'MC0006',
        description: 'Wide Neck Breast Pump',
        packaging: 'Mono Box',
        inner: 0,
        outer: 24,
        inr: 240,
        usd: 2.962963,
        moq: 2000
      },
      {
        sNo: 7,
        modelNo: 'MC0007',
        description: 'Std.Neck Breast Milk Storage Containers - 3pcs Set',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'MC0008',
        description: 'Wide Neck Breast Milk Storage Containers - 3pcs Set',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 75,
        usd: 0.925926,
        moq: 3600
      }
    ]
  },
  {
    id: 'others',
    name: 'Others',
    displayName: 'Other Baby Care Products',
    description: 'Essential baby care accessories including bottle brushes, nasal aspirators, and grooming products.',
    image: '/images/Others JPEG/OT0001.JPG',
    products: [
      {
        sNo: 1,
        modelNo: 'OT0001',
        description: 'Bottle Tongs',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'OT0002',
        description: 'Nasal Aspirator',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 35,
        usd: 0.432099,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'OT0003',
        description: 'Milk Powder Container',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 38,
        usd: 0.469136,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'OT0004',
        description: '3 Tier Milk Powder Container',
        packaging: 'Mono Box',
        inner: 12,
        outer: 144,
        inr: 45,
        usd: 0.555556,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'OT0005',
        description: 'Bottle Brush - Sponge',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        sNo: 6,
        modelNo: 'OT0006',
        description: 'Alpha Bottle Brush',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 30,
        usd: 0.370370,
        moq: 3600
      },
      {
        sNo: 7,
        modelNo: 'OT0007',
        description: 'Beta Bottle Brush',
        packaging: 'Header Card',
        inner: 12,
        outer: 144,
        inr: 30,
        usd: 0.370370,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'OT0008',
        description: '2 Tone Brush & Comb',
        packaging: 'Blister Card',
        inner: 12,
        outer: 144,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        sNo: 9,
        modelNo: 'OT0009',
        description: '2 Tone Comb - 1pc',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 35,
        usd: 0.432099,
        moq: 3600
      },
      {
        sNo: 10,
        modelNo: 'OT0010',
        description: '2 Tone Comb - 2pcs',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 45,
        usd: 0.555556,
        moq: 3600
      }
    ]
  },
  {
    id: 'gift-sets',
    name: 'Gift Sets',
    displayName: 'Gift Sets',
    description: 'Beautifully packaged gift sets perfect for baby showers and new parents. Complete feeding solutions in attractive packaging.',
    image: '/images/Gift Sets JPEG/GT0001.JPG',
    products: [
      {
        sNo: 1,
        modelNo: 'GT0001',
        description: 'Soft Touch Mealtime Set - 4pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 95,
        usd: 1.172840,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'GT0002',
        description: 'Bento Feeding Set - 5pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 125,
        usd: 1.543210,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'GT0003',
        description: 'Soft Touch Oval Mealtime Set - 5pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 95,
        usd: 1.172840,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'GT0004',
        description: 'Simple Snacktime Giftset -4Pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 110,
        usd: 1.358025,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'GT0005',
        description: 'Round Snacktime Giftset -4Pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 105,
        usd: 1.296296,
        moq: 3600
      },
      {
        sNo: 6,
        modelNo: 'GT0006',
        description: 'Round Snacktime Giftset -5Pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 115,
        usd: 1.419753,
        moq: 3600
      },
      {
        sNo: 7,
        modelNo: 'GT0007',
        description: 'Std. Neck Feeding Set - 7Pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 195,
        usd: 2.407407,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'GT0008',
        description: 'Wide Neck Feeding Set - 6Pcs',
        packaging: 'Gift Box',
        inner: 12,
        outer: 48,
        inr: 185,
        usd: 2.283951,
        moq: 3600
      }
    ]
  },
  {
    id: 'spare-parts',
    name: 'Spare Parts',
    displayName: 'Spare Parts & Accessories',
    description: 'Replacement parts and accessories for Phoenix feeding bottles including nipples, spouts, and straws.',
    image: '/images/Spare Parts JPEG/SP0001.JPG',
    products: [
      {
        sNo: 1,
        modelNo: 'SP0001',
        description: 'Anti-Colic Std. Neck Simple LSR Nipple, S/M/L - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 21.5,
        usd: 0.265432,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'SP0002',
        description: 'Anti-Colic Std. Neck Spiral LSR Nipple, S/M/L - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 28.5,
        usd: 0.351852,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'SP0003',
        description: 'LSR Std. Neck Spout - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 25,
        usd: 0.308642,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'SP0004',
        description: 'Anti-Colic Wide Neck Simple LSR Nipple, S/M/L - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 28.5,
        usd: 0.351852,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'SP0005',
        description: 'Anti-Colic Wide Neck Spiral LSR Nipple, S/M/L - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 35,
        usd: 0.432099,
        moq: 3600
      },
      {
        sNo: 6,
        modelNo: 'SP0006',
        description: 'Anti-Colic Wide Neck Natural+ LSR Nipple, S/M/L - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 45,
        usd: 0.555556,
        moq: 3600
      },
      {
        sNo: 7,
        modelNo: 'SP0007',
        description: 'LSR Wide Neck Spout - Pack of 2',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 35,
        usd: 0.432099,
        moq: 3600
      },
      {
        sNo: 8,
        modelNo: 'SP0008',
        description: 'LSR Wide Neck Straw - Pack of 1',
        packaging: 'Blister/ Color Box',
        inner: 24,
        outer: 144,
        inr: 29.5,
        usd: 0.364198,
        moq: 3600
      }
    ]
  },
  {
    id: 'glow-in-dark',
    name: 'Glow in the Dark Series',
    displayName: 'Glow in the Dark Series',
    description: 'Special glow-in-the-dark products including pacifiers and teethers that provide comfort during nighttime.',
    image: '/images/Missing Images JPEG/GT0001.JPG',
    products: [
      {
        sNo: 1,
        modelNo: 'GT0001',
        description: 'GLO Pacifier - Hearty',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 45,
        usd: 0.555556,
        moq: 3600
      },
      {
        sNo: 2,
        modelNo: 'GT0002',
        description: 'GLO Pacifier - Circulo',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 45,
        usd: 0.555556,
        moq: 3600
      },
      {
        sNo: 3,
        modelNo: 'GT0003',
        description: 'GLO PP + EVA Water Teether Lion',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        sNo: 4,
        modelNo: 'GT0004',
        description: 'GLO PP + EVA Water Teether Tiger',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      },
      {
        sNo: 5,
        modelNo: 'GT0005',
        description: 'GLO PP + EVA Water Teether Giraffe',
        packaging: 'Blister Card',
        inner: 24,
        outer: 288,
        inr: 55,
        usd: 0.679012,
        moq: 3600
      }
    ]
  }
];

// Helper function to get category by ID
export const getCategoryById = (id: string): ProductCategory | undefined => {
  return PRODUCT_CATEGORIES.find(category => category.id === id);
};

// Helper function to get all category names
export const getCategoryNames = (): string[] => {
  return PRODUCT_CATEGORIES.map(category => category.displayName);
};

// Helper function to search products across all categories
export const searchProducts = (query: string): { category: ProductCategory; product: CatalogProduct }[] => {
  const results: { category: ProductCategory; product: CatalogProduct }[] = [];
  
  PRODUCT_CATEGORIES.forEach(category => {
    category.products.forEach(product => {
      if (
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.modelNo.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({ category, product });
      }
    });
  });
  
  return results;
};