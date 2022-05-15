import React, { useEffect } from 'react'

function NotFound () {
  useEffect(() => {
  }, [])
  return (
    <div>404</div>
  )
}


// 高阶组件探索
function lzrConnect (cb,obj) {
  var value = cb()
  return (MyComponent) => {
    return (props) => {
      console.log(props)
      return <div style={{color: 'red'}}>
        <MyComponent {...value} {...props} {...obj}/>
      </div>
    }
  }
}
export default lzrConnect(() => {
  return {
    a: 1,
    b: 2
  }
}, {
  aa () {},
  bb () {}
})(NotFound)