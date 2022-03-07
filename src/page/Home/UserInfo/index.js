import React from 'react'
import tw, { styled } from 'twin.macro'
import "styled-components/macro"
import { Avatar, Upload, Input, Button, message } from 'antd';
import { useRecoilState, useSetRecoilState } from 'recoil'
import { userInfoAtom, loadingAtom } from 'store/storeAtom'
import webApi from 'api';

export default function UserInfo() {
  const [userInfo, setUserInfoAtom] = useRecoilState(userInfoAtom);
  const setIsLoading = useSetRecoilState(loadingAtom);
  const setUserInfo = {
    userName: '',
    phoneNumber: '',
    userEmail: ''
  };
  const uploadProps = {
    name: 'avatar',
    showUploadList: false,
    action: '',
    beforeUpload(file) {
      console.log(file, '上传前');
    },
    onChange(info) {
      // 正在上传
      if (info.file.status === 'uploading') {
        return;
      }
      // 上传完成
      if (info.file.status === 'done') {
        console.log(info);
      }
    }
  }

  const UserInfoContainer = styled.div`
    ${tw`w-full h-full flex items-center flex-col`}
    padding: 20px;
    overflow: auto;
  `;
  const UserInfoListItem = styled.div`
    ${tw`w-2/4 p-4 flex`}
    border-bottom: 1px solid rgba(209, 213, 219, 1);
  `;

  const userInfoList = [
    { label: '账号', value: userInfo.account, type: 'text' },
    { label: '用户名', value: userInfo.userName, type: 'input', maxLength: 10, placeholder: '填写你的用户名' },
    { label: '密码', value: '******', type: 'text' },
    { label: '手机号', value: userInfo.phoneNumber, type: 'input', maxLength: 11, placeholder: '填写你的手机号' },
    { label: '邮箱', value: userInfo.userEmail, type: 'input', maxLength: 20, placeholder: '填写你的邮箱' },
    { label: '拥有积分数', value: userInfo.integral, type: 'text' },
    { label: '注册时间', value: userInfo.createTime, type: 'text' },
  ];

  const changeInputValue = e => {
    switch(e.target.dataset.type) {
      case '用户名':
        setUserInfo.userName = e.target.value;
        return;
      case '手机号':
        setUserInfo.phoneNumber = e.target.value;
        return;
      case '邮箱':
        setUserInfo.userEmail = e.target.value;
        return;
      default:
    }
  };
  // 修改个人信息
  const changeUserInfo = () => {
    setIsLoading(true);
    const params = {
      userGuid: userInfo.userGuid,
      userName: setUserInfo.userName || userInfo.userName,
      phoneNumber: setUserInfo.phoneNumber || userInfo.phoneNumber,
      userEmail: setUserInfo.userEmail || userInfo.userEmail,
    };
    webApi.updateUserInfo(params).then(res => {
      if (res.code === 200) setUserInfoAtom(res.data);
      console.log(res, '查看');
      setIsLoading(false);
    }).catch(err => {
      message.error(err.message);
      setIsLoading(false);
    });
  }

  return (
    <UserInfoContainer>
      <Upload {...uploadProps}>
        <Avatar
          size={{ xs: 36, sm: 40, md: 64, lg: 80, xl: 100, xxl: 120 }}
          src={userInfo.avatar}
        >{userInfo.avatar ? '' : 'U'}</Avatar>
      </Upload>
      {
        userInfoList.map(item => {
          return (
            <UserInfoListItem key={item.label}>
              <label tw='w-24 text-left'>{item.label}：</label>
              {item.type === 'text' ?
                <span>{(item.value || item.value === 0) ? item.value : '暂无'}</span>
                :
                <Input data-type={item.label} defaultValue={item.value} showCount maxLength={item.maxLength} placeholder={item.placeholder} onChange={changeInputValue} />}
            </UserInfoListItem>
          );
        })
      }
      <Button tw='bg-blue-500 m-4' type="primary" onClick={changeUserInfo}>保存修改</Button>
    </UserInfoContainer>
  )
}
