需求：

api.github.io/users/qiangwuxin/repos
api.github.io/users/LeeAt67/repos


 - 有一堆的异步任务要执行
 - 每一项是一个是promise
 - Promise.all 本身返回也是一个promise 
 - 启动所有项都成功的解决了，Promise.all才解决
     不然就失败
 - 如果都成功，每个promise结果 会按原promise 的下标存放 
 - Promise.all 是静态方法，不是实例方法 