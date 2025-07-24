import { 
  useState,
  Suspense,
  lazy  //react中用于懒加载的
 } from 'react'
import{
  BrowserRouter as Router,
 Routes,
 Route
} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
//函数 路由->route
//新的组件 
const Home=lazy(()=>import('./pages/Home'))
const About=lazy(()=>import('./pages/About'))
const NotFound=lazy(()=>import('./pages/NotFound'))
const Login=lazy(()=>import('./pages/Login'))
import ProtectRoute from './pages/ProtectRoute'
import Pay from './pages/Pay'
// import Home from './pages/Home'
// import About from './pages/About'
//30几个页面
function App() {
   

  return (
    <>
     <Router>
      <Navigation />
      <Suspense fallback={<div>加载中...</div>}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/Login" element={<Login />}/>
        {/* 鉴权 */}
        <Route path="/pay" element={
          <ProtectRoute>
            {/* <Pay /> */}
            <div>123</div>
            <div>456</div>
            </ProtectRoute>
          }/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
      </Suspense>
      </Router>
    </>
  )
}

export default App
