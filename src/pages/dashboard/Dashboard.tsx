import React from "react";
import { Layout, Menu } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { AppstoreOutlined, TagsOutlined } from '@ant-design/icons';

const { Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  paddingTop: "20px",
  backgroundColor: "#001529", // Ant Design default dark theme
};

const sidebarItems = [
  {
    key: "/dashboard", // Matches default route for Dashboard
    label: "Products",
    icon: <AppstoreOutlined />,
  },
  {
    key: "/dashboard/categories", // Matches categories route
    label: "Categories",
    icon: <TagsOutlined />,
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width="20%" style={siderStyle}>
        <div style={{ color: '#fff', marginBottom: '20px', fontSize: '1.5rem', fontWeight: 'bold' }}>
          My Dashboard
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/dashboard"]}
          items={sidebarItems}
          onClick={handleMenuClick}
          style={{ fontSize: '16px', fontWeight: '500' }}
        />
      </Sider>
      <Layout>
        <Content style={{ padding: '24px', backgroundColor: '#f0f2f5' }}>
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
