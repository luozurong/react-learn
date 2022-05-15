import React from 'react'
import { Layout, Menu, Dropdown } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DownOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import './css/03-layout.css'

const { Header, Sider, Content } = Layout;

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const menu = (<Menu onClick={(key) => {
      console.log(key)
    }}>
        <Menu.Item key="1">
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
           1111
          </a>
        </Menu.Item>
        <Menu.Item  key="2" icon={<DownOutlined />} disabled>
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            222
          </a>
        </Menu.Item>
        <Menu.Item  key="3" disabled>
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
           333
          </a>
        </Menu.Item>
        <Menu.Item danger  key="4">a danger item</Menu.Item>
      </Menu>)
    


    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            
            <Dropdown overlay={menu} trigger={['click']}>
              <div className="ant-dropdown-link">
                Hover me <DownOutlined />
              </div> 
            </Dropdown>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
