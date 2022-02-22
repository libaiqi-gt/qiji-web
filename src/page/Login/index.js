import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import webApi from 'api'
import { userInfoAtom } from 'store/userInfoAtom'
import { useSetRecoilState } from 'recoil'
import 'twin.macro'
import "styled-components/macro"

export default function Login() {

  const navigate = useNavigate();
  const setUserInfo = useSetRecoilState(userInfoAtom);
  const [isLogin, setIsLogin] = useState(true);
  // 登录
  const onLogin = (values) => {
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
      message.error(err.message);
    });
  };
  // 注册
  const onRegister = (values) => {
    console.log(values);
  }

  return (
    <div tw="w-full h-screen flex	justify-center items-center bg-login-bg bg-no-repeat bg-right-bottom bg-cover">
      <div tw="w-96 flex flex-col justify-center items-center rounded-lg shadow-lg bg-white">
        <h1 tw="text-3xl py-6">{isLogin ? '登录' : '注册'}</h1>
        {isLogin ? 
          <Form onFinish={onLogin}>
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
            <Form.Item wrapperCol={{ offset: 4, span: 24 }}>
              <Button shape="round" size='large' htmlType="submit" tw='mr-8'>登录</Button>
              <Button shape="round" size='large' onClick={() => setIsLogin(false)}>注册</Button>
            </Form.Item>
          </Form>
          :
          <Form onFinish={onRegister} labelCol={{ span: 7 }}>
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
            <Form.Item
              label="确认密码"
              name="confirmPassword"
              rules={[{ required: true, message: '请再次输入密码' }]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 24 }}>
              <Button shape="round" size='large' htmlType="submit" tw='mr-8'>提交</Button>
              <Button shape="round" size='large' onClick={() => setIsLogin(true)}>已有账号</Button>
            </Form.Item>
          </Form>
        }
      </div>
    </div>
  )
}
