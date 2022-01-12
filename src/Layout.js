import React from 'react'
import { Layout } from 'antd';
import MainSider from './components/MainSider';

export default function LayoutPage() {
  const { Header, Sider, Content } = Layout;
  return (
    <Layout>
      <Sider>
        <MainSider/>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
      </Layout>
    </Layout>
  )
}
