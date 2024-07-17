import React from 'react';
import { Button, Table, Image } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Product } from './types';
// Ensure the type definitions match your backend data

interface ProductTableProps {
  data: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ data, onEdit, onDelete }) => {
  const columns: ColumnsType<Product> = [
    {
      title: 'Image',
      dataIndex: 'image',
      key: 'image',
      render: (image: string) => <Image width={100} src={image} />,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (category: { name: string }) => category.name,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record: Product) => (
        <div className="flex space-x-2">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
          />
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record._id)}
          />
        </div>
      ),
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="_id" />;
};

export default ProductTable;
