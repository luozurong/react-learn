import React from 'react'
import { Layout, Menu, Steps, Button } from 'antd';

import 'antd/dist/antd.css'
import './css/03-layout.css'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DownOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
const {Step} = Steps
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
            
            <div>
              <StepApp/>
            </div>

          </Content>
        </Layout>
      </Layout>
    );
  }
}

const StepApp = () => {
  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {current >= 0 && <Button type="primary" onClick={() => next()
      }>下一步</Button>}
      <Button type="primary" danger>完成</Button>
      {current > 1 & <Button type="primary" onClick={() => prev()}>上一步</Button>}
    </>
  );
}
