/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ProductCard from "./ProductCard";
import { useGetAllProductsQuery } from "../../../../redux/feature/product/productApi";

interface ProductListProps {
  searchQuery: string;
  filters: {
    category?: string;
    priceRange: [number, number];
    rating?: number;
  };
  currentPage: number;
  itemsPerPage: number;
}

const ProductList: React.FC<ProductListProps> = ({
  searchQuery,
  filters,
  currentPage,
  itemsPerPage,
}) => {
  const { data, error, isLoading } = useGetAllProductsQuery({
    searchTerm: searchQuery,
    category: filters.category,
    minPrice: filters.priceRange[0],
    maxPrice: filters.priceRange[1],
    page: currentPage,
    limit: itemsPerPage,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;

  // Log the entire data object
  console.log('API Response:', data);

  // Access products from the data object based on the actual structure
  const products = data?.data || [];  // Adjust this line based on actual data structure

  return (
    <div className="p-4">
     
      <div 
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-0"
      >
        {products.length === 0 ? (
          <div className="col-span-full text-center">No products found</div>
        ) : (
          products.map((product: any) => (
            <ProductCard key={product._id} item={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
