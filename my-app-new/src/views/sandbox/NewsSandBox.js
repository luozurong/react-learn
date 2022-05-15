import { Layout } from 'antd'
import React from 'react'


import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import NewsRouter from './NewsRouter'

import './NewsSandBox.css'

const {Content} = Layout

function NewsSandBox() {
  return <Layout>
    <SideMenu></SideMenu>
    
    <Layout className="site-layout">
      <TopHeader></TopHeader>
      <Content
        className="site-layout-background"
        style={{
          margin: '10px 10px',
          padding: 24,
          minHeight: 580,
          overflow: 'auto'
        }}
      >  
        <NewsRouter/>
      </Content>
    </Layout>
  </Layout>
}

export default NewsSandBox
