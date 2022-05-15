import React, { useEffect } from 'react'
import store from '../mobx/store'

export default function Detail (props) {
  // 动态路由
  console.log(props, props.match.params.id, '利用id获取数据')

  // query
  // console.log(props.location.query, 'query方法')

  // state
  // console.log(props, props.location.state.id, '利用id获取数据')

  useEffect(() => {
    console.log('create')
    // store.isTabbarShow = false
    store.changeHide()
    return () => {
      console.log('destroy')
      // store.isTabbarShow = true
      store.changeShow()
    }
  }, [])
  return (
    <div>Detail</div>
  )
}