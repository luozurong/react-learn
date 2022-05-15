import React, { useEffect } from 'react'
import { NavBar, DotLoading } from 'antd-mobile'
import { SearchOutline } from 'antd-mobile-icons'
import { useHistory } from 'umi'
import { connect } from 'dva'

function Cinema (props: any) {
  const history = useHistory()
  useEffect(() => {
    if (props.list.length === 0) {
      props.dispatch({
        type: 'cinema/getList',
        payload: {
          cityName: props.cityName,
          cityId: props.cityId
        }
      })
    }else {
      console.log('缓存')
    }
  }, [])
  return (
    <div>
      <NavBar back={props.cityName} onBack={() => {
        props.dispatch({
          type: 'cinema/clearList'
        })
        history.push('/city')
      }} backArrow={false} right={<SearchOutline />}>标题</NavBar>

      {
        props.loading && <div style={{ fontSize: 14, textAlign: 'center'}}>
          <DotLoading />
        </div>
      }

      <ul>
        {props.list.map(((item: any) => <li key={item.cinemaId}>{item.name}</li>))}
      </ul>

    </div>
  )
}
const mapStateToProps = (state: any) => {
  return {
    cityName: state.city.cityName,
    list: state.cinema.list,
    cityId: state.city.cityId,
    loading: state.loading.global // dva提供的
  }
}
export default connect(mapStateToProps)(Cinema)