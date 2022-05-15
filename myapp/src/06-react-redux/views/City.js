import React, { useState } from 'react'
import { connect } from 'react-redux'

function City (props) {
  let [list] = useState(['北京', '上海',  '广州', '深圳'])
  return (<div>
    city
    <ul>
      {
        list.map(item => <li key={item}
        onClick={() => {
     
         props.change(item)
      
          // props.history.push('/cinemas')
          props.history.goBack()
        }}>{item}</li>)
      }
    </ul>
  </div>)
}
const mapDispatchToProps = {
  change (item) {
    return {
      type: 'change-city',
      payload: item
    }
  }
}
export default connect(null, mapDispatchToProps)(City)