// reduce []=>1项 
// 多维数组 => 一项一维数组
// reduce 方法把数组合并为一个值
const flatten=arr=>
    arr.reduce((acc,cur)=>
    acc.concat(Array.isArray(cur)?flatten(cur):cur),[])