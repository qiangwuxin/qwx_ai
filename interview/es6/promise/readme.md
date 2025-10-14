# promise.all 

- MDN 定义
    Promise.all 方法接受一个promise的**iterable** 类型输入 (Array,Map,Set都属于ES6的iterable类型),
    并且只返回一个promise的实例。输入的所有promise的resolve回调结果是一个数组，并按顺序存放。只要输入任何
    一个输入的reject回调执行，就会抛出错误，Promise.all的promise失败，catch执行。reject是第一个抛出的错误。

    如果有promise 子项失败，那么其他还没有完成的promise会继续执行，只不过结果不重要了。

       
- all,race、any、allSettled
  这一组promise上的静态方法，带来了promise的并行
  async await 简单，不需要then的链式调用， 优雅的异步变同步，但也不能乱用，他是串行的。
  如果多个promise值前后有依赖，async await 有优势，但如果没有呢？ promise.all并发更快

  如果有并行的业务需求，all/race/any/allSettled更加适合且高效。

  Promise.all	并行执行多个 Promise，等待全部成功	所有 Promise 成功：返回结果数组；任意一个失败：抛出第一个失败的原因	需要等待多个异步任务全部完成后继续下一步
Promise.any	并行执行多个 Promise，只要有任意一个成功即返回	任一 Promise 成功：返回该成功的结果；全部失败：抛出 AggregateError	仅需确保至少有一个异步任务成功即可
Promise.race	并行执行多个 Promise，返回最先完成的一个的结果（不论成功或失败）	最先完成的 Promise 的结果	实现超时机制或获取最快的响应
Promise.allSettled	并行执行多个 Promise，等待全部完成，不管成功还是失败	返回一个对象数组，每个对象包含状态（fulfilled/rejected）和对应的值或错误信息	需要知道每个 Promise 的最终状态，无论成功与否