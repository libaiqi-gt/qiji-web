import { Menu } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { routeConfig } from '../../router'
import LogoImage from '../../asset/image/logo.png'
import tw, { styled } from 'twin.macro'
import "styled-components/macro"

export default function MainSider() {
  const navigate = useNavigate();
  const location = useLocation();

  const [openKeys, setOpenKeys] = useState([])
  const [selectedKeys, setselectedKeys] = useState([])

  const handleClick = item => {
    navigate(item.key);
  };

  const handleOpenChange = key => {
    setOpenKeys(key)
  };

  useEffect(() => {
    let pathName = location.pathname.indexOf('/main') === 0 ? location.pathname.split('/main')[1].split('/') : location.pathname.split('/');
    pathName = pathName.filter(item => ( item && item.trim() ));
    // 只存在二级菜单可用（待优化）
    if (pathName.length !== 0) {
      setOpenKeys([`/main/${pathName[0]}`]);
      setselectedKeys(pathName.length === 2 ? [`/main/${pathName[0]}`, `/main/${pathName.join('/')}`] : [`/main/${pathName[0]}`]);
    }
  },[location])

  const renderMenu = menus => (
    menus.map(menu => 
      menu.menuType === 'SUBMENU' ? (
          <Menu.SubMenu key={menu.path} title={menu.name} icon={menu.icon}>{renderMenu(menu?.children ?? [])}</Menu.SubMenu>
      ) : menu.menuType === 'MENU' ? (
          <Menu.Item key={menu.path} icon={menu.icon}>{menu.name}</Menu.Item>
      ) : null
    )
  );
  
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
      <Menu 
        theme='dark'
        mode='inline'
        onClick={handleClick}
        selectedKeys={selectedKeys}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
      >
        {renderMenu(routeConfig)}
      </Menu>
    </MainSiderContainer>
  );
}
