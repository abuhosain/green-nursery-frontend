/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import { Spin } from "antd";
import { useGetAllProductsQuery } from "../../redux/feature/product/productApi";
import ProductSearch from "../home/product/_components/ProductSearch";
import ProductFilters from "../home/product/_components/ProductFilter";
import ProductList from "../home/product/_components/ProductList";
import PaginationControls from "../home/product/_components/PaginationControll";

const MainProduct: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<any>({
    priceRange: [0, 1000],
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const {
    data: products,
    error,
    isLoading,
  } = useGetAllProductsQuery({
    searchTerm: searchQuery,
    category: filters.category?._id,
    minPrice: filters.priceRange[0],
    maxPrice: filters.priceRange[1],
    rating: filters.rating,
    page: currentPage,
    limit: itemsPerPage,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  const handleChangePageSize = (size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto pt-3 pb-6">
      <h2 className="text-2xl font-bold text-center mb-4">A list of full Products</h2>
      <ProductSearch onSearch={handleSearch} />
      {isLoading && (
        <div className="text-center mt-10">
          <Spin size="large" />
        </div>
      )}
      {error && <div>Error loading products</div>}
      {products && (
        <>
          <ProductFilters
            filters={filters}
            onFilterChange={handleFilterChange}
          />
          <ProductList
            searchQuery={searchQuery}
            filters={filters}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <PaginationControls
            currentPage={currentPage}
            totalItems={products.totalItems || 0} // Ensure this is correctly set or handled
            itemsPerPage={itemsPerPage}
            onChangePage={handleChangePage}
            onChangePageSize={handleChangePageSize}
          />
        </>
      )}
    </div>
  );
};

export default MainProduct;
