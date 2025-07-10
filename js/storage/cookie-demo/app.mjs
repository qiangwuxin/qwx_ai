//es6 模块化 
//mjs 后缀使用es6模块化
//模块化是一种语言的能力
//node 默认不支持es6模块化
//node 最新版本支持了 22
//node 准备跟require commonjs say goodbye 
//es6 module 更先进 mjs
import http from 'http';

const server=http.createServer((req, res) => {
  // res.end('hello http server');
  //http 基于请求响应的协议 
//路由 Method+url 定位了服务器端的资源
//为了资源 
  if(req.method==='GET'&&
    (req.url==='/'||req.url=='/index.html')){
      console.log(__dirname,path.join(__dirname,'public','index.html'));
    fs.readFile(
      path.join(__dirname,'public','index.html'),
      //异步 callback 
    (err,content)=>{
      //前端体验为主
      //后端稳定为主
      if(err){
        res.writeHead(500);//5XX服务器错误
        res.end('Server error');
        return;
      }
      //返回给服务器端的内容不只是html,css,js,jpg
    res.writeHead(200,{'Content-Type':'text/html' })
      res.end(content);
    })
  }
  //后端路由，暴露资源
  http://localhost:8080/style.css?a=1&b=2
  //协议 http://  localhost 域名 端口  /style.css path queryString
  if(req.method=='GET'&&req.url=='style.css'){
    fs.readFile(
      path.join(__dirname,'public','/style.css'),
      (err,content)=>{
        if(err){
          res.writeHead(500);
          res.end('Server error');
          return ;
        }
        res.writeHead(200,{'Content-Type':'text/css'})
        res.end(content);
      }
    );
    return ;
  }
  if(req.method=='GET'&&req.url=='script.js'){
    fs.readFile(
      path.join(__dirname,'public','/script.js'),
      (err,content)=>{
        if(err){
          res.writeHead(500);
          res.end('Server error');
          return ;
        }
        res.writeHead(200,{'Content-Type':'text/javascript'})
        res.end(content);
      }
    );
    return ;
  }
})
server.listen(1234);