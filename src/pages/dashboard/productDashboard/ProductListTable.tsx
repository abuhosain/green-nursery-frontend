// ProductListTable.tsx
import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import ProductTable from "./ProductTable";
import ProductFormModal from "./ProductFormModal";

import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "../../../redux/feature/product/productApi";
import Swal from "sweetalert2";
import { useGetAllCategoryQuery } from "../../../redux/feature/category/categoryApi";
import { Category, Product } from "./types";

const ProductListTable: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const { data: productData, refetch } = useGetAllProductsQuery(undefined);
  const { data: categoryData } = useGetAllCategoryQuery(undefined);
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [createProduct] = useCreateProductMutation();

  useEffect(() => {
    if (productData?.data) {
      setProductData(productData.data);
    }
  }, [productData]);

  const [products, setProductData] = useState<Product[]>([]);

  const handleEdit = (product: Product) => {
    console.log("updated product data", product)
    setCurrentProduct(product);
    setIsAdding(false);
    setVisible(true);
  };

  const handleAdd = () => {
    setCurrentProduct(null);
    setIsAdding(true);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = async (values: Product) => {
    if (isAdding) {
      try {
        await createProduct(values).unwrap();
        Swal.fire("Added!", "Your product has been added.", "success");
        refetch(); // Re-fetch the product data
      } catch (error) {
        Swal.fire("Error!", "There was an error adding the product.", "error");
      }
    } else if (currentProduct) {
      try {
        await updateProduct({ id: currentProduct._id, ...values }).unwrap();
        Swal.fire("Updated!", "Your product has been updated.", "success");
        refetch(); // Re-fetch the product data
      } catch (error) {
        Swal.fire(
          "Error!",
          "There was an error updating the product.",
          "error"
        );
      }
    }
    setVisible(false);
  };

  const handleDelete = (id: string): void => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct(id).unwrap();
          setProductData(products.filter((product) => product._id !== id));
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          refetch(); // Re-fetch the product data
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an error deleting the product.",
            "error"
          );
        }
      }
    });
  };

  const categories: Category[] = categoryData?.data || [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        <span className="block text-blue-600">Our Exclusive</span>
        <span className="block text-gray-900">Product List</span>
        <span className="block mt-2 text-sm text-gray-600">
          Discover the best products available
        </span>
      </h1>

      <Button
        type="primary"
        icon={<PlusOutlined />}
        onClick={handleAdd}
        className="mb-4"
      >
        Add Product
      </Button>
      <ProductTable
        onEdit={handleEdit}
        onDelete={handleDelete}
        data={products}
      />
      <ProductFormModal
        open={visible}
        isAdding={isAdding}
        currentProduct={currentProduct}
        onOk={handleOk}
        onCancel={handleCancel}
        categories={categories}
      />
    </div>
  );
};

export default ProductListTable;
