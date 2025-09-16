// js 弱类型，容易出问题 
//给js带来类型的约束
//ts是微软 想让java工程师写前端 
// react+ts 是开发的标配
//自定义类型
//在java和c++ 都有interface关键字
interface UserDemo{
    name:string;
    age:number;
}
//相同点，都可以申明自定义类型
type UserType={
    name:string;
    age:number;
}

const u1:UserDemo={name:'Alice',age:20};
const u2:UserType={name:'Bob',age:21};