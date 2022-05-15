import React from 'react'
import { Button } from 'antd'
import axios from 'axios'
export default function Home() {
  const ajax = () => {
    // 查
    // axios.get('http://localhost:8000/posts').then(res => {
    //   console.log(res.data)
    // })

    // 增
    // axios.post('http://localhost:8000/posts', {
    //   title: '333',
    //   author: 'xiaoming'
    // }).then(res => {
    //   console.log(res)
    // })

    // 改 
    // axios.put('http://localhost:8000/posts/1', {
    //   title: '444',
    //   author: 'xiaoming44'
    // }).then(res => {
    //   console.log(res)
    // })

    // 更新
    // axios.patch('http://localhost:8000/posts/2', {
    //   title: '222-'
    // }).then(res => {
    //   console.log(res)
    // })

    // 删除 delete
    // axios.delete('http://localhost:8000/posts/2').then(res => {
    //   console.log(res)
    // })

    // _embed
    // axios.get('http://localhost:8000/posts?_embed=comments').then(res => {
    //   console.log(res)
    // })

    // _expand
    axios.get('http://localhost:8000/comments?_expand=post').then(res => {
      console.log(res)
    })
  }
  return (
    <div>
      <Button type="primary" onClick={ajax}>home</Button>
    </div>
  )
}
