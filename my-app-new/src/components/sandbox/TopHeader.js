import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Layout, Dropdown, Menu, Avatar } from 'antd';
const { Header } = Layout;
function TopHeader(props) {
  let [collapsed, setCollapsed] = useState(false)

  const {role:{roleName},username} = JSON.parse(localStorage.getItem("token"))

  const changeCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const menu = (
     <Menu>
        <Menu.Item key="1">
          {roleName}
        </Menu.Item>
        <Menu.Item key="2" danger onClick={()=>{
          localStorage.removeItem("token")
          props.history.replace("/login")
        }}>退出</Menu.Item>
    </Menu>
  )

  return (<Header className="site-layout-background" style={{ padding: '0 10px' }}>
    {
      collapsed ? <MenuFoldOutlined onClick={changeCollapsed}/> : <MenuUnfoldOutlined onClick={changeCollapsed}/>
    }
    <div style={{float: 'right'}}>
      <span style={{ marginRight: '10px', color: '#999'}}>欢迎{username}回来</span>
      <Dropdown overlay={menu}>
        <Avatar size="small" icon={<UserOutlined />} />
      </Dropdown>
    </div>
  </Header>)
}

export default withRouter(TopHeader)
