import React from 'react'
import { Button } from 'antd';
import 'antd/dist/antd.css'

export default function App () {
  return (<div>
    <Button type="primary"
    loading={false}
    danger
     onClick={() => {
        console.log('clic')
      }
    }>primary Button</Button>
  </div>)
}