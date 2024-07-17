import React, { useState } from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CategoryTable from "./CategoryTable";

import { Category } from "../../../types";
import { useGetAllCategoryQuery, useDeleteCategoryMutation, useCreateCategoryMutation, useUpdateCategoryMutation } from "../../../redux/feature/category/categoryApi";
import Swal from "sweetalert2";
import CategoryFormModal from "./CategoryFormModal";

const CategoryListTable: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<Category | null>(null);
  const { data } = useGetAllCategoryQuery(undefined);
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
    if (isAdding) {
      await createCategory(values);
    } else if (currentCategory) {
      await updateCategory({ id: currentCategory._id, ...values });
    }
    setVisible(false);
  };

  const handleDelete = (id: string): void => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCategory(id);
        Swal.fire('Deleted!', 'Your category has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        <span className="block text-blue-600">Our Exclusive</span>
        <span className="block text-gray-900">Category List</span>
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
        Add Category
      </Button>
      <CategoryTable
        onEdit={handleEdit}
        onDelete={handleDelete}
        data={categoryData}
      />
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
