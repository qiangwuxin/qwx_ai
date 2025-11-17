# 手写react

- Dideact
   - 命名空间 namespace 
   - 对象字面量

- VDOM 
   UI 表达 JSX
   JSX=>转成VDOM ?

- JSX react 优点 
     js 里编写HTML，极其简便的表达UI
     bebel React.createElement
     Dideact.createElement



## Didact 运行的入口
- babel 将JSX 转译为React.createElement方法调用
  给相应的参数，生成VDOM
  @babel/preset-react pragma 编译后的函数名
  pragma JSX不是react 的专属，vue中也可以用JSX

## createElement

  - App.jsx => babel -> Dideact.createElement(tag,props,...children)
     返回的结果 VDOM 
     由Vnode 节点组成VDOM树，每个节点包含type,props两个属性，
     props.children是子节点，也是一个对象

     React.createElement返回的Element就是一个描述”要在页面上渲染什么“的普通javascript对象（即虚拟DOM点），
     他包含type\props等属性，是React用来对比变化并高效更新的真实DOM的虚拟表示。


- createTextElement 这么复杂？
     type 没有的
     children 没有的
     统一，执行render 

## 目前完成
- React is a namespace
- the createElement Function (工厂模式)
- The render Function
- Concurrent Mode 并发模式
- fibers 机制 可中断 

## Concurrent Mode 并发模式
 并发模式（Concurrent Mode） 是 React 团队提出的一种 新的渲染机制，旨在让 React 应用具备 更流畅的用户体验 和 更强的响应能力。它不是指“多线程”，而是指 React 能够 在不阻塞主线程的前提下，中断、暂停、恢复或重排渲染任务，从而优先响应用户交互等高优先级操作。
 React 将渲染工作 拆分成小块（chunks）允许高优先级更新（如用户输入）插队。
fiber 结点 工作结点
- 中断
- 继续
- fiber 结点对象有哪些属性