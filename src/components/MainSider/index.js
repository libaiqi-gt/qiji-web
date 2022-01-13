import { Menu } from 'antd'
import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { routeConfig } from '../../router'
import LogoImage from '../../asset/image/logo.png'
import tw, { styled } from 'twin.macro'
import "styled-components/macro";

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
  
  const MainSiderContainer = styled.div`
    height: 100vh;
  `
  const LogoContainer = styled.div`
    ${tw`w-full`}
    height: 60px;
  `
  return (
    <MainSiderContainer>
      <LogoContainer>
        <img src={LogoImage} alt='logo' tw="h-full m-auto" />
      </LogoContainer>
      <Menu theme='dark' mode='inline' onClick={handleClick}>
        {renderMenu(routeConfig)}
      </Menu>
    </MainSiderContainer>
  )
}
