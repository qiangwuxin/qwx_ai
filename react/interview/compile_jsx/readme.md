- JXS ?

  - JSX 不能独立运行
  - 依托于工程化的工具 vite
    jsx->React.createElement->DOM 元素
  - React 环境中

- babel
  Make javascript Great again
  大胆使用 js 的最新语法，不用等待
  es6 promise -> es8 async await
  let ->var
  ()=>{} -> function(){}

- 编译的流程
  - pnpm i @babel/cli @babel/core -D
    @babel/cli babel 的命令行工具
    @babel/core babel 的核心转译工程
    babel 负责 JS 转码
    -D 安装的是开发阶段的依赖 dev
    上线后是不用的
  - ./node_modules/.bin/babel
    转换的规则
    react->IOS 代码
    es6+->es5
    JSX->React.createElement
