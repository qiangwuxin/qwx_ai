import {
  useRef
}from 'react'
import{
  useUserStore,
}from'../../store/user'
import{
  useNavigate,
}from'react-router-dom'

const Login=()=>{
  const navigate=useNavigate();
  const usernameRef=useRef();
  const passwordRef=useRef();
  const {Login}=useUserStore();
  const handleLogin=(e)=>{
    e.preventDefault();
    const username=usernameRef.current.value;
    const password=passwordRef.current.value;
    if(!username||!password){
      alert('请输入用户名和密码');
      return;
    }
     Login({username,password});
    setTimeout(()=>{
      navigate('/')
    },1000)
  }
  return(
    <>
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="username">Username</label>
        <input 
        ref={usernameRef} 
        type="text" 
        id="username"
        placeholder='请输入用户名'
         required/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
        ref={passwordRef} 
        type="password" 
        id="password" 
        placeholder='请输入密码'
        required/>
       </div>
       <div>
        <button type="submit">Login</button>
       </div>
    </form>
    </>
  )
}
export default Login;