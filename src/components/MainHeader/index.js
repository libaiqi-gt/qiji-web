import React, { useEffect } from 'react';
import 'twin.macro'
import "styled-components/macro"
import { Avatar, message, Dropdown, Menu } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { userInfoAtom } from 'store/storeAtom'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import webApi from 'api';


export default function MainHeader() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const userGuid = localStorage.getItem('userGuid');

  useEffect(() => {
    if (!userInfo.userGuid && userGuid) getUserByUserGuid();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const getUserByUserGuid = () => {
    webApi.getUserByUserGuid(userGuid).then(res => {
      if (res.code === 200) {
        setUserInfo(res.data);
      }
    }).catch(err => {
      message.error(err.message);
    });
  };
  // 退出登录
  const signOut = () => {
    navigate('/login');
    localStorage.removeItem('Authorization');
    localStorage.removeItem('userGuid');
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <span onClick={signOut}>退出登录</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div tw='w-full h-full flex justify-end items-center'>
      <Dropdown overlay={menu}>
        <Avatar src={userInfo.avatar} >{userInfo.avatar ? '' : 'U'}</Avatar>
      </Dropdown>
      <span tw='text-gray-100 pl-3'>{userInfo.userName || userInfo.account}</span>
    </div>
  );
}
