# webworkers

- html5特性
- js 在做复杂、耗费计算性能、时间等任务时，开启多线程。
    浏览器端跑大模型
- js是脆皮 单线程 
      不太适合于计算
     推出了html5的 Web Worker   woker线程
- 端模型是一个趋势
     在电脑、浏览器、手机、植入（下载）大模型


-api 
    new Worker('./worker.js')
    postMessage
    onMessage 

- 复杂任务实例 图片的压缩
     JS 不擅长，要做计算
     把它交给worker 线程 不影响主线程，慢慢做，由浏览器支持做，发个消息通知一下已经做完了