import React, { Suspense } from 'react'
import { Layout } from 'antd';
import { useRoutes, Outlet } from 'react-router-dom'
import { routeConfig } from './router'
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
        <Content>
          <Suspense fallback={<h2>加载中...</h2>}>
            {useRoutes(routeConfig)}
          </Suspense>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}
