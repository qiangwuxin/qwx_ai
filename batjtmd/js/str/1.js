/**
 * @func 反转字符串
 * @param {string} srt 
 * @return string
 */
// function reverseString(srt){
//   //str什么类型？ 字符串 简单数据类型 Primitive 
  
//    return str.split('').reverse('').join('');
// }
//函数表达式

// const reverseString = function(str){
//   return str.split('').reverse().join('');
// }
//es6 箭头函数 简洁 funtion 不要了 用简单的箭头代替 
//{}也省了 只有一句话的时候
//返回值的时候 连return都可以省略
const reverseString = str => str.split('').reverse().join('')
console.log(reverseString('hello'));