import React from 'react'
import 'twin.macro'
import "styled-components/macro"
import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import webApi from 'api'
import { userInfoAtom } from 'store/userInfoAtom'
import { useSetRecoilState } from 'recoil'

export default function Login() {

  const navigate = useNavigate();

  const setUserInfo = useSetRecoilState(userInfoAtom);

  const onFinish = (values) => {
    webApi.userLogin(values).then(res => {
      if (res.code === 0) {
        localStorage.setItem('userGuid', res.data.userGuid);
        localStorage.setItem('Authorization', res.data.token);
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

  return (
    <div tw="w-full h-screen flex	justify-center items-center bg-red-50">
      <div tw="w-96 h-52 flex	justify-center items-center rounded-lg shadow-lg bg-blue-300">
        <Form
          onFinish={onFinish}
        >
          <Form.Item
            label="账户"
            name="userAccount"
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
  )
}