import React, { useEffect } from 'react'

export default function Detail (props) {
  // 动态路由
  console.log(props, props.match.params.id, '利用id获取数据')

  // query
  // console.log(props.location.query, 'query方法')

  // state
  // console.log(props, props.location.state.id, '利用id获取数据')

  useEffect(() => {
    console.log('create')
    return () => {
      console.log('destroy')
    }
  }, [])
  return (
    <div>Detail</div>
  )
}