import React, { useState } from 'react'

export default function App () {
  const [isShow, setIsShow] = useState<boolean>(true)
  return (
    <div>
      <Navbar cb={()=> {
        console.log(111)
        setIsShow(!isShow)
      }}/>
      {isShow && <SideBar/>}
    </div>
  )
}

interface IProps {
  title?: string, // 可选
  cb: ()=>void
}

function Navbar(props: IProps) {
  return <div>
    navbar-<button onClick={() => {
      props.cb()
    }}>add</button>
  </div>
}

function SideBar() {
  return <div>
    sidebar
  </div>
}