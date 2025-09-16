# type 和 interface

- 相同点
  都可以用来申明类型，自定义类型

- 区别：
    当我们要编写继承类的时候，interface只要extends就好
    type 使用的是& 并集

- interface支持多次声明，合并
  type不可以

- type 可以用于定义基础类型、联合类型、元组等，
     interface只能描述对象结构（函数，类）

- type支持简单类型的别名，interface不可以

- interface和type在声明函数类型上有区别