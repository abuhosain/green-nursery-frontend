import React from 'react';
import { Modal, Form, Input, InputNumber, Select } from 'antd';
import { Category, Product } from './types';

interface ProductFormModalProps {
  open: boolean;
  isAdding: boolean;
  currentProduct: Product | null;
  onOk: (values: Product) => void;
  onCancel: () => void;
  categories: Category[];
}

const ProductFormModal: React.FC<ProductFormModalProps> = ({
  open,
  isAdding,
  currentProduct,
  onOk,
  onCancel,
  categories,
}) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (currentProduct) {
      form.setFieldsValue({
        ...currentProduct,
        category: currentProduct.category._id, // Set category field to category ID
      });
    } else {
      form.resetFields();
    }
  }, [currentProduct, form]);

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        // Ensure category is only the ID
        const formattedValues = {
          ...values,
          category: categories.find(cat => cat._id === values.category)?._id || values.category,
        };
        onOk(formattedValues as Product);
        form.resetFields();
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };

  return (
    <Modal
      open={open}
      title={isAdding ? 'Add Product' : 'Edit Product'}
      okText={isAdding ? 'Add' : 'Update'}
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={handleOk}
    >
      <Form form={form} layout="vertical" name="productForm">
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please enter the product title' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: 'Please enter the product price' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: 'Please select the product category' }]}
        >
          <Select>
            {categories.map(category => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: 'Please enter the product quantity' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: 'Please enter the product description' }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: 'Please enter the product rating' }]}
        >
          <InputNumber min={0} max={5} step={0.1} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image URL"
          rules={[{ required: true, message: 'Please enter the product image URL' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ProductFormModal;
