import React from 'react'
import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import webApi from 'api'
import { userInfoAtom } from 'store/userInfoAtom'
import { useSetRecoilState } from 'recoil'
import tw, { styled } from 'twin.macro'
import "styled-components/macro"

export default function Login() {

  const navigate = useNavigate();

  const setUserInfo = useSetRecoilState(userInfoAtom);

  const onFinish = (values) => {
    webApi.userLogin(values).then(res => {
      if (res.code === 200) {
        localStorage.setItem('userGuid', res.data.userGuid);
        localStorage.setItem('Authorization', res.token);
        setUserInfo(res.data);
        navigate('/main');
      }
    }).catch(err => {
      localStorage.removeItem('Authorization');
      localStorage.removeItem('userGuid');
      setUserInfo({});
      message.error(err);
    });
  };

  const LoginContainer = styled.div`
    ${tw`w-full h-screen`}
    background: url('../../../src/aseet/image/bg.png')
  `
  return (
    <LoginContainer>
      <div tw="w-full h-screen flex	justify-center items-center bg-login-bg bg-no-repeat bg-right-bottom">
        <div tw="w-96 flex flex-col justify-center items-center rounded-lg shadow-lg bg-white">
          <h1 tw="text-3xl py-6">登录</h1>
          <Form
            onFinish={onFinish}
          >
            <Form.Item
              label="账户"
              name="account"
              rules={[{ required: true, message: '请输入账户' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </LoginContainer>
  )
}
