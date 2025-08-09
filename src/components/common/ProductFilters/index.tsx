// src/components/common/ProductFilters/index.tsx
import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ProductFiltersState } from '../../../types';

interface ProductFiltersProps {
  filters: ProductFiltersState;
  onFilterChange: (filterType: keyof ProductFiltersState, value: any) => void;
  onSpecialFeatureToggle: (feature: string) => void;
  onClearAll: () => void;
  resultsCount: number;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onSpecialFeatureToggle,
  onClearAll,
  resultsCount
}) => {
  // Product categories based on your requirements
  const categories = [
    'all',
    'Standard Neck Feeding Bottles',
    'Wide Neck Feeding Bottles', 
    'Sippers & Cups',
    'Cutlery & Tableware',
    'Teethers & Pacifiers',
    'Mother Care',
    'Gift Sets',
    'Spare Parts',
    'Others'
  ];

  // Filter options
  const volumeOptions = ['all', '<100 ml', '125 - 180 ml', '210 - 270 ml', '>300 ml'];
  const specialFeatureOptions = ['handle', 'without handle', 'hanging strap'];
  const materialOptions = ['all', 'food grade plastic', 'stainless steel', 'borosilicate glass'];
  const ageGroupOptions = ['all', '0 to 3', '3 to 6', '6 to 9', '9 to 12', '> 12'];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
        {/* Category Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {categories.map(category => (
              <option key={category} value={category}>
                {category === 'all' ? 'All Categories' : category}
              </option>
            ))}
          </select>
        </div>

        {/* Volume Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Volume</label>
          <select
            value={filters.volume}
            onChange={(e) => onFilterChange('volume', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {volumeOptions.map(volume => (
              <option key={volume} value={volume}>
                {volume === 'all' ? 'All Volumes' : volume}
              </option>
            ))}
          </select>
        </div>

        {/* Material Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Material</label>
          <select
            value={filters.material}
            onChange={(e) => onFilterChange('material', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {materialOptions.map(material => (
              <option key={material} value={material}>
                {material === 'all' ? 'All Materials' : material}
              </option>
            ))}
          </select>
        </div>

        {/* Age Group Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Age Group (months)</label>
          <select
            value={filters.ageGroup}
            onChange={(e) => onFilterChange('ageGroup', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            {ageGroupOptions.map(age => (
              <option key={age} value={age}>
                {age === 'all' ? 'All Ages' : age}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <button
            onClick={onClearAll}
            className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
          >
            <XMarkIcon className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>
      </div>

      {/* Special Features Filter */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">Special Features</label>
        <div className="flex flex-wrap gap-2">
          {specialFeatureOptions.map(feature => (
            <button
              key={feature}
              onClick={() => onSpecialFeatureToggle(feature)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                filters.specialFeatures.includes(feature)
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {resultsCount} product{resultsCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
};