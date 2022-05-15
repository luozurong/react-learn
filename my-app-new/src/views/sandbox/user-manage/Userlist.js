import React, { useEffect, useState } from 'react'
import { Button, Table, Modal, Switch } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal

export default function UserList() {
  const [dataSource, setdataSource] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/users?_expand=role").then(res => {
      console.log(res)
        const list = res.data
        setdataSource([...list])
    })
  }, [])

  const columns = [
    {
      title: '区域',
      dataIndex: 'region',
      render: (region) => {
        return <b>{region === '' ? '全球' : region}</b>
      }
    },
    {
      title: '角色名称',
      dataIndex: 'role',
      render: (role) => {
        return role?.roleName
      }
    },
    {
      title: '用户名称',
      dataIndex: 'username'
    },
    {
      title: '用户状态',
      dataIndex: 'roleState',
      render: (roleState, item, index) => {
        return <Switch checked={roleState} 
          disabled={item.default} 
          onChange={() => siwthMethod(item, index)}>
        </Switch>
      }
    },
    {
      title: '操作',
      render: (item) => {
        return <div>
          <Button danger shape="circle" disabled={item.default} icon={<DeleteOutlined />} style={{'marginRight': '5px'}} onClick={() => confirmHandle(item)}/>
          <Button type="primary" shape="circle" icon={<EditOutlined />}/>
        </div>
      }
    }
  ]

  const siwthMethod = (item, index) => {
    item.roleState = !item.roleState
    dataSource[index] = item
    setdataSource([...dataSource])
  }
  const confirmHandle = (item) => {
    console.log(dataSource)
    confirm({
      title: '您确定要删除?',
      icon: <ExclamationCircleOutlined />,
      content: '删除该权限列表',
      onOk() {
        deleteMethod(item)
      },
      onCancel() {
        console.log('Cancel');
      },
    })
  }
  const deleteMethod = (item) => {
    console.log(item)
  }
  
  return (
    <div>
      <Button type="primary">添加用户</Button>
      <Table dataSource={dataSource} 
        columns={columns} 
        pagination={{
          pageSize: 10
        }}
        rowKey={(item) => item.id}/>
    </div>
  )
}
