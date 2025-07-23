import { useState } from 'react'
import {
 BrowserRouter as Router,//前端路由二选一
 Routes,
 Route,
 Link,//SPA Link代替a
}from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import About from './pages/About'
function App() {
 
  return (
    <>
      <Router>
      <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
      </ul>
    </nav>
      <Routes>
      
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
     
    </>
  )
}

export default App
