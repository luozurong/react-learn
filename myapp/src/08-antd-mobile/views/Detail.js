import React, { useEffect } from 'react'
import {hide, show} from '../redux/actionCreator/TabbarActionCreator'
import {connect} from 'react-redux'


function Detail (props) {
  let {match} = props
  useEffect(() => {
    console.log('create', props)
    props.hide()
    return () => {
      props.show()
      console.log('destroy')
    }
  }, [match.params.id])
  return (
    <div>Detail</div>
  )
}
// connect(将来给孩子传的属性， 将来给孩子传的回调函数)

const mapDispathToProps = {
  show,
  hide,
  a () {

  },
  b () {

  }
}
export default connect(null, {
  show,
  hide
})(Detail)