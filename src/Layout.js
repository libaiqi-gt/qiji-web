import React, { Suspense } from 'react'
import { Layout, Spin } from 'antd';
import { useRoutes, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { loadingAtom } from 'store/storeAtom'
import { routeConfig } from './router'
import MainSider from 'components/MainSider';
import MainHeader from 'components/MainHeader'

export default function LayoutPage() {
  const { Header, Sider, Content } = Layout;
  const isLoading = useRecoilValue(loadingAtom);
  return (
    <Layout>
      <Sider>
        <MainSider/>
      </Sider>
      <Layout>
        <Header>
          <MainHeader />
        </Header>
        <Spin tip='loading...' spinning={isLoading} wrapperClassName='page_loading'>
          <Content>
            <Suspense fallback={<Spin tip='拼命加载中...' />}>
              {useRoutes(routeConfig)}
            </Suspense>
            <Outlet />
          </Content>
        </Spin>
      </Layout>
    </Layout>
  )
}
