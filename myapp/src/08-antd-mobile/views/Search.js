import React, {useEffect, useState, useMemo} from 'react'
import store from '../redux/store'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'

import { SearchBar } from 'antd-mobile'

export default function Center (props) {
  const [cinemaList, setCinemaList] = useState(store.getState().CinemaListReducer.list)
  const [myText, setMyText] = useState('')

  useEffect(() => {
    if (store.getState().CinemaListReducer.list.length === 0) {
      console.log('后台请数据')
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

  const getCinemaList = useMemo(() => 
    cinemaList.filter(item => 
    item.name.includes(myText.toUpperCase())),
    [cinemaList, myText]
  )

  return (
    <div>
      
      <div style={{padding: '10px'}}>
        <SearchBar placeholder='请输入内容' 
        onChange={(value) => {
          setMyText(value)
        }}
        value={myText} 
        showCancelButton={() => true} />
      </div>

      <div className="content">
        {
          getCinemaList.map(item => (
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