const arr=new Array(5);
// console.log(arr[0]);
let obj={
  name:'葫芦娃',
}
let obj2={
  skill:'喷火',
}
obj.__proto__=obj2;
console.log(obj.skill);
for(let key in obj){
  console.log(key);
}
console.log(
  arr.hasOwnProperty(0),
  obj.hasOwnProperty('name'),
  obj.hasOwnProperty('skill')
)