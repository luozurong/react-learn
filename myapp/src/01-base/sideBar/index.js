import React from 'react'
import PropTypes from 'prop-types'

export default function SideBar (props)  {
  console.log(props)
  let { bg, fontSize } = props
  return (
    <div style={{background: bg, fontSize: fontSize}}>sidebar</div>
  )
}

// 验证
SideBar.propTypes = {
  background: PropTypes.string
}
// 默认
SideBar.defaultProps = {
  background: 'red'
}