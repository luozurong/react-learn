import React, { useEffect, useState } from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import './css/01-index.css'

export default function Cinemas (props) {
  const [cityName] = useState(store.getState().CityReducer.cityName)
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)

  useEffect(() => {
    // if (store.getState())
    if (store.getState().CinemaListReducer.list.length === 0) {
      console.log('后台请数据')
      // actionCreator里写异步
      store.dispatch(getCinemaListAction())
    } else {
      console.log('获取缓存')
    }

    let unsubscribe = store.subscribe(() => {
      console.log('cinema订阅', store.getState().CinemaListReducer)
      setCinemaList(store.getState().CinemaListReducer.list)
    })
    return () => {
      // 取消订阅
      unsubscribe()
    }
  }, [])
  return (<div>
    <div className="top">
      <div onClick={() => {
        props.history.push('/city')
      }}>{cityName}
      </div>
      <button onClick={() => {
        props.history.push('/cinemas/search')
      }}>搜索</button>
    </div>
    <div className="content">
      {
        cinemaList.map(item => (
          <dl key={item.cinemaId}>
            <dt>{item.name}</dt>
            <dd>{item.address}</dd>
          </dl>
        ))
      }
    </div>
  </div>
  )
}