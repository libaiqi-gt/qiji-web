import * as AntdIcons from '@ant-design/icons'
import { createElement, lazy } from 'react'
import Home from "../page/Home";

const WelCome = lazy(() => import('../page/WelCome'));
const UserInfo = lazy(() => import('../page/Home/UserInfo'));

export const routeConfig = [
  {
    path: '/',
    component: <WelCome/>,
    name: '简介',
    menuType: 'PAGE'
  },
  {
    path: '/Home',
    name: '我的',
    menuType: 'SUBMENU',
    icon: createElement(AntdIcons['UserOutlined']),
    children: [
      {
        path: '/Home/UserInfo',
        component: <UserInfo/>,
        name: '个人信息',
        menuType: 'MENU',
        icon: createElement(AntdIcons['BarsOutlined'])
      }
    ]
  },
  {
    path: '/integralMall',
    component: <Home/>,
    name: '积分中心',
    menuType: 'MENU',
    icon: createElement(AntdIcons['UserOutlined']),
  }
]