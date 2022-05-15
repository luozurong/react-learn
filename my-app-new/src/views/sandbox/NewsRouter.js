import React, { useEffect, useState } from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import Home from './home/Home'
import NoPermission from './nopermission/NoPermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import Userlist from './user-manage/Userlist'

import NewsAdd from './news-manage/NewsAdd'
import NewsDraft from './news-manage/NewsDraft'
import NewsCategory from './news-manage/NewsCategory'
import Audit from './audit-manage/Audit'
import AuditList from './audit-manage/AuditList'
import Unpublished from './publish-manage/Unpublished'
import Published from './publish-manage/Published'
import Sunset from './publish-manage/Sunset'
import axios from 'axios'

const LocalRouterMap = {
  '/home': Home,
  '/user-manage/list': Userlist,
  '/right-manage/role/list': RoleList,
  '/right-manage/right/list': RightList,
  '/news-manage/add': NewsAdd,
  '/news-manage/draft': NewsDraft,
  '/news-manage/category': NewsCategory,
  '/audit-manage/audit': Audit,
  '/audit-manage/list': AuditList,
  '/publish-manage/unpublished': Unpublished,
  '/publish-manage/published': Published,
  '/publish-manage/sunset': Sunset,
}

export default function NewsRouter() {
  const [BackRouteList, setBackRouteList] = useState([])
  const {role: {rights}} = JSON.parse(localStorage.getItem('token'))
  useEffect(() => {
    Promise.all([
      axios.get('http://127.0.0.1:5000/rights'),
      axios.get('http://127.0.0.1:5000/children')
    ]).then(res => {
      console.log(res)
      setBackRouteList([...res[0].data, ...res[1].data])
    })
  }, [])

  const checkRoute = (item) =>{
    return LocalRouterMap[item.key] && item.pagepermisson
  }

  const checkPermission = (item) => {
    return rights.includes(item.key)
  }

  return (<Switch>
    {
      BackRouteList.map(item => {
        if (checkRoute(item) && checkPermission(item)) {
          return <Route path={item.key} 
          key={item.key} 
          component={LocalRouterMap[item.key]} 
          exact/>
        }
        return null
      })
    }
    <Redirect from="/" to="/home" exact/>
    {
      BackRouteList.length > 0 && <Route path="*" component={NoPermission}></Route>
    }
  </Switch>)
}
