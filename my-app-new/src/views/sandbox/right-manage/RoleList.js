import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Table, Button, Modal,Tree } from 'antd'
const { confirm } = Modal
export default function RoleList() {
  const [dataSource, setdataSource] = useState(0)
  const [rights, setrights] = useState([])
  const [currentRights, setcurrentRights] = useState([])
  const [currentId, setcurrentId] = useState(0)
  const [isModelVisible, setisModelVisible] = useState(false)
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      render: (id) => {
        return <b>{id}</b>
      }
    },
    {
      title: '角色名称',
      dataIndex: 'roleName'
    },
    {
      title: '操作',
      render: (item) => {
        return <div>
          <Button danger shape="circle" icon={<DeleteOutlined />} onClick={() => confirmHandle(item)} style={{'marginRight': '5px'}}/>
          <Button type="primary" shape="circle" onClick={() => {
            setisModelVisible(true)
            setcurrentRights(item.rights)
            setcurrentId(item.id)
          }} icon={<EditOutlined />}/>
        </div>
      }
    }
  ]

  const confirmHandle = (item) => {
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

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/roles').then(res => {
      setdataSource(res.data)
    })

    axios.get('http://127.0.0.1:5000/rights?_embed=children').then(res => {
      setrights(res.data)
    })
  }, [])

  const handleOk = () => {
    console.log(currentRights)
    setisModelVisible(false)
    // 同步后端datasource
    setdataSource(dataSource.map(item => {
      if(item.id === currentId) {
        return {
          ...item,
          rights: currentRights
        }
      }
      return item
    }))
    axios.patch(`http://127.0.0.1:5000/roles/${currentId}`, {
      rights: currentRights
    })
  }

  const handleCancel = () => {
    setisModelVisible(false)
  }

  const onCheck = (checkedKeys) => {
    setcurrentRights([...checkedKeys.checked])
  }
  return (
    <div>
      <Table dataSource={dataSource}
        columns={columns}
        rowKey={(item) => item.id}></Table>

      <Modal
        title="权限分配"
        visible={isModelVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <Tree
          checkable
          checkStrictly={true}
          checkedKeys={currentRights}
          onCheck={onCheck}
          treeData={rights}
        />
      </Modal>  
    </div>
  )
}
