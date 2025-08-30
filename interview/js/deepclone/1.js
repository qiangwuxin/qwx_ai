// 有两个容器，盒子A放有钥匙，钱包
// 盒子B放有手机，充电宝

const target = { a: 1 };
const source = { b: 2 };
const source2 = { c: 3 };
// Object.assign() 是 ES6 新增的用于将一个或多个源对象的**可枚举**属性复制到目标对象并返回目标对象的方法，
// 常用于对象的浅拷贝或属性合并。
const result = Object.assign(target, source);
console.log(result, target);
result.a = 11;
console.log(result, target);