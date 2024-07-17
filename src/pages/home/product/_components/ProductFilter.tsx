/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Slider, InputNumber } from "antd";

interface ProductFiltersProps {
  filters: {
    priceRange: [number, number];
    rating?: number;
  };
  onFilterChange: (filters: any) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  const handlePriceRangeChange = (value: [number, number]) => {
    onFilterChange({ ...filters, priceRange: value });
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <span className="block mb-2">Price Range</span>
        <Slider
          range
          value={filters.priceRange}
          max={10000}
          step={10}
          onChange={handlePriceRangeChange}
          marks={{
            0: "$0",
            10000: "$10000",
          }}
          style={{ marginBottom: 16 }}
        />
        <div className="flex justify-between pt-6">
          <InputNumber
            min={0}
            max={10000}
            value={filters.priceRange[0]}
            onChange={(value) =>
              handlePriceRangeChange([value || 0, filters.priceRange[1]])
            }
          />
          <span>-</span>
          <InputNumber
            min={0}
            max={10000}
            value={filters.priceRange[1]}
            onChange={(value) =>
              handlePriceRangeChange([filters.priceRange[0], value || 10000])
            }
          />
        </div>
      </div>
      
    </div>
  );
};

export default ProductFilters;
