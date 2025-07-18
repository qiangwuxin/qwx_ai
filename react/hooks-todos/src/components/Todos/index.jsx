import{
  //响应式状态hooks
  useState, 
  useEffect, //react  函数式编程 好用的以use开头的函数
}from 'react';
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import {useTodos} from '@/hooks/useTodos'
const Todos=()=>{
  // 数据流管理
  //父组件持有管理数据 props 传递数据 子组件通过props自定义函数 通知父组件
 const{
  todos,
  addTodo,
  onToggle,
  onDelete,
 }=useTodos();
  
   

  return(
    <div className="app">
      Todos
      {/* 自定义事件 */}
      <TodoForm 
      onAddTodo={addTodo}
      />
      <TodoList 
      todos={todos}
      onToggle={onToggle}
      onDelete={onDelete}
      />
    </div>
  )
}
export default Todos