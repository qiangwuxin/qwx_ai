//让组件基于事件机制来通信
//事件总线 eventbus
import mitt from 'mitt' //做自定义事件的 
//实例化
export const toastEvents=mitt();

export function showToast(user=0,bell=0,mail=0){
  //任何响应与Toast 通信的地方调用 
  //emit 发布事件，发布者
   toastEvents.emit('show',{user,bell,mail})
}