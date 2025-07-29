# css 模块化

- Button AnotherButton 按钮组件
  自己写的组件
  别人写的组件
  第三方组件
  冲突
- 唯一的类名
  取名 烦了
  css 模块化的能力
  不会影响外界
  不受外界影响
- style.module.css 模块化
  - react 不把它当做单纯的 css 文件了 react 结合 vite 的唯一 hsah 值 加到原类名上 确保唯一
  - Vue scoped
  - 可读性受影响吗？
    - 读的是源码 依旧是.button
    - 被模块化保护起来了
    - npm run build
- dev/build/test/product
  开发的时候在 dev 代码的可读性在这个阶段
  vite， react.jsx babel preset-react
  style.module.css
  import styles from './style.module.css'
  styles js 对象 css 的每一个类名都可以面向对象访问绑定

npm run build
npm run test 测试一下
aliyun ngnix 跑起来 dist/
