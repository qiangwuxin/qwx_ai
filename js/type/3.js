//独一无二的值
const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol('desc');//label标签
console.log(typeof sym, sym);
console.log(sym1 === sym);
//symbol可以用于对象的key
//使用Symbol 构造函数实例化，标记为id 的唯一值ID
//ID 唯一性，Symbol
const ID = Symbol('id');
//es6 之前 key string
//symbol作为key
const sex = '男';
const age = Symbol();
const user = {
  name: 'Alice',
  age: 18,
  [age]: 3,
  // [sex]: '男',
  //key是独一无二的
  //当我们在大厂，如果我们要去修改别人的代码中的对象
  //对象动态的 不希望出错，
  [ID]: 123
}
//console.log(user.name, user[ID], user.age, user[age]);
//面向对象私有属性的概念？
//对象的隐私，内部需要，不希望外界调用的
for (let key in user) {//遍历对象
  console.log(key, user[key], '---------');
}