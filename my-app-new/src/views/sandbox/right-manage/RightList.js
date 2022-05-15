import React, { useEffect, useState } from 'react'
import { Button, Table, Tag, Modal, Switch, Popover } from 'antd'
import axios from 'axios'
import { DeleteOutlined, EditOutlined,ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal

export default function RightList() {
  const [dataSource, setdataSource] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/rights?_embed=children").then(res => {
        const list = res.data
        list.forEach(item => {
            if (item.children.length === 0) {
                item.children = ""
            }
        })
        setdataSource([...list])
    })
  }, [])

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => {
        return <b>{id}</b>
      }
    },
    {
      title: '权限名称',
      dataIndex: 'title'
    },
    {
      title: '权限路径',
      dataIndex: 'key',
      render: (key) => {
        return <Tag color="magenta">{key}</Tag>
      }
    },
    {
      title: '操作',
      render: (item) => {
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} style={{'marginRight': '5px'}} onClick={() => confirmHandle(item)}/>
          <Popover content={<div style={{textAlign: 'center'}}>
            <Switch checked={item.pagepermisson} onChange={() => switchMethod(item)}></Switch>
          </div>} 
            title="页面菜单配置项" 
            trigger="click">
            <Button type="primary" 
              shape="circle" 
              icon={<EditOutlined /> }/>
          </Popover>
        </div>
      }
    }
  ]
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
    if (item.grade === 1) {
      setdataSource(dataSource.filter(data => data.id !== item.id))
      axios.delete(`http://127.0.0.1:5000/rights/${item.id}`)
    } else {
      let list = dataSource.filter(data => data.id === item.rightId)
      list[0].children = list[0].children.filter(data => data.id !== item.id)
      setdataSource([...dataSource])
      axios.delete(`http://127.0.0.1:5000/rights/${item.id}`)
    }
  }
  const switchMethod = (item) => {
    item.pagepermisson = item.pagepermisson === 1 ? 0 : 1
    setdataSource([...dataSource])
    if (item.grade === 1) {
      axios.patch(`http://127.0.0.1:5000/rights/${item.id}`, {
        pagepermisson: item.pagepermisson
      })
    } else {
      axios.patch(`http://127.0.0.1:5000/children/${item.id}`, {
        pagepermisson: item.pagepermisson
      })
    }
  }
  return (
    <div>
      <Table dataSource={dataSource} 
        columns={columns} 
        pagination={{
          pageSize: 10
        }}/>
    </div>
  )
}
