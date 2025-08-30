# vue 中的 hooks

- 你用的 react 是什么的版本？
  react 19
  react 16.8 跨时代的更新 函数式组件，hooks 2019 年
  之前 类组件 component 基类
  也有函数组件 用来做子组件+父组件通过 props 来传递数据 无状态组件
  UI 展示为主 stateless 简单，性能好
  函数组件+useState+useEffect+...hooks 类组件就没有必要了

- 类组件
  和函数组件都有，各司其职

  - 类组件比较固守于类的格式，繁琐
  - this 丢失问题 事件处理
  - 生命周期钩子函数 由 useEffect 副作用代替
  - 开销大些 函数组件结合 Memo,useMemo 更好的性能优化

  - Vue 抄袭了 React
    hooks 函数式编程思想

- vue 和 react 相同点和区别
- ahooks

- hooks 表达总线
  - 什么是 hooks
    能够在不编写 class 的情况下，使用 React 的状态（state）和生命周期等特性。
    Hooks 提供了一种更直观、更灵活的方式来组织和复用组件中的逻辑和响应式业务。
    react 内置的 hooks useState, useEffect 副作用等，挺好用的。
  - 内置的 hooks
    useState(为函数组件添加 “可变化的状态”（如计数器的值、表单输入内容、弹窗的显示 / 隐藏等），当状态变化时，组件会重新渲染以反映最新状态。),
    useEffect(副作用,监听状态变化（通过依赖数组），执行副作用（如数据请求、更新其他状态）,当组件撤销时，清理副作用（如取消订阅、清除定时器等）。),
    useMemo,useCallback(这两个是用于性能优化，同时 React.memo 也可以用于函数式子组件的性能优化，当父组件因为状态的改变而重新渲染时，若其中的改变不影响子组件，那么就会利用上一次编译留下的缓存，不会重新渲染子组件，从而提高性能。但是函数不会留下缓存，所以它需要利用 useCallback 来包裹函数。当进行复杂的计算时，为了避免每次重新渲染时都进行计算，我们可以使用 useMemo 来缓存计算结果。)
    useContext,useReducer(当想要实现状态的全局共享时，利用 useContext.provider 和 useReducer 进行状态的重新生成)，
    useRef（用于创建一个可变的引用对象，常用于获取 DOM 对象）
    useLayoutEffect(useLayoutEffect 是 React Hooks 中的一个函数，它在 DOM 更新后、浏览器绘制前同步执行，适合用于需要读取 DOM 布局并同步更新的场景，以避免视觉闪烁。)
    useImperativeHandle(useImperativeHandle 用于自定义父组件通过 ref 访问子组件时暴露的 “API”，限制子组件向父组件暴露的内容，避免暴露整个组件实例。)
  - 自定义的 hooks
    useTitle,useTodos,useMouse,useRepos
    响应式业务、响应式场景封装到 hooks 目录下，方便复用
    UI 组件也比较干净
  - ahooks(用于 react) 第三方 hooks/vueuse(用于 vue) 库
    useToggle、useRequest(所有的请求 data,loading,error) 我在业务中就经常用
