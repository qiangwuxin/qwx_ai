# 深浅拷贝

- Object.assign() 浅拷贝 简单 功能强大

- Object.assign() 是 ES6 新增的用于将一个或多个源对象的**可枚举**属性复制到目标对象并返回目标对象的方法，
常用于对象的浅拷贝或属性合并。
- 返回的是新对象？ 不是新对象，返回的是目标对象（第一个对象）
- 不支持深拷贝
   安全 对象比较深，值也是对象 管他有多深，都能一直拷贝，不会影响源对象
- 怎么支持深拷贝 

- 面试官的想法
- 深拷贝、浅拷贝是必考内容
- 以object.assign()开场 
    - 表演时间 面试是当面展示自己 
    API细节->业务场景(怎么用的)->赋值+引用浅拷贝-> 底层原理

    JSON.parse(JSON.stringify()) 最简单的方法，问题
    不会拷贝函数（不知道怎么序列化），symbol,undefined,循环引用
     勾引对方考察手写深拷贝
    - 赋值和引用的概念 
        简单数据类型和复杂数据类型 内存分配不一样 

- 如何拷贝，看业务
    - 如果是简单数据类型，= 就好，
    - 如果是浅的对象或数组
        Object.assign()
        Array.prototype.slice
        Array.prototype.concat
    - 简单深拷贝 Object.parse(Object.stringify)
          JSON.stringify() 序列化规则
          undefined、function、symbol不是合法的 JSON值
    - 手写实现  高级深拷贝
        - JSON.stringify() 没办法拷贝
        - 拷贝，简单，遍历，复杂
        - 深度，递归
    **手写深拷贝**：

    const target = {
  field1: 1,
  field2: undefined,
  field3: 'hxt',
  field4: {
    child: 'child',
    child2: {
      child2: 'child2'
    }
  },
  field5: [2, 4, 8]
}
target["target"] = target;//循环引用
//es6 新的数据类型hashMap 
function clone(target, map = new WeakMap()) {
  if (typeof target === 'object') {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }

    return cloneTarget;
  } else {
    return target
  }
}
console.log(clone(target));

**手写浅拷贝**：
function shallowCopy (params) {
    // 基本类型直接返回
    if (!params || typeof params !== "object") return params;
​
    // 根据 params 的类型判断是新建一个数组还是对象
    let newObject = Array.isArray(params) ? [] : {};
​
    // 遍历 params 并判断是 params 的属性才拷贝
    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            newObject[key] = params[key];
        }
    }
​
    return newObject;
}
​
let params = { a: 1, b: { c: 1 } }
​
let newObj = shallowCopy(params)
​
// 拷贝对象中---基本类型老死不相往来，引用类型藕断丝连
params.a = 222
params.b.c = 666
console.log(params); // { a: 222, b: { c: 666 } }
console.log(newObj); // { a: 1, b: { c: 666 } }
