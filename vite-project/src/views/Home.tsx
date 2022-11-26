import React, { useState } from 'react';
import {Outlet} from 'react-router-dom'
import { Breadcrumb, Layout } from 'antd';
import MainMenu from '../components/MainMenu/index'

const { Header, Content, Footer, Sider } = Layout;

const Home: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <Layout className='side-layout' style={{ minHeight: '100vh' }}>
      {/* 左边栏 */}
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="logo" />
       < MainMenu/>
      </Sider>

      {/* 右边内容区域 */}
      <Layout className="site-layout">
        {/* 头部 */}
        <Header className="site-layout-header-background" style={{ padding: 0 }}>
          <Breadcrumb style={{ marginLeft: '15px',lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        {/* 组内容区域 */}
        <Content style={{ margin: '15px 15px 0' }} className="site-layout-background">   
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center',lineHeight: '20px',padding: 0 }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;