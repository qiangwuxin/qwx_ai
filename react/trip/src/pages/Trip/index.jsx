import {
  useEffect,
  useState
} from 'react';
import {
  Button,
  Input,
  Loading,
  Toast,
} from 'react-vant'
import{
  ChatO,
  UserO,
}from '@react-vant/icons';

import useTitle from '@/hooks/useTitle'
import {
  chat
} from '@/llm'
import styles from './trip.module.css';

const Trip = () => {
  useTitle('旅游智能客服')
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);
  //数据驱动界面
  //静态界面
  const [message,setMessage]=useState([
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },{
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
    {
      id:2,
      content:'hello~',
      role:'user'
    },
    {
      id:1,
      content:'hello,I am your assistant~~',
      role:'assistant'
    },
  ]);

  const handleChat = async() => {
      if (text.trim() === ""){
        Toast.info({
          message:'内容不能为空'
        })
        return;
      }
      setIsSending(true)
      setText("");
      setMessage((prev)=>{
        return [
          ...prev,
          {
            content:text,
            role:'user'
          }
        ]
      })
      const newMessage=await chat([{
        role:'user',
        content:text
      }]);
      setMessage((prev)=>{
        return [
          ...prev, 
         newMessage.data
        ]
      })
      setIsSending(false)
  }
  return (
      <div className="flex flex-col h-all">
          <div className={`flex-1 ${styles.chatArea}`}>
          {
            message.map((msg,index)=>(
              <div 
                  key={index}
                  className={
                    msg.role==='user'?
                    styles.messageRight :
                    styles.messageLeft
                  }
              >
                {
                  msg.role==='assistant'?
                  <ChatO />:
                  <UserO/>
                }
                {msg.content}
              </div>
            ))
          }
          </div>
          <div className={`flex ${styles.inputArea}`}>
              <Input
                  value={text}
                  onChange={(e) => setText(e)}
                  placeholder="请输入消息"
                  className={`flex-1 ${styles.input}`}
              />
              <Button disabled={isSending} type="primary" onClick={handleChat} >发送</Button>
          </div>
          {isSending &&  (<div className="fixed-loading"><Loading type="ball"/></div>) }
      </div>
  )
}

export default Trip