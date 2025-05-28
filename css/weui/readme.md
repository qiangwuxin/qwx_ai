# 微信当家框架 WEUI

## BEM 国际命名规范

- 项目 .weui-page
  - button 页面
    规范
- Block 概念
  一块内容 项目代号 风格+可复用的代码
  项目代号 + 区块的作用或职责 page
  .weui-page
  .tm-page
- Element 概念
  元素 **header
  块**
  同一块中概念不重叠
  .weui-page**title
  .weui-page**desc
- UI **框架**中 BUTTON,INPUT,CELL,通用的**组件**
  重启 BEM 命名
  .weui-btn **复用**
  业务代码？
  大厂，
  基础架构代码 学习 WEUI 的源码

  几个 block 组合起来，页面就出来了，组件式开发
  -Modifier
  状态
  .weui-btn_primary
  .weui-btn_default

- BEM 命名规范让我们一起大厂协作
  - 页面由 blocks 构成 .weui-{block}
  - block 包含一些 elements .weui-{block}\_\_{element}
  - element 会有些状态 .weui-{block}\__{element} _{modifier}
