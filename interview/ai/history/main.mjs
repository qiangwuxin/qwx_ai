import OpenAI from 'openai';
import {
    config
}from 'dotenv';
config();
// console.log(process.env.OPENAI_API_KEY);
const client=new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
    baseURL:process.env.OPENAI_BASE_URL
});

let summary="用户的基本信息";
const messages=[];

async function smartChat(userInput){
    
    if(messages.length>10){
        const sumRes=await client.chat.completions.create({
            model:"gpt-3.5-turbo",
            messages:[
                {
                    role:"system",
                    content:"请总结一下对话的关键信息"
                },
                ...messages
            ]
        });
        summary+=sumRes.choices[0].message.content;
        messages.splice(0,messages.length);//清空老会话
    }
    messages.push({
        role:'user',
        content:userInput
    });
    const res=await client.chat.completions.create({
        model:'gpt-3.5-turbo',
        messages:[
            {
                role:"system",
                content:`你是一个主教，这是目前的总结:${summary}`
            },
            ...messages
        ]
    });
    const reply=res.choices[0].message.content;
    messages.push({
        role:'assistant',
        content:reply
    });
    console.log("AI 回复:",reply);
}