import React, { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CategoryTable from "./CategoryTable";

import { Category } from "../../../types";
import {
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "../../../redux/feature/category/categoryApi";
import Swal from "sweetalert2";
import CategoryFormModal from "./CategoryFormModal";

const CategoryListTable: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const { data, refetch } = useGetAllCategoryQuery(undefined);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [createCategory] = useCreateCategoryMutation();
  const [updateCategory] = useUpdateCategoryMutation();
  const categoryData = data?.data;

  const handleEdit = (category: Category) => {
    setCurrentCategory(category);
    setIsAdding(false);
    setVisible(true);
  };

  const handleAdd = () => {
    setCurrentCategory(null);
    setIsAdding(true);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = async (values: Category) => {
    try {
      if (isAdding) {
        await createCategory(values).unwrap();
        Swal.fire("Added!", "Your category has been added.", "success");
      } else if (currentCategory) {
        await updateCategory({ id: currentCategory._id, ...values }).unwrap();
        Swal.fire("Updated!", "Your category has been updated.", "success");
      }
      refetch(); // Re-fetch the category data
      setVisible(false);
    } catch (error) {
      Swal.fire(
        "Error!",
        "There was an error processing your request.",
        "error"
      );
    }
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
          await deleteCategory(id).unwrap();
          Swal.fire("Deleted!", "Your category has been deleted.", "success");
          refetch(); // Re-fetch the category data
        } catch (error) {
          Swal.fire(
            "Error!",
            "There was an error deleting the category.",
            "error"
          );
        }
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-6 text-gray-800">
        <span className="block text-blue-600">Our Exclusive</span>
        <span className="block text-gray-900">Category List</span>
        <span className="block mt-2 text-sm text-gray-600">
          Discover the best products available
        </span>
      </h1>
      <div className="flex justify-center mb-4">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          className="mb-4 sm:mb-0 sm:mr-4"
        >
          Add Category
        </Button>
      </div>
      <div className="overflow-x-auto">
        <CategoryTable onEdit={handleEdit} onDelete={handleDelete} data={categoryData} />
      </div>
      <CategoryFormModal
        open={visible}
        isAdding={isAdding}
        currentCategory={currentCategory}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default CategoryListTable;
