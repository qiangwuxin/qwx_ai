import './App.css'
import HelloComponent from './components/HelloComponent.tsx'
//typescript +react
//大型项目中js可能会有些问题，主要因为弱类型 
//jsx 后缀改成tsx 

//函数进行类型约束
// const HelloComponent=()=>{
//   //没有返回值所以 void 空  期待返回一个ReactNode类型 
//   return 1
// }
function App() {
  // 编译阶段 
  //多了类型声明文件 
  //多写一些代码 类型申明 为代码质量保驾护航 
  let count:number=10;
  const title:string= "hello ts";
  const isDone:boolean=true;
  const list:number[]=[1,2,3];
  //元组类型
  const tuple:[string,number]=["施永乐",18];
  //枚举类型
  enum Status{
     Pending,
     Fullfilled,
     Rejected
  }
  const pStatud:Status=Status.Pending;
  //对象的约束？
  //接口  
  interface User{
     name:string;
     age:number;
     isSingle?:boolean;
  }
  //使用interface 来约定类型
  const user:User={
    name:"小芳",
    age:18,
    isSingle:true
  }
  return (
    <>
     {count}
     {title}
      {user.name} {user.age}
      {/* typescript很严格 */}
      <HelloComponent name="一名"/>
    </>
  )
}

export default App
