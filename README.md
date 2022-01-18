# react 项目-岐记

简介：用于个人学习目标的打卡、激励等。目的是为了自身更好的学习。

### 技术栈组成部分

- [`react`](https://reactjs.org/) - `v17.0.2`
- [`react-router-dom`](https://reactrouter.com/) - `v6.2.1`
- [`antd`](https://ant-design.gitee.io/index-cn) - `v4.18.3`
- [`sass`](https://www.sass.hk/) - `v1.47.0`
- [`styled-components`](https://styled-components.com/) - `v5.3.3`
- [`tailwindcss`](https://tailwindcss.com/) - `v3.0.13`
- [`twin.macro`](https://github.com/ben-rogerson/twin.macro) - `v2.8.2`
- [`axios`](https://axios-http.com/) - `v0.24.0`

### 项目目录结构

```
- public/             # 公共文件
    |- index.html
    |- favicon.ico
    |- ...
- src/
    |- assets/        # 静态资源
        |- image/     # 图片
        |- ...
    |- component/     # 公共组件
    |- page/          # 以页面为单位划分的模块
        |- Main/      # main 模块
        |- ...
    |- store/         # 状态管理库部分
        |- someAtom.js
        |- ...
    |- api/       # 网络服务部分，和后端暴露的 controller 一一对应
        |- someApi.js
        |- ...
    |- utils/         # 功能性小工具
        |- api.js     # axios 实例
    |- App.js         # 应用主体
    |- index.js       # 入口文件
- package.json        # 项目配置文件
```

### 样式隔离规则

1、采用scss的嵌套语法以及css属性选择器进行样式隔离
- 组件绑定data-component为组件名。 例：data-component="app"
- scss样式包裹对应的属性名再嵌套样式。例：[data-component=app]{}

2、采用twin.macro进行样式隔离