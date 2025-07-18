## hooks todos

- 安排个 css 亮点

  - styleus
    css 超集
  - 拥有 vite 脚手架
    stylus 预编译 安装 stylue vite 直接编译
    vite 来自 vue 社区
  - react 组件设计
    - 开发任务单元
    - 设计组件
      界面功能 状态 响应式的
      - 新建 todo 表单
      - 修改 列表
      - 删除
    - 按功能划分 粒度
      - form
      - list 列表
        - Item 组件 维护和**性能**

- 字体
  - 设置多个，设备的支持（本地包含）
  - 苹果设备 -apple-system 前端要负责体验，字体也是美感的一部分
- rem

  - 相对单位
  - 移动端的重要单位 px 不要用了 绝对的
    移动端 宽高不定的 rem（相对于 html font-size） vw/vh(viewport),em 相对单位
    使用相对单位，可以在所有设备上适配
    em 相对于自身的 font-size 等比例

- props 组件通信

  - 传递状态
  - 传递自定义事件
  - 直接解构（如果参数不多）
    const {
    todos,//任务
    onAddTodo//添加..
    }=props 单独解构

- 数据绑定
  - 变量 修改值
  - 数据状态
    - Data binding **数据**绑定 jsx 就是静态的
      {}数据绑定
    - 数据和界面状态的统一
      - 界面是由数据驱动的
      - 数据和界面状态的一致性
    - 响应式的
- vue 和 react 区别

  - vue 好入门，api 好用
  - react 倾向于原生 JS 入门难
    - hooks？
  - <input v-model="text"/> vue 双向绑定
    <input value={text} onChange={()=>setText(text);}/> react 坚持不做双向绑定 单项绑定

- 本地存储

  - localStorage html5
    key:value 存储
    setItem(key,value)
    getItem(key)
    removeItem(key)

  - BOM Browser Object Model
  - DOM Document Object Model

- 本地存储
  -localStorage 和 cookie 有什么异同
  - http 无状态，head cookie 带上
  - cookie 太大，影响 http 性能 4KB
  - cookie 前端后端后可以设置
    过期时间
    domain 隔离
  - localStorage 只在浏览器端
    domain
    todos
    5MB
  - IndexDB 数据库 GB

## 自定义 hooks

    - 自己定义的
    - use
    - 某一项功能
        简单函数的封装
        响应式的状态
        effect
        todos

- 自定义 hooks

  - 现代 react app 的架构一部分
  - hooks 目录
    自定义 hooks
    框架 common 部分
    业务定制 ahooks
  - use 开头
    state,effect 逻辑封装复用
  - return
    todos,
    totoggle,
    addTodos,
    deleteTodos
    函数式编程思想的体现
  - 组件更好地聚焦于模板渲染
  - 全面 hooks 函数式编程

- 两个遗憾
  - ../../路径山路十八弯
    vite 配置 alias 短路径
  - toggle、delete 跨越组件层级有点多，useContext
