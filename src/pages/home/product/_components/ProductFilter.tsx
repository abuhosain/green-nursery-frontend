/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Select, Slider } from "antd";

interface ProductFiltersProps {
  categories: string[];
  filters: {
    category?: string;
    priceRange: [number, number];
    rating?: number;
  };
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ categories, filters, onFilterChange }) => {
  const handleFilterChange = (newFilters: any) => {
    onFilterChange(newFilters);
  };

  return (
    <div>
      <Select
        placeholder="Select category"
        style={{ width: '100%', marginBottom: 16 }}
        value={filters.category}
        onChange={(value) => handleFilterChange({ ...filters, category: value })}
      >
        {categories.map(category => (
          <Select.Option key={category} value={category}>
            {category}
          </Select.Option>
        ))}
      </Select>
      <Slider
        range
        value={filters.priceRange}
        max={1000}
        onAfterChange={(value) => handleFilterChange({ ...filters, priceRange: value })}
        style={{ marginBottom: 16 }}
      />
       
    </div>
  );
};

export default ProductFilters;
