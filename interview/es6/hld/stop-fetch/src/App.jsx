import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // 用useRef存储controller，确保跨渲染周期使用同一个实例
  const controllerRef = useRef(null);

  useEffect(() => {
    // 创建新的控制器实例并存储到ref中
    controllerRef.current = new AbortController();
    
    fetch('http://localhost:5173/api/banners', {
      signal: controllerRef.current.signal // 使用ref中的信号
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

    // 组件卸载时中止请求（清理副作用）
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  const stop = () => {
    // 从ref中获取控制器并中止请求
    if (controllerRef.current) {
      controllerRef.current.abort();
    }
  };

  return (
    <>
      <button onClick={stop}>暂停</button>
    </>
  );
}

export default App;
