# WebLLM

这是一个通用的原生 HTML/CSS/JS 项目。

## 项目结构

```
webllm/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── README.md
```

## 运行项目

1. 将项目文件夹复制到本地服务器目录
2. 打开浏览器访问 `index.html` 文件

## 功能说明

目前项目仅完成初始化，显示欢迎信息。后续可根据需求扩展功能。
## 服务器端返回
 - 输入url 或者点击一个链接（死板）
 - 向服务器端发布请求
 - node/java 根据请求，去数据库取数据，生成html字符串
 - 返回html字符串

 ##fetch请求
 - 滚动到底部后，加载更多数据 web 2.0 富应用体验
   看到新的内容
 - fetch url 
    - 不需要刷新页面，主动去服务器端取一次，DOM编程更新页面
 - 点赞的时候？
    - js fetch api   like



- LLM AI 时代
   fetch 取来大模型的能力 智能前端时代 


## http 请求
  - 请求行 GET http://www.baidu.com
     POST https://api.deepseek.cpm/chat/completions
  - 请求头 
    设置各种头部信息
    {
      Content-Type:application/json
      Authorization:Bearer 1234567 凭证
    }
  - 请求体
    GET 没用请求体
    POST 可以有请求体
    
    