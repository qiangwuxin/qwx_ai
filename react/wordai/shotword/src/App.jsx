import { useState } from 'react'

import './App.css'
import PictureCard from './components/PictureCard/index.jsx';
function App() {
    //JSX react 优势 方便写Html模板 

  return (
  
    <div className="container">
      {/* 自定义组件 子组件  */}
      {/* 组件 html,css,js 沙子一样，组合起来，图片上传功能
      模块化了，复用，页面由DOM树->组件树 */}
      <PictureCard />
    </div>
  )
}

export default App
