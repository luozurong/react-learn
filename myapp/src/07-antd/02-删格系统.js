import React from 'react'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'

export default function App () {
  return (<div>
    <Row>
      <Col span={8}>col-11</Col>
      <Col span={8}>col-22</Col>
      <Col span={8}>col-22</Col>
    </Row>

    <Row>
      <Col span={8}>col-11</Col>
      <Col span={8} offset={8}>col-22</Col>
    </Row>
  </div>)
}