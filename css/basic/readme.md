#css 基础

- 一个属性与值的键值对称为申明 declaration
- 一个申明块{}中可以包含多个申明
- 选择器 申明块作用的选择器选择的对应元素
- ruleset 多个
- css 层叠样式表

## css 选择器

- 相邻兄弟选择器 紧挨着
  ~ 选择所有位于 h1 之后的 p 元素
  通用兄弟选择器，选后续同级元素
  伪类选择器 状态
  CSS 伪类用于定义元素特殊状态，如：hover、:active 等。

//序号
结构伪类
.container p:nth-child(3)

.container 里面的第三个 p 元素
.containerp:nth-of-type(3)
