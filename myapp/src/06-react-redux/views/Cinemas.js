import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import getCinemaListAction from '../redux/actionCreator/getCinemaListAction'
import './css/01-index.css'

function Cinemas (props) {
  useEffect(() => {
    if (props.list.length === 0) {
      console.log('后台请数据')
      props.getCinemaListAction()
    }
  }, [])

  return (<div>
    <div className="top">
      <div onClick={() => {
        props.history.push('/city')
      }}>{props.cityName}
      </div>
      <button onClick={() => {
        props.history.push('/cinemas/search')
      }}>搜索</button>
    </div>

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