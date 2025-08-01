# jwt 登录鉴权

- isLogin ,user 全局状态 zustand
- mock 登录模拟 - apifox api 请求模拟 不用写页面，就可以发送请求
  curl

- 会话授权

  - 服务器知道我们是谁？
  - http 是无状态的

    - 1.0 版本设置了一个请求头 cookie
    - server 种下一个 cookie 唯一的 sid 值 sid=对应 user
    - 每次请求中 从 cookie 读取到 sid
    - 服务器就知道是我们了

  - 登录和用户鉴权方案 JWT JSON Web TOKEN
    - {id:112,username:'美的惊动党中央',level:4...} user JSON 格式的数据
    - 一种算法 生成一个 hash 串 固定长度 这就是 token
    - token 服务器端令牌
    - 带上 token
    - decode 解码
      解码成{id:112,username:'美的惊动党中央',level:4...}

- jsonwebtoken
  jwt 鉴权的库
  sign 颁发一个 Token user,secret
  decode secret 验证 token user

  - pnpm i jwt
  - import jwt from 'jsonwebtoken'
  - jwt.sign
  - HTTP 请求头 Authorization 带上 token
  - Cookie 每次自动带上
  - token 需要手动设置的

- 加盐
  secret
  传递 token 前面会加上 Bearer ${token} 表示持有者
  通过 http headers Authorization

- 前端的用户权限状态 流程
  - zustand
    是否登录、user useUserStore
  - 登录页面
    受控/非受控组件
  - 路由守卫
  - api/
