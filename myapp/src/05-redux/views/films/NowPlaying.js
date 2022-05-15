import React, { useEffect, useState } from 'react'
import { withRouter} from 'react-router-dom'

import axios from 'axios'

export default function Nowplaying (props) {
  const [list, setList] = useState([])
  // const history = useHistory()

  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=8341002',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"440100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log(res)
      setList(res.data.data.films)
    })
  }, [])

  // const handleChangePage = (id) => {
    // window.location.href = '#/detail/' + id
    // props.history.push(`/detail/${id}`)

    // 动态路由获取
    // history.push(`/detail/${id}`)
    // query获取

    // props.history.push({
    //   pathname: '/detail',
    //   query: {
    //     id: id
    //   }
    // })

    // state创参数
    // history.push({
    //   pathname: '/detail',
    //   state: {
    //     id: id
    //   }
    // })
  // }

  return (
    <div>
      <ul>
        {
          list.map(item => <WithFilmItem key={item.filmId} {...item}></WithFilmItem>)
        }
      </ul>
    </div>
  )
}

function FilmItem (props){
  let {name, filmId, poster} = props
  return <li 
  onClick={() => {
    console.log(filmId)
    props.history.push(`/detail/${filmId}`)
  }}>
    <img style={{height: '200px'}} src={poster} alt={name}></img>
    {name}
  </li>
}

const WithFilmItem = withRouter(FilmItem)

