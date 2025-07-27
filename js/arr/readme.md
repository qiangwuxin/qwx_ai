# Array 的高级考点？

- 怎么认识数组？
  - 可遍历的对象
- new Array(5)
  类似于 c++,固定大小的分配 v8 引擎对 arr 设计
  - 灵活地扩展，不限类型，还有 hash 的特性（比如可以用 for key in 遍历它）
  - empty\*5 key 没有释放 for key in 不可以迭代
  - new Array(5).fill(undefined) 统一
- []数组字面量
  ['宗富丽','宗继昌','宗荣荣','宗成成',...arr]
- 静态方法
  - Array.of(1，2，3) // 已经有了数据
  - Array.from() //转换，（类数组，填充计算）
