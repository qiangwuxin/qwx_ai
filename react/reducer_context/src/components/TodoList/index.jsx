import{
useTodoContext,
}from '../../hooks/useTodoContext'
const TodoList = ()=>{
  const {
    todos,
    toggleTodo,
    removeTodo
  }=useTodoContext();
  return(
    <ul>
    {
      todos.map(todo=>(
        <li key={todo.id}>
          <span
          onClick={()=>toggleTodo(todo.id)}
          style={{textDecoration:todo.done?'line-through':'none'}}
          >
            {todo.text}
            <button onClick={()=>removeTodo(todo.id)}>remove</button>
          </span>
        </li>
      ))
    }
    </ul>
  )
}
export default TodoList;