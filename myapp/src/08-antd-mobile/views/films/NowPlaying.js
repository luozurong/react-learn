import React, {useRef, useState } from 'react'
import {List, Image, InfiniteScroll} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

function Nowplaying (props) {
  const [list, setList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const pageNum = useRef(0)

  const getData = (pageNum) => {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=440100&pageNum=${pageNum}&pageSize=10&type=1&k=8341002`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setHasMore(res.data.data.films.length >= 10)
      setList([...list, ...res.data.data.films])
      
    })
  }

  const loadMore = () => {
    console.log('到底了')
    setHasMore(false)
    pageNum.current ++
    getData(pageNum.current)
  }

  return (
    <div>
      <List>
        {list.map(item => (
          <List.Item
            key={item.filmId}
            onClick={() => {
              props.history.push('/detail/' + item.filmId)
            }}
            prefix={
              <Image
                src={item.poster}
                style={{ borderRadius: 5 }}
                fit='cover'
                width={100}
              />
            }
            description={<div>
              {item.grade && <div>评分: {item.grade}</div>}
              <div>主演: {item.director}</div>
              <div>{item.synopsis}</div>
            </div>}
          >
            {item.name}
          </List.Item>
        ))}
      </List>

      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}/>
    </div>
  )
}

export default withRouter(Nowplaying)