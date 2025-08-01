import{
  useTodosStore
}from '../../store/todos'

const TodoList=()=>{
  const {
    todos,
    addTodo,
    removeTodo
  }=useTodosStore();

  return(
    <div>
      <ul>
        {todos.map((todo)=>(
          <li key={todo.id}>
            {todo.text}
            <button onClick={()=>deleteTodo(todo.id)}>删除</button>
          </li>
        ))}
      </ul>
      </div>
  )
}
export default TodoList;