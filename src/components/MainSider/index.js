import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { routeConfig } from '@/router'
import LogoImage from '@/asset/image/logo.png'
import './index.scss'

export default function MainSider() {
  const handleClick = item => {
    // useNavigate(item.key);
    console.log(item, '点击');
  }

  const renderMenu = (menus) => 
    menus.map(menu => 
      menu.menuType === 'SUBMENU' ? (
          <Menu.SubMenu key={menu.fullPath} title={menu.name} icon={menu.icon}>{renderMenu(menu?.children ?? [])}</Menu.SubMenu>
      ) : menu.menuType === 'MENU' ? (
          <Menu.Item key={menu.fullPath} icon={menu.icon}>{menu.name}</Menu.Item>
      ) : null
    )
  
  return (
    <div data-component="MainSider">
      <div className='logo'>
        <img src={LogoImage} />
      </div>
      <Menu theme='dark' mode='inline' onClick={handleClick}>
        {renderMenu(routeConfig)}
      </Menu>
    </div>
  )
}
