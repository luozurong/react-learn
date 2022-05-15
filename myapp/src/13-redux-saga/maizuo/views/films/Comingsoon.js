import axios from 'axios'
import React, { useEffect } from 'react'

export default function Comingsoon () {
  useEffect(() => {
    axios.get('ajax/comingList?ci=20&limit=10&movieIds=&token=&optimus_uuid=2F00C1F0A01C11EC9738816132C7196992316395125349DC97B261FB7F83B5C8&optimus_risk_level=71&optimus_code=10').then(res => {
      console.log(res)
    })
  }, [])
  return (
    <div>Comingsoon</div>
  )
}