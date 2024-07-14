// components/MainLayout.tsx

import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
import { headerItemsGenerator } from "../../utils/headerItemsGenerator";
import { userPaths } from "../../routes/user.route";
import { useBreadcrumbs } from "../../utils/breadCumbGenerator";


const { Header, Content, Footer } = Layout;

const sidebarItems = headerItemsGenerator(userPaths);

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const breadcrumbs = useBreadcrumbs(userPaths);

  return (
    <Layout style={{ height: "100vh", }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" style={{ color: "white" }}>
          <Link to="/" style={{ color: "wheat" }}>
            Green Nursery
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={sidebarItems}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0" }}>
        <Breadcrumb style={{ margin: "10px 24px" }}>
          {breadcrumbs.map((breadcrumb, index) => (
            <Breadcrumb.Item key={index}>
              <Link to={breadcrumb.path} style={{fontStyle : "italic", fontWeight : "bold"}}>{breadcrumb.name}</Link>
            </Breadcrumb.Item>
          ))}
        </Breadcrumb>
        <div
          style={{
            padding: 0,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
