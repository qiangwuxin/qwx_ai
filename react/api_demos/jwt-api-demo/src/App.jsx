import { 
  useState,
  useEffect
 } from 'react'
import './App.css'
import {
  getTodos,
  getRepos
} from '@/api/index'

function App() {
  const [todos, setTodos] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
    
        // const res = await getTodos();
        // console.log(res.data); 
        // setTodos(res.data.data); 
       const reposResult=await getRepos();
       setRepos(reposResult.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {/* {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
        </div>
      ))} */}
      {
        repos.map(repo=>(
          <div key={repo.id}>
            {repo.title}
            {repo.description}
          </div>
        ))
      }
    </>
  );
}

export default App;