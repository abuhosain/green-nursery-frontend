/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useGetAllProductsQuery } from "../../../redux/feature/product/productApi";
import ProductSearch from "./_components/ProductSearch";
import ProductFilters from "./_components/ProductFilter";
import ProductList from "./_components/ProductList";
import PaginationControls from "./_components/PaginationControll";

const ProductsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<any>({
    priceRange: [0, 1000]
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const { data, error, isLoading } = useGetAllProductsQuery({
    searchTerm: searchQuery,
    // category: filters.category,
    // minPrice: filters.priceRange[0],
    // maxPrice: filters.priceRange[1],
    // rating: filters.rating,
    page: currentPage,
    limit: itemsPerPage,
  });

  const handleSearch = (query: string) => {
    console.log("query:",query)
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
    <div className="max-w-7xl mx-auto">
      <ProductSearch onSearch={handleSearch} />
      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading products</div>}
      {data && (
        <>
          <ProductList
            products={data.data}  // Adjusted to use `data.data` based on API response
            searchQuery={searchQuery}
            filters={filters}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
          />
          <PaginationControls
            currentPage={currentPage}
            totalItems={data.totalItems || 0}  // Ensure this is correctly set or handled
            itemsPerPage={itemsPerPage}
            onChangePage={handleChangePage}
            onChangePageSize={handleChangePageSize}
          />
        </>
      )}
    </div>
  );
};

export default ProductsPage;
