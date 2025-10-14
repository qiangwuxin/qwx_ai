// // 第一种方法 
// const sleep=ms=>new Promise(reslove=>setTimeout(reslove,ms));

// const seq=[
//     {color:"red" , ms:1000},
//     {color:"yellow",ms:3000},
//     {color:"green",ms:2000}
// ]

// async function trafficLight(){
//    while(true){
//      for(const {color,ms} of seq){
//         console.log(color);
//         await sleep(ms);
//      }
//    }
// }
// trafficLight();

// //第二种方法
// const sleep=(color,ms)=>new Promise(resolve=>{
//     console.log(color);
//     setTimeout(resolve,ms);
// })

// function loop(){
//     sleep("Red",1000)
//     .then (()=>sleep("Yellow",3000))
//     .then (()=>sleep("Green",2000))
//     .then(()=>loop());
// }
// loop();

// S使红绿灯暂停
const sleep=(ms,signal)=>new Promise((reslove,reject)=>{
    const timer=setTimeout(reslove,ms);
    if(signal.aborted){
      clearTimeout(timer);
    }
})
const seq=[
    {color:"red" , ms:1000},
    {color:"yellow",ms:3000},
    {color:"green",ms:2000}
]
const statusBox=document.getElementById(status);
let controller=null;
const startBtn=document.getElementById("start");
const stopBtn=document.getElementById("stop");
async function loop(){
    while(!controller.signal.aborted){
     for(const {color,ms} of seq){
        if(controller&&controller.signal.aborted) return ;
        statusBox.textContent=color;
        await sleep(ms,controller.signal);
     }
    }
}
startBtn.addEventListener('click',()=>{
    controller=new AbortController();
    loop();
})
stopBtn.addEventListener('click',()=>{
    if(controller) controller.abort();
})
