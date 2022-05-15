import React, { useEffect } from 'react'
import store from '../redux/store'
import {hide} from '../redux/actionCreator/TabbarActionCreator'


export default function Detail (props) {
  useEffect(() => {
    console.log('create')
    // console.log(store.dispath({type: 'lzr-tabbar-show'}))
    store.dispatch(hide())

    return () => {
      console.log('destroy')
      store.dispatch({
        type: 'lzr-tabbar-show'
      })
    }
  }, [])
  return (
    <div>Detail</div>
  )
}