// src/types/index.ts
export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  features?: string[];
  specifications?: Record<string, string>;
  subProducts?: SubProduct[];
  volume?: string;
  specialFeatures?: string[];
  material?: string;
  ageGroup?: string;
}

export interface SubProduct {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  specifications: Record<string, string>;
  material: string;
  heatResistance?: string;
  transparency?: string;
  dropResistance?: string;
  durability?: string;
}

export interface CompanyStats {
  years: number;
  employees: number;
  factoryArea: number;
  countries: number;
  monthlyCapacity: number;
}

export interface Customer {
  id: string;
  name: string;
  logo: string;
  industry?: string;
  partnership?: string;
  description?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Certification {
  id: string;
  name: string;
  description: string;
  image: string;
  issuer: string;
  validUntil?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  bio: string;
  experience: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  position: string;
  content: string;
  image: string;
  rating: number;
}

export interface CompanyInfo {
  mission: string;
  vision: string;
  values: string[];
  history: string;
  founded: number;
  headquarters: string;
}

export interface ProductFiltersState {
  category: string;
  volume: string;
  specialFeatures: string[];
  material: string;
  ageGroup: string;
}

export interface WhyPhoenixReason {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

export interface FactoryMerit {
  id: string;
  title: string;
  value: string;
  description: string;
  details: string;
  icon: string;
}

export interface FactoryFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface RawMaterial {
  id: string;
  name: string;
  description: string;
  properties: string[];
  applications: string[];
  certifications: string[];
  color: string;
}