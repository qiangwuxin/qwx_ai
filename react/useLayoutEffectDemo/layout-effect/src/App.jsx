import { 
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
 } from 'react'

import './App.css'

// function App() {
//   //响应式对象
//   const boxRef=useRef();
//   // console.log(boxRef.current,boxRef);

//   useEffect(()=>{
//      console.log('useEffect height',boxRef.current.offsetHeight);
//   },[])

//   useLayoutEffect(()=>{
//     console.log('useLayoutEffect height',boxRef.current.offsetHeight);
//   },[])
//   return (
//     <>
//       <div ref={boxRef} style={{height:100}}></div>
//     </>
//   )
// }
// function App(){
//   const[content,setContent]=useState('理解布局触发时机，是优化页面性能的关键。');
//   const ref=useRef();
//   // useEffect(()=>{
//   //   setContent('避免在JavaScript同步代码中穿插读写布局属性');
//   //  ref.current.style.height='200px';
//   // },[])
//   useLayoutEffect(()=>{
//     //阻塞渲染 同步的感觉 但其实不是 在layout后面在渲染前面
//     setContent('避免在JavaScript同步代码中穿插读写布局属性');
//      ref.current.style.height='200px';
//   },[])
//   return (
//     <div ref={ref} style={{height:'50px',background:'lightblue'}}>{content}</div>
//   )

  
// }
//弹窗
function Modal(){
 const ref=useRef();//响应式对象
 useLayoutEffect(()=>{
 const height=ref.current.offsetHeight;
 ref.current.style.marginTop=`${(window.innerHeight-height)/2}px`
 },[]);
 return <div ref={ref} style={{background:'red',position:'absolute',height:'200px',width:'200px'}}>我是弹窗</div>
}
function App(){
  return(
    <>
    <Modal />
    </>
  )
}
export default App
