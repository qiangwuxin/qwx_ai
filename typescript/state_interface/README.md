# typescript

- js 的超集
- 类型约束
- ts 在 react 业务中的用法，直接抄作业

  - 子组件+props 的约束
    interface Props{

  }
  :React:FC<Props>

  - 组件 state
    - 单项数据流
    - props callback
    - 函数类型()=>void
    - 参数的类型约定
    - React 对于 ts 原生支持的非常好
      React.FC
      React.ChangeEvent<HTMLInputElement>
