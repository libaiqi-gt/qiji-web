import React, { useEffect } from 'react';
import 'twin.macro'
import "styled-components/macro"
import { Avatar, message } from 'antd';
// import { UserOutlined } from '@ant-design/icons';
import { userInfoAtom } from 'store/userInfoAtom'
import { useRecoilState } from 'recoil'
import webApi from 'api';


export default function MainHeader() {

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
  }

  return (
    <div tw='w-full h-full flex justify-end items-center'>
      {/* <Avatar size="large" icon={<UserOutlined />} /> */}
      <Avatar src={userInfo.avatar} />
      <span tw='text-gray-100 pl-3'>{userInfo.userName || userInfo.account}</span>
    </div>
  );
}
