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
const RepoDetail=lazy(()=>import('./pages/RepoDetail'))
const Home=lazy(()=>import('./pages/Home'))
const NotFound=lazy(()=>import('./pages/NotFound'))
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
        <Route path="/" element={<Home />}/>
        <Route path="/users/:id/repos" element={<RepoList />}/>
        <Route path="/users/:id/repos/:repoId" element={<RepoDetail />}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
