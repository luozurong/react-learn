import React, { useEffect, useState }  from 'react'
import { IndexBar, List } from 'antd-mobile'
import { useHistory } from 'umi'
import { connect } from  'dva'

function City (props:any) {
  const [list, setList] = useState([])
  const history = useHistory()
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?k=4819809', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337"}',
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => res.json())
    .then(res => {
      // console.log(res.data)
      let newList: any = filterCity(res.data.cities)
      setList(newList)
    })
  }, [])

  const filterCity = (cities: any) => {
    const letterArr: Array<string> = []
    const newList = []
    for(var i = 65; i < 91; i++) {
      letterArr.push(String.fromCharCode(i))
    }

    for(var m in letterArr) {
      var cityitems: any = cities.filter((item: any) => item.pinyin.substring(0, 1).toUpperCase() === letterArr[m])
      cityitems.length && newList.push({
        title: letterArr[m],
        items: cityitems
      })
    }
    // console.log(newList)
    return newList
  }

  const changeCity = (item: any)=> {
    props.dispatch({
      type: 'city/changeCity',
      payload: {
        cityName: item.name,
        cityId: item.cityId
      }
    })
    
    history.goBack()

  }
  return <div style={{height: window.innerHeight}}>
    <IndexBar>
      {list.map(group => {
        const { title, items } = group
        return (
          <IndexBar.Panel
            index={title}
            title={title}
            key={title}
          >
            <List>
              {(items as any).map((item: any, index: number) => (
                <List.Item onClick={() => {
                  changeCity(item)
                }} key={index}>{item.name}</List.Item>
              ))}
            </List>
          </IndexBar.Panel>
        )
      })}
    </IndexBar>
  </div>
}

export default connect(() => ({}))(City)