import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import {
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons'
import './index.css'
import MenuItem from 'antd/lib/menu/MenuItem';
import axios from 'axios'
const { Sider } = Layout;
const { SubMenu } = Menu
// 模拟数组结构
// const menuList = [
//   {
//     key: '/home',
//     title: '首页',
//     icon: <UserOutlined />
//   },
//   {
//     key: '/user-manage',
//     title: '用户管理',
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: '/user-manage/list',
//         title: '用户列表',
//         icon: <VideoCameraOutlined />
//       }
//     ]
//   },
//   {
//     key: '/right-manage',
//     title: '权限管理',
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: '/right-manage/role/list',
//         title: '角色列表',
//         icon: <VideoCameraOutlined />
//       },
//       {
//         key: '/right-manage/right/list',
//         title: '权限列表',
//         icon: <VideoCameraOutlined />
//       }
//     ]
//   },
//   {
//     key: '/right-manage',
//     title: '新闻管理',
//     icon: <UserOutlined />,
//     children: [
//       {
//         key: '/right-manage/role/list1',
//         title: '角色列表',
//         icon: <VideoCameraOutlined />
//       },
//       {
//         key: '/right-manage/right/list1',
//         title: '权限列表',
//         icon: <VideoCameraOutlined />
//       }
//     ]
//   }
// ]
const iconList = {
  '/home':  <UserOutlined/>,
  '/user-manage': <UserOutlined/>,
  '/user-manage/list': <VideoCameraOutlined />,
  '/right-manage': <UserOutlined/>,
  '/right-manage/role/list': <VideoCameraOutlined />,
  '/right-manage/right/list': <VideoCameraOutlined />,
  '/news-manage': <UserOutlined/>,
  '/news-manage/add': <VideoCameraOutlined />,
  '/news-manage/draft': <VideoCameraOutlined />,
  '/news-manage/category': <VideoCameraOutlined />,
}
function SideMenu(props) {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/rights?_embed=children').then(res => {
      setMenu(res.data)
    })
  }, [])

  const renderMenu = (menuList) => {
    return menuList.map(item => {
      if (item.children?.length > 0 && checkPagePermisson(item)) {
        return <SubMenu key={item.key} 
          icon={iconList[item.key]}
          title={item.title}>
          {renderMenu(item.children)}
        </SubMenu>
      }
      return checkPagePermisson(item) && <MenuItem key={item.key} 
        onClick={() => {
          props.history.push(item.key)
        }}
        icon={iconList[item.key]}>
          {item.title}
        </MenuItem>
    })
  }

  const checkPagePermisson = (item) => {
    return item.pagepermisson === 1
  }
  const selectKey = [props.location.pathname]
  const openKeys = ['/' + props.location.pathname.split('/')[1]]
  return (<Sider trigger={null} collapsible>
      <div style={{display: 'flex', height: '100%', 'flexDirection': 'column'}}>
        <div className="logo">全球新闻发布管理系统</div>
        <div style={{flex: 1, overflow: 'auto'}}>
          <Menu theme="dark" mode="inline" selectedKeys={selectKey} defaultOpenKeys={openKeys}>
            { renderMenu(menu)}
          </Menu>
        </div>
      </div>
    </Sider>
  )
}

export default withRouter(SideMenu)
