import * as AntdIcons from '@ant-design/icons'
import { createElement } from 'react'
import WelCome from "../page/WelCome";
import Home from "../page/Home";
import UserInfo from '../page/Home/UserInfo';

export const routeConfig = [
  {
    path: '/',
    fullPath: '/page/WelCome',
    component: <WelCome/>,
    name: '简介',
    menuType: 'PAGE'
  },
  {
    path: '/Home',
    fullPath: '/page/Home',
    component: <Home/>,
    name: '我的',
    menuType: 'SUBMENU',
    icon: createElement(AntdIcons['UserOutlined']),
    children: [
      {
        path: '/Home/UserInfo',
        fullPath: '/page/Home/UserInfo',
        component: <UserInfo/>,
        name: '个人信息',
        menuType: 'MENU',
        icon: createElement(AntdIcons['BarsOutlined'])
      }
    ]
  }
]