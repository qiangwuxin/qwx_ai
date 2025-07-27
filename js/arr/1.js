//{} key:value  o(1) HashMap Map
//对象字面量：第一种重要且常用的数据结构 
//数组：第二种重要且常用的数据结构 链表、队列、栈
//其他语言有长度的限定、类型 
//JS可以限定，但是不受约束，可以动态自动扩容
const arr=[1,2,3];
const arr2=new Array(5).fill(undefined);
console.log(arr2);
arr2[8]=undefined;
//方便计算偏移量（为什么下标从0开始）
console.log(arr2);
for(let key in arr2){
  console.log(key,arr2[key]);
}
for(let item of arr2){
  console.log(item);
}