import axios from 'axios';
axios.defaults.baseURL='http://localhost:5173/api'
//interceptors 拦截器 
axios.interceptors.request.use(config=>{
  // console.log('////');
  let token=localStorage.getItem('token')||"";
  if(token){
  config.headers.Authorization=`Bearer ${token}`;
  }
  // config.headers.Authorization=token;
  return config;
})
axios.interceptors.response.use(res=>{
  console.log('||||'); 
  return res;
})
export default axios;
