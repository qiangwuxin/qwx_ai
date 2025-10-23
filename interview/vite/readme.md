# 工程化


- 哪些问题？工程一览子方案
      - web server 5173 端口  http 模块？ express 框架
         将index.html 作为首页
      - tsx->jsx ->babel转译成为js文件
      - styl->css文件
      .....
      基础，后方工作 
- 怎么介绍vite 不打包
     - 兼容性问题 IE 11以下，不支持
     <script type="module" src="/src/main.jsx"></script> // 基于es6module 实现按需加载
      VITE是一个基于原生ES模块（原生支持import解析，前辈webpack没有模块化，浏览器很多还不支持模块化）
      通过按需便于实现激素冷启动（快）（不需要编译全部文件，只需要编译入口文件依赖的那几个文件，等需要的时候才去编译和下载）与热更新的新一代前端构建工具。

      - 快？
         - 基于原生js模块，不需要打包所有文件，按需加载

      main.jsx入口文件 ，模块的依赖
      main.jsx依赖于->app.jsx->App.css+ react+components+router+api+store 
      整理这些模块之间的依赖关系（链条）

- webpack  
    由于要支持老旧浏览器，不使用ESM，要打包
    a->b->c->d 
    不用模块化
    d 编译js 把它放到最上面
    c编译 放到d下面
    b编译 放到c的下面
    a编译 放到b的下面
    一起打个包，成为一个文件

## webpack 和vite的区别
- index.html里面没有type="module"怕浏览器不支持esm
    整理依赖关系，打包文件，慢
- 适合大型项目，丰富的配置
     - entry ,output 这是核心
     - Plugins
       html-webpack-plugin ->html template 在哪？
     - devServer 
        http server 细节 
    web bundler 打包器 一切静态资源皆可打包 
    vite快，不需要打包，但有兼容性，生态、定制性不如webpack
    webpack打包，慢一点，但是兼容性好，生态丰富，可为大型项目定制，有很长时间的业务验证。