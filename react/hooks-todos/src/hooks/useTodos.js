import{
  useState,
  useEffect
}from 'react';

export const useTodos=()=>{
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  useEffect(()=>{
    // console.log('der');
    //接受字符串,
    localStorage.setItem('todos',JSON.stringify(todos));
  },[todos])
  // 新增todo
  const addTodo=(text)=>{
    //setTodo
    //数据状态是对象的时候
    setTodos([
      ...todos,
      {
        id:Date.now(),
        title:text,
        isComplete:false
      }
    ])
    }
    const onToggle=(id)=>{
      console.log(id);
  
      //todos 数组找到id为id,isComplete !iscomplete
      //响应式?返回一个全新的todos 
      setTodos(todos.map(todo => todo.id === id 
        ? {...todo, isComplete: !todo.isComplete}  // 注意这里用冒号
        : todo
      ))
      
      
    }
    const onDelete=(id)=>{
      setTodos(todos.filter(todo=>todo.id!==id));
    }
    
  return {
    todos,
    setTodos,
    addTodo,
    onDelete,
    onToggle
  }
}
