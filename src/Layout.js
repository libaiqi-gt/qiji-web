import React, { Suspense } from 'react'
import { Layout } from 'antd';
import { Routes, Route } from 'react-router-dom'
import { routeConfig } from './router'
import MainSider from './components/MainSider';

export default function LayoutPage() {
  const { Header, Sider, Content } = Layout;
  const readerRoute = routes => (
    routes.map(item => item.menuType === 'SUBMENU' ? (
        readerRoute(item?.children ?? [])
      ) : <Route key={item.path} path={item.path} element={item.component}></Route>
    )
  )
  return (
    <Layout>
      <Sider>
        <MainSider/>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <Suspense fallback={<h2>加载中...</h2>}>
            <Routes>
              {readerRoute(routeConfig)}
            </Routes>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}
