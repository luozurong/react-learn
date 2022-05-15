import React, { useEffect, useState, useMemo } from 'react'
import axios from 'axios'
export default function Cinena () {
  const [cinemaList, setCinemaList] = useState([])
  const [myText, setMyText] = useState('')

  useEffect(() => {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=2929620',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16464481306536901569806337","bc":"110100"}',
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then(res => {
        setCinemaList(res.data.data.cinemas)
      })
    
  }, [])
  const getCinemaList = useMemo(() => 
    cinemaList.filter(item => 
    item.name.includes(myText.toUpperCase())),
    [cinemaList, myText]
  )
  return (
    <div>
      <input value={myText} onChange={(evt) => {
        setMyText(evt.target.value)
      }}/>
      <div>
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