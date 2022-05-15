import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import './css/01-index.css'

import {NavBar, Toast} from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'

function Cinemas (props) {
  useEffect(() => {
    if (props.list.length === 0) {
      console.log('后台请数据')
      Toast.show({
        icon: 'loading',
        content: '加载中…',
        duration: 300
      })
      props.getCinemaListAction()
    }
  }, [])

  return (<div>
    <NavBar right={<SearchOutline onClick={() => {
      props.history.push('/cinemas/search')
    }}/>}
      left={<div onClick={() => {
        props.history.push('/city')
      }}>{props.cityName}</div>}
      back={null}>
      影院
    </NavBar>

    <div className="content">
      {
        props.list.map(item => (
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
const mapStateToprops = (state) => {
  console.log(state)
  return {
    list: state.CinemaListReducer.list,
    cityName: state.CityReducer.cityName
  }
}

const mapDispathToProps =  {
  getCinemaListAction
}
export default connect(mapStateToprops, mapDispathToProps)(Cinemas)