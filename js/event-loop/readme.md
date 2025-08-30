# event loop

事件循环机制 JS 的执行机制

- JS 单线程
  同一时刻只做一件事
  同步任务尽快执行完，去渲染页面（重绘重排），响应用户的交互（优先）
  耗时性的任务 ？
  - setTimeout/setInterval
  - fetch/ajax
  - eventListener
- script 脚本
  一个宏任务

- 微任务有哪些？
  紧急的，优先的，同步任务执行完后的一个补充
  - promise.then()
  - MutationObserver
    dom 改变在页面渲染前 拿到 DOM 有啥改变
  - queueMicrotask
  - process.nextTick

## 多进程和多线程

- CPU 轮循
- 进程
  分配资源的最小单元
  内存 （地址，物理） CPU 计算的机会
  独立的进程 ID 一定的大小，开销
  程序运行以进程为单位
  - 主进程
    管理子进程 父子关系 并发 并行
    进程间的通信
  - 主线程
    执行 JS 代码...
- 线程
  干活的
- 进程间的通信
  两个独立的进程间的通信开销很大
  负责进程就好点

- chrome 浏览器是多进程架构的

  - 浏览器主进程 管理其他进程、调度，负责统一向 CPU 申请资源
    多线程的架构
  - 一个 tab 就是一个渲染进程
    多线程 
    几个 tab 几个进程
    安全、一个页面 crash 了，别的不受影响
  - 主线程 主角 
    js 单线程 （渲染进程管）

    - 简单
    - DOM 编程模型 线程的争抢不可以 安全

  - setTimeout 专属定时器线程
    到时间了，callback 放入宏任务队列
    放到 event LOOP 中 队列中
    event loop 机制
    为什么 setTimeout 不准
    宏任务，微任务 队列
  - addEventListener 没有独立的线程
    DOM 不需要 宏任务队列
  - fetch/xhr 专属的下载线程

- 渲染进程的主线程

  - 解析 HTML->DOM 树
  - 解析 css->cssOM
  - 结合渲染树
  - layout 树
  - 合并图层
  - V8 引擎 JS 执行
  - 独立的绘制线程

- 事件队列？

  - 定时器到点了
  - onreadystatechange 4
  - 微任务队列
  - 宏任务队列

- 页面渲染

JS 和 渲染是互斥的
