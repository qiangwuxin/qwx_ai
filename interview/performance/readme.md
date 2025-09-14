## 性能优化

## 重绘重排

- 重绘
    当元素样式改变但不影响布局时，浏览器重新绘制元素的过程。比如改变颜色、背景等。
- 重排
    DOM元素的尺寸、位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程。
    重排一定会触发重绘（性能开销更大），重绘不一定会触发重排。

### DEMO 1 批量修改DOM 
```js
// 不对 多次操作可能触发多次重排重绘
//虽然现代浏览器会合并修改，优化
//但是可以避免
const el=document.getElementById("myEl")
el.style.width="100px"
el.style.height="100px"
el.style.margin="10px"
//good 
el.style.cssText='Width:100px;height:100px;margin:10px';//css 的批量处理
el.className='my-class' //用类名而不是一堆的js代码
```

### 使用文档碎片
```
const fragment=document.createDocumentFragment();
for(let i=0;i<10;i++){
    const el=document.createElement('div');
    fragment.appendChild(el);//没有重绘重排
}
document.body.appendChild(fragment);
//批量添加元素时，使用document.createDocumentFragment()优化
```

### 脱离文档流进行操作 下线
```js
const el=document.getElementById('myEl');
el.style.position='absolute';
el.style.display='none';
... 进行大量DOM 操作

el.style.display='block';
el.style.position='static';
```

## 缓存布局信息

```js
//offsetTop 读取，每次都会触发重排以获得盒子的布局信息  
for(let i=0;i<100;i++){
    el.style.top=el.offsetTop+1+'px'
}

let top=el.offsetTop;//缓存了布局信息
for(let i=0;i<100;i++){
    top++;
    el.style.top=top+'px';
}
```

### 使用transform 代替位置调整
```js
 el.style.left='100px'
 //只触发重绘，性能更好
 el.style.transform='translateX(100px)'
```



## 资源的加载优化
    - 图片懒加载
    - 路由懒加载
           代码文件上，code spliting 代码分割
    - 资源预加载
     未来可能会用到的资源
        <link rel="prefetch" href="/next-pahe.js">
        dns prefetch dns 预解析
        preload  当前页面必须资源，立即加载
    - script 资源的加载
       默认没有
        async 并发
        defer
        module //功能
    - webp 格式图片
       图片的优化 相同清晰度但是体积更小 有利于页面的加载 显著的减少体积，质量并不受影响
    - 图标字体库
     减少http请求数

## JS执行优化 
    - 防抖节流
    - web workers 处理复杂计算
    - requestAnimationFrame 优化动画
    - requestIdleCallback react fiber 机制 
        schedule 机制


## 框架层优化
    - memo.useMemo,useCallback 避免不必要的渲染
    - shadcn-ui 按需加载组件库
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
       Expires(客户端时间不准确)/Canche-control  不发送请求
       LastModified if-modified-since 时间戳  304
       ETag if-none-match 
    - localStorage/sessionStorage/Cookie
## 网络优化
   - CDN加速 
     静态资源，分流，会缓存文件
     多路复用 多域名服务器 img1.baidu.com img2.baidu.com 
   - Gzip 压缩 
   - HTTP/2 多路复用
   - DNS预解析

## 首屏优化
    - SSR 服务器端渲染
        组件渲染在服务器端已经完成编译、执行，浏览器端直接显示就好
    -骨架屏
    - http 2.0 server push 首屏数据推送

## 性能测试
- chrome 的performance面板 
     可以看到各项性能指标，针对性的优化，给出优化建议

    - 减少首屏JS/CSS 体积（ code spliting）
    Code Splitting（代码分割）就是把打包后的大型 JavaScript 文件拆分成多个小块，按需加载，从而提升页面初始加载速度。
    - 使用transform 代替位置调整，预加载相关资源
     juejin js=(vue + vue-router ) +App.vue +Home.vue + Components
     vue +vue-router 单独拆分 为了更好利用强缓存 这两个基本上不会变
     APP.vue +home.vue + Components 业务代码 经常改， 单独拆分
     做了一次业务升级 

- lighthouse 
    是chrome的一款性能打分插件，会在性能、无障碍、最佳实践、SEO 打分
    并给出问题和优化建议，非常细致。
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽请求
  

## 性能的关键指标
- FCP First Contentful Paint 
    FCP（首次内容绘制）是指浏览器首次渲染出页面内容（如文本、图片等）的时间，用于衡量用户感知的加载速度。
- LCP Largest Contentful Paint
    最大内容绘制 Largest Contentful Paint（LCP）是衡量页面中最大可见内容元素（如图片、文本块）渲染完成的时间，反映用户感知的关键加载体验。