import * as AntdIcons from '@ant-design/icons'
import { createElement, lazy } from 'react'
import Home from "../page/Home";

const WelCome = lazy(() => import('../page/WelCome'));
const UserInfo = lazy(() => import('../page/Home/UserInfo'));

export const routeConfig = [
  {
    path: '/main',
    element: <WelCome/>,
    name: '简介',
    menuType: 'PAGE'
  },
  {
    path: '/main/Home',
    name: '我的',
    menuType: 'SUBMENU',
    icon: createElement(AntdIcons['UserOutlined']),
    children: [
      {
        path: '/main/Home/UserInfo',
        element: <UserInfo/>,
        name: '个人信息',
        menuType: 'MENU',
        icon: createElement(AntdIcons['BarsOutlined'])
      }
    ]
  },
  {
    path: '/main/integralMall',
    element: <Home/>,
    name: '积分中心',
    menuType: 'MENU',
    icon: createElement(AntdIcons['GiftOutlined']),
  }
]