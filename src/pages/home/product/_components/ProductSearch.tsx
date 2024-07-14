import React from "react";
import { Input } from "antd";

interface ProductSearchProps {
  onSearch: (query: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  return (
    <Input.Search
      placeholder="Search products"
      enterButton="Search"
      onSearch={onSearch}
      
      className="mt-6 mb-2"
    />
  );
};

export default ProductSearch;
