import React from 'react'
import { withRouter } from 'react-router-dom'
import style from './Tabbar.module.css'
import { Badge, TabBar } from 'antd-mobile'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

function LzrTabbar (props) {
  const tabs = [
    {
      key: '/films',
      title: '首页',
      icon: <AppOutline />,
      badge: Badge.dot,
    },
    {
      key: '/cinemas',
      title: '电影院影',
      icon: <UnorderedListOutline />,
      badge: '5',
    },
    {
      key: '/center',
      title: '我的',
      icon: <UserOutline />,
    },
  ]
  return (
    <div className={style.tabbar}>
      <TabBar 
      activeKey={'/' + props.location.pathname.split('/')[1]}
      onChange={(value) => {
        props.history.push(value)
      }}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
    </div>
  )
}

export default withRouter(LzrTabbar)