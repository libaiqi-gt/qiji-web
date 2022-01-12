import React from 'react'
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom'
import MainSider from './components/MainSider';
import WelCome from './page/WelCome';

export default function LayoutPage() {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Sider>
        <MainSider/>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Routes>
            <Route path="/" element={<WelCome/>}></Route>
          </Routes>
        </Content>
      </Layout>
    </Layout>
  )
}
