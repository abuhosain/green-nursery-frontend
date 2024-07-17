import { Button, Image, Table } from "antd";
import { Category } from "../../../types";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { ColumnsType } from "antd/es/table";

interface CategoryTableProps {
    data: Category[];
    onEdit: (product: Category) => void;
    onDelete: (id: string) => void;
  }

const CategoryTable: React.FC<CategoryTableProps> = ({data, onEdit, onDelete}) => {
    const columns: ColumnsType<Category> = [
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (image: string) => <Image width={100} src={image} />,
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },       
        {
          title: 'Descriptions',
          dataIndex: 'description',
          key: 'description',
        },       
        {
          title: 'Actions',
          key: 'actions',
          render: (_, record: Category) => (
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

  return  <Table columns={columns} dataSource={data} rowKey="_id" />;
}

export default CategoryTable