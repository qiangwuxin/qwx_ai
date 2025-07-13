// 多个直接输出
export const generateAudio=async(text)=>{
  const token=import.meta.VITE_AUDIO_ACCESS_TOKEN;
  const appId =import.meta.env.VITE_AUDIO_APP_ID;
  const clusterId=import.meta.env.VITE_AUDIO_CLUSTER_ID;
  const voiceName=import.meta.env.VITE_AUDIO_VOICE_NAME;
  const payload={
    app:{
      appid:appId,
      token,
      cluster:clisterId,
    },
    user:{
      uid:'brear'
    },
    audio:{
      voice_type:voiceName,
      encoding:'ogg_opus',
      compression_rate: 1,
      rate: 24000,
      speed_ratio: 1.0,
      volume_ratio: 1.0,
      pitch_ratio: 1.0,
      emotion: 'happy',
    },
    request: {
      reqid: Math.random().toString(36).substring(7),
      text,
      text_type: 'plain',
      operation: 'query',
      silence_duration: '125',
      with_frontend: '1',
      frontend_type: 'unitTson',
      pure_english_opt: '1',
  },
  }
  const endpoint="/tts/api/v1/tts";
  const headers={
    "Content-Type":"application/json",
    Authorization:`Bearer ${token}`,//AI_KEY 是环境变量，需要在.env文件中配置
  }
  const res=await fetch(endpoint,{
    
  })
}