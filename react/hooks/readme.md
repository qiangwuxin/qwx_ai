# react hooks 编程

- useState
  - 非常好用的函数式编程
    函数是一等对象（JS）
    函数还是构造函数（JS 原型式面向对象）
    函数也是组件 return jsx
  - 以 use 开头，函数式编程
- useEffect

  - 副作用

- 生命周期 lifecycle 函数

  - mounted 挂载后 渲染完成
    只在渲染完成后执行，更新后不执行 []依赖项为空数组
  - updated 更新后 []依赖项
  - 卸载后的副作用？ unmounted
    - 定时器等会造成内存泄漏的，要回收，取消
    - 请求数据 卸载时，响应式数据和 DOM 不在了，请求也取消

- 组件应该在什么时候去请求接口呢？
  - 组件的第一时间渲染时最重要的
  - useEffect 去请求接口
    不会和渲染争抢
  - 依赖项为[]
    组件状态发生改变不需要再次请求
    为什么 useEffect 函数不可以直接用 async
  - 再声明一个 async 函数
  - 执行
  - 副作用函数需要返回一个 clean-up 函数 如果直接用会返回 Promise
