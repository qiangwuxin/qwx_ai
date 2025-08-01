const TodoItem=(props)=>{
  const{
    id,
    title,
    isComplete,
    
  }=props.todo;
  const {onToggle,onDelete}=props;
  
  return(
    <div className="todo-item">
      <input type="checkbox" checked={isComplete} onChange={onToggle}/>
    <span className={isComplete? 'completed':''}>{title}</span>
    <button onClick={onDelete}>Delete</button>
    </div>
  )
}
export default TodoItem;
