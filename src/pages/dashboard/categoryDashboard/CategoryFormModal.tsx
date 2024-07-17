import React from 'react';
import { Modal, Form, Input } from 'antd';
import { Category } from '../../../types';

interface CategoryFormModalProps {
  open: boolean;
  isAdding: boolean;
  currentCategory: Category | null;
  onOk: (values: Category) => void;
  onCancel: () => void;
}

const CategoryFormModal: React.FC<CategoryFormModalProps> = ({
  open,
  isAdding,
  currentCategory,
  onOk,
  onCancel,
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (currentCategory) {
      form.setFieldsValue(currentCategory);
    } else {
      form.resetFields();
    }
  }, [currentCategory, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onOk(values as Category);
        form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      open={open}
      title={isAdding ? 'Add Category' : 'Edit Category'}
      okText={isAdding ? 'Add' : 'Update'}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form form={form} layout="vertical" name="categoryForm">
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter the category name' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter the category description' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image URL"
          rules={[{ required: true, message: 'Please enter the category image URL' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CategoryFormModal;
