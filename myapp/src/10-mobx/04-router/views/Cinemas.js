

import React, { useEffect } from 'react'
import store from '../mobx/store'
import { Observer } from 'mobx-react'
export default function Cinemas (props) {
  useEffect(() => {
    console.log(props)
    if (store.list.length === 0) {
      store.getList()
    } 
    return () => {}
  }, [])
  return (<div>
    <Observer>
      {() => {
          return store.list.map(item => (
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          ))
      }}
    </Observer>
  </div>
  )
}