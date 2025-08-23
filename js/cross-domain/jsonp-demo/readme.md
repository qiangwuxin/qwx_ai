# 封装的JSONP 

- 只能解决GET请求的跨域问题 
   http://localhost:3000/say?callback=biaobaicallback&wd=ilikeyou
- 需要后端配合
     后端的输出方式要加padding
- 不太安全
   全局挂载在了一个show callback 函数 容易被黑客利用