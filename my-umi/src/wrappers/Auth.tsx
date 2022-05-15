import React from 'react'
import { Redirect } from 'umi'

export default function Auth (props: any) {
  if (localStorage.getItem('token')) {
    return (
      <div>
        
        Auth
        {props.children}
      </div>
    )
  }
  return <Redirect to="/login"></Redirect>
  
}