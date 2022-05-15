import React from 'react'
import { Redirect, useLocation } from 'umi'

export default function Film (props: any) {
  const location = useLocation()
  if (location.pathname === '/film' || location.pathname === '/film/') {
    return <Redirect to="/film/nowplaying"/>
  }
  
  return (
    <div>
      <div style={{width: '100%', height: '200px', background: 'yellow'}}>大轮博</div>
      {props.children}
    </div>
  )
}