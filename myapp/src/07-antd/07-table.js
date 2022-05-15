import React from 'react'
import { Layout, Menu, Table, Tag, Space} from 'antd';

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

export default class App extends React.Component {
  state = {
    collapsed: false,
  };

  data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]

  columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ]

  contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  onChange = (a, b, c) => {
    console.log(a, b, c);
  }

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
               
            <Table columns={this.columns} dataSource={this.data} />

            </div>

          </Content>
        </Layout>
      </Layout>
    );
  }
}
