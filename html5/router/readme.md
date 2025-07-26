# 路由

history
hash

- 传统页面开发
  非常重要的用户体验缺失

  - 需要去到后端拿到新的 html，重新渲染
    白屏
  - a 链接切换页面
  - 相比于 react-router-dom 局部热更新
    前端路由 去负责

- 新的 react-router-dom SPA 单页应用
  只有一个页面 但能带来多页面效果

## SPA

- Single Page Application
- 只有一个页面

  - react 组件
    页面级别组件
  - Routes/Route 申明，文档流中占位
  - Routes 外面，Outlet 外面 不用更新的
  - url
  - Routes 内部显示哪个页面组件
    热更新

  - 用一个页面完成了多个页面的显示
  - 用 SPA 用户体验特别棒，

## 核心

- url 切换
  不能用 a
  Link
  不去重新发送请求，
  作为事件，js 动态加载
- 事件 hashChange /pushState
- 根据当前的 url，取出对应的组件
  替换掉之前的页面级别组件
- 体验是
  URL 改变了，竟然不用刷新整个页面
- 不再看白屏
  页面很快
  About
  Home 全是前端组件

## url 改变，但不重新渲染的解决方案

- hash 的改变 很早就有的
  原来是用来做页面锚点的，长页面的电梯
  不会刷新页面
  #/
  #/about
- 事件
  hashChange

## 基于 SPA

- url 可以改变，但不会向后端发送请求 前端路由
  - hash + hasChange 事件 +DOM
  - history +pushState/popState
- 前端路由 react-router-dom 配置 页面级别组件
  热更新 Route Outlet
- 单页应用
  只有一个页面 但可以有多个 url 路由状态
  页面级别组件
  window.location window.history
  栈
  State

- history
  很早就有，在浏览器历史记录里游走
  - html5 赋予 history 新的功能
  - hash + haschange 有优点，但是有很大的缺点
    兼容性好
    缺点 http://127.0.0.1:5500/html5/router/3.html#top
    hash 不好理解
    不这样，传统后端路由一样
    http://127.0.0.1:5500/ 首页
    http://127.0.0.1:5500/about 关于
  - 怎么样像后端路由一样，同时又不刷新页面？
    Html5 升级了 history api 来实现之
