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
//浅拷贝
Object.assign(target, source);
target.b.name = '李四';
target.b.hobbies.push('打游戏');
target.c = 4;
console.log(source.b.name, source.b.hobbies, source.c);
