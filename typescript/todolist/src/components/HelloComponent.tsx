import React from 'react'
//如何约束函数的返回值为ReactNode? JSX
// FC==FunctionComponent 
//如何约定自己需要一个name的props
interface Props{
  name:string;
}
//typescript 类型约束，重要的地方，一定要类型约束
// 函数中，参数和返回值重要 
// 泛型  泛指内部的类型
const HelloComponent:React.FC<Props>=(props:Props)=>{
  // const {name}=props 
    return (
      <h2>Hello user:{props.name}</h2>
    )
}
export default HelloComponent;