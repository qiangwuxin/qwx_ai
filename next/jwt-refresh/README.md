# next.js 全栈项目

- users & posts 
- jwt 双token 鉴权
- 虚拟列表 
    AI 爬虫 掘金100条数据
- 大文件上传 
- ai 工程化
     流式输出
     function tool
     mcp
- ai 搜索
     

## 双token 
单 token localStorage 长期，第三方拦截 不安全
安全+无感刷新登录
双token 
- accessToken 用来校验身份 重要 时间有效期变短 h为单位 cookie 
      过期怎么办？ 
- refreshToken 刷新 7天 时间长
       没有过期，refreshToken 发到服务器 /api/auth/refresh 
       返回新的accessToken 无感刷新
- refreshToken 过期后，去登录

## 开发流程
- .env
  配置mysql url 
  create database demo; 建立数据库
- prisma 初始化 
  npx prisma init
  orm 工具  
  object relation mapping 
  User(表) => User类
   一行    =>      new User() 实例
   底层的数据库操作 映射成 高级的面向对象操作 
- Prisma Schema 是一个用于定义应用数据模型、数据库连接和生成客户端的配置文件，
它以清晰的领域特定语言（DSL）描述数据表结构、关系及数据库迁移规则。
   数据库的设计图
   比navicat 好的地方，schema+结合git 留下数据库设计和修改的历史
   文档型的，可以追踪。留底

- model 表的映射模型 
@@map("users")  指定模型对应的表名
 posts         Post[]   一对多的关系
 createdAt updatedAt prisma 自动维护
 @id 主键  @unique 唯一索引 
 Model User{
    colums name type @default
    索引
    relation 
 }

  - migration 迁移
      记录 

- restful API
- lib/ 复用的JS模块 
- regexp
    前端，后端都要会正则
    /^.+?[]{}&/  test 
    ^ 开始 $ 结束 ^& 严格匹配整个字符
    . 都匹配 一个字符
    ？ 0次或一次
    + 一次或多次
    [] 范围 
    {} 长度
- bcryptjs 加密js 模块 单向的加密算法（不能被解密）
    register 加密一次
    login password 再加密一次 
    比较的是加密后的串是否一样？ 
- 状态码
    - 200 ok
    - 201 created
    - 400 bad request
    - 401 Forbidden
    - 409 conflict 冲突  用户名重复
    - 500 internal server error  服务器错误

- moddleware 的概念
   中间件  配置一个列表
   /dashboard 
   Middleware 在 Node.js 中用于拦截请求，实现鉴权、日志、错误处理等通用逻辑。
   - 配置一个需要登陆的页面数组
   - some startWith
   - response.next() 放行
   - response.redirect() 跳转

   - 通过jwt 的 verify方法拿到payload后，添加了自定义的请求头
       x-user-id 
       后续页面就可以拿到这个值
       

- JWT 的构成
    - 头部
         签名算法 HS256
    - 载荷 
         {userId:...}
    - 签名
        secretKey

- cookie 
   httpOnly:true,
   HttpOnly 可防止 JavaScript 访问 Cookie，有效抵御 XSS 攻击导致的令牌泄露。
   服务器端设置
   SameSite 可防止跨站请求伪造（CSRF）攻击，限制 Cookie 在跨域请求中的自动发送，提升安全性。

- 后端安全和性能 
    - 一定要做容错处理
        try{}catch{}finally{}
    - 释放数据库对象
- prisma client 的CRUD方法
    prisma.user.create()
    prisma.user.findUnique()
    prisma.user.update({
        where:{},
        data:{}
    })