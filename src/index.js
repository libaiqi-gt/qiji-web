import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'; // 国际化配置
import { RecoilRoot } from 'recoil'
import App from './App';
import './App.scss'

ReactDOM.render(
  <RecoilRoot>
    <ConfigProvider locale={zhCN}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </RecoilRoot>,
  document.getElementById('root')
);

