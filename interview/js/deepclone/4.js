const target = {
  a: 1
}
const source = {
  //对象的嵌套
  b: {
    name: '张三',
    hobbies: ['吃饭', '睡觉', '打豆豆']
  },
  c: 3
}
const newObj = JSON.parse(JSON.stringify(source));
console.log(newObj);
newObj.b.name = 'lisi';
newObj.c = 2;
console.log(source);