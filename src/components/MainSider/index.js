import { Menu } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React from 'react'
// import LogoImage from '@/asset/image/logo.png'
import './index.scss'

export default function MainSider() {
  return (
    <div data-component="MainSider">
      <div className='logo'>
        {/* <img src={LogoImage} /> */}
      </div>
      <Menu theme='dark' mode='inline'>
        <Menu.Item key={1} icon={<UserOutlined/>}>nav 1</Menu.Item>
      </Menu>
    </div>
  )
}
