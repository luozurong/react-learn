import React, {useEffect, useState} from 'react'
import {useHistory} from 'umi'

export default function Nowplaying (props: any) {
  const [list, setList] = useState([])
  const history = useHistory()
  useEffect(() => {
    fetch('https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=6199934', {
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => res.json())
    .then(res => {
      console.log(res.data.films)
      setList(res.data.films)
    })
  }, [])
  return (
    <div>
      {
        list.map((item: any) => <li key={item.filmId}
        onClick={() => {
          history.push(`/detail/${item.filmId}`)
        }}>{item.name}</li>)
      }
    </div>
  )
}