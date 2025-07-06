import { useState,useRef } from 'react'

import './App.css'

function App() {
  //配置
  const {VITE_TOKEN,VITE_APP_ID,VITE_CLUSTER_ID}=import.meta.env
  console.log(VITE_TOKEN,VITE_APP_ID,VITE_CLUSTER_ID,'////');
  const [prompt,setPrompt]=useState('大家好');
  //状态 ready,waiting,done 界面由数据状态驱动
  const [status,setStatus]=useState('ready');
  //DOM 对象绑定 use开头的都叫hooks 函数
  const audioRef=useRef(null);

//去调用火山的接口 返回语音
  const generateAudio=()=>{
  const voiceName="zh_male_sunwukong_mars_bigtts";
  const endpoint="/tts/api/v1/tts";//api地址

  const headers={
    'Content-Type':'application/json',
    Authorization:`Bearer ${VITE_TOKEN}`
  }
  //post 请求体
  const payload={
    app:{
      appid:VITE_APP_ID,
      token:VITE_TOKEN,
      cluster:VITE_CLUSTER_ID
    },
   user:{
    uid:'bearbobo'
   },
   audio:{
    voice_type:voiceName,
    encoding:'ogg_opus',
    compression_rate:1,//编码
    rate:24000,//压缩的比例
    speed_ratio:1.0,
    volume_ratio:1.0,
    pitch_ratio:1.0,
    emotion:'happy'
     },
     request:{
      reqid:Math.random().toString(36).substring(7),
      text:prompt,
      text_type:'plain',
      operation:'query',
      silence_duration:'125',
      with_frontend:'1',
      frontend_type:'unitTson',
      pure_english_opt:'1',
     }
  }
  fetch(
    endpoint,
    {
      method:'POST',
      headers:headers,
      body:JSON.stringify(payload)
    }
  ).then(res=>res.json())
  .then(data=>{
    console.log(data,'/////////')
  })
  }
  return (
    <div className="container">
      <div>
        <label>Prompt</label>
        <button onClick={generateAudio}>Generate & Play</button>
        <textarea 
         className="input" 
         value={prompt} 
         onChange={(e)=>setPrompt(e.target.value)}
         />
      </div>
     <div className="out"> 
      <div>{status}</div>
      <audio ref={audioRef}/>
     </div>
    </div>
  )
}

export default App
