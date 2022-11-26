import  { useSelector, useDispatch } from 'react-redux'
import numStatus from '../store/numStatus'
const Page1 = () => {
  // useDispath修改仓库数据
  const dispatch = useDispatch()

  // useSelector 获取仓库数据
  const { num }  = useSelector((state: RootState) => ({
    num: state.numReducer.num
  }))

  const { arr }  = useSelector((state: RootState) => ({
    arr: state.ArrReducer.arr
  }))

  const changeNum = () => {
    console.log(11)
    // 同步写法
    dispatch({type: 'add1'})
  }

  const changeNum2 = () => {
    dispatch({type: 'add2', value: 100})
  }
  const changeNum3 = () => {
    // 异步操作
    // dispatch((dis: Function) => {
    //   setTimeout(() => {
    //     dis({type: 'add3', value: 200})
    //   }, 1000)
    // })
    dispatch(numStatus.asyncActions.asyncAdd1)
    
  }

  return (<div className="home">
    Page1组件13
    <p>react-redux数据{num}</p>
    <p>react-redux-arr{arr}</p>
    <button onClick={changeNum}>添加1</button>
    <button onClick={changeNum2}>添加2</button>
    <button onClick={changeNum3}>添加3-异步</button>
  </div>)
}

export default Page1