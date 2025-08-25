//不是JS单线程
//worker 线程 复杂或耗性能的计算
//这个能力来自于浏览器 
//js还是单线程，只不过在复杂计算的适合用worker线程 
//不可以用document,this不是原来的this了
//线程简单通信，消息机制
// console.log(this);
// console.log(this, document.getElementById('box'));
self.onmessage = function (e) {
  console.log(e.data);
  self.postMessage('hello from worker');
}