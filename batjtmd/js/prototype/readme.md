# 原型
- ooP 机制 Object Oriented Programming 
- 封装、**继承**、多态、接口

## JS OOP
- 对象字面量 一堆一样的对象创建麻烦
- 类的概念，没有class关键字
- 构造函数不能省
- 赋予函数新的使命，身兼两职
   类+构造函数 

## JS 面向对象更强大，它是原型式的
- 任何对象 默认指向object  
- __proto__
  任何对象都有这个私有属性，对象和构造函数和类之间没有什么血缘关系（代孕）


- JS 本没有类
 只不过用function大写 来表示类，
- JS的对象和类，构造函数 没用血缘关系
  __proto__ 指向构造函数的prototype对象
  __proto__ 指向任何对象
  - 不指默认Object
  - 原型对象、原型链
  - 类是大写的函数
  - 实例通过new 出来的对象
  - 任何函数都有prototype属性，值就是构造函数的原型属性

##new的过程
new->{}->constructor运行->this->{}->完成了构造
->__proto__->constructor.prototype->Object 原型链
->null 终点

当使用 new 调用构造函数时，会发生以下步骤：
function _new(constructor, ...args) {
  // 1. 创建一个空对象
  const obj = {};
  
  // 2. 将构造函数的this指向这个空对象
  // 3. 执行构造函数中的代码
  constructor.apply(obj, args);
  
  // 4. 将空对象的隐式原型指向构造函数的原型
  obj.__proto__ = constructor.prototype;
  
  // 5. 返回这个对象
  return obj;
}

// 实际使用
const car = _new(Car, 'blue');

