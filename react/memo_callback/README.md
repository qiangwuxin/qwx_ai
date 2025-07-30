# 性能优化 hook

- 父子组件渲染顺序 - 执行的时候先外到内 组件树 - 完成渲染 完成组件的的挂载 先内到外
- Button 组件该不该重新渲染？
  - 父组件的局部，count 改变和 button 组件没有关系
    Button JSX 不重新渲染 会省下重绘重排
  - 性能优化
    响应式和性能 非常好
    切分组件 热更新
    组件之间独立
    子组件 React.memo()
    createContext useContext 所有状态全部给一个 Context 好吗？
    不好，性能 所有的状态都是通过一个 reducer 生成
- 组件划分的粒度
  - 组件拆分 单向数据流
  - 那些就负责渲染的子组件(props+jsx)
  - 复用，好管理之外 提升性能
  - 状态更新之后组件函数要重新运行
  - useCallback+Rect.memo
