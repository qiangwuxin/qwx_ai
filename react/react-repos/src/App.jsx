import { 
  useState,
  useEffect,
  Suspense,
  lazy, 
 } from 'react'
// import {
//   getRepos,
//   getReposDetail
//   } from './api/repos'
import {
  
  Routes,
  Route,
  Link,
  Navigate 
} from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'
const RepoList=lazy(()=>import('./pages/RepoList'))

function App() {
    // useEffect(()=>{
    //   // (async()=>{
    //   //   const res=await getRepos('qiangwuxin');
    //   //   console.log(res);
    //   // })()
    //   (async()=>{
    //     const repos=await getRepos('qiangwuxin');
    //     const repo=await getReposDetail('qiangwuxin','qwx_ai');
    //     console.log(repos,repo);
    //   })()
    //   //  return ()=>{
    //   //   console.log('-----')
    //   //  }
    // },[])

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/users/:id/repos" element={<RepoList />}/>
        <Route path="*" element={<Navigate to="/users/qiangwuxin/repos"/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
