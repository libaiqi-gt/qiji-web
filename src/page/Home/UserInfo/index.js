import React from 'react'
import tw, { styled } from 'twin.macro'
import "styled-components/macro"
import { Avatar, Upload } from 'antd';
import { useRecoilValue } from 'recoil'
import { userInfoAtom } from 'store/storeAtom'

export default function UserInfo() {
  const userInfo = useRecoilValue(userInfoAtom);
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
    ${tw`w-full h-full flex justify-center`}
    padding: 20px;
    overflow: auto;
  `;

  return (
    <UserInfoContainer>
      <Upload {...uploadProps}>
        <Avatar
          size={{ xs: 36, sm: 40, md: 64, lg: 80, xl: 100, xxl: 120 }}
          src={userInfo.avatar}
        >{userInfo.avatar ? '' : 'U'}</Avatar>
      </Upload>
    </UserInfoContainer>
  )
}
