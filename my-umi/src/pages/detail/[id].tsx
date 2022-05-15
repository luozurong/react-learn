import React from 'react'
import {useParams} from 'umi'
interface IParams {
  id: string
}
export default function App (props: any) {
  const params = useParams<IParams>()
  console.log(params.id)
  return (
    <div>detail</div>
  )
}