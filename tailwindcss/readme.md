# tailwindcss 是原子css的鼻祖

- 非常的好用
- 几乎不用写css 
- AI 生成代码css 用的都是tailwindcss
- 配置流程 
     安装了 tailwindcss @vite/tailwindcss   
     在vite.condig.js引入这个插件
     在入口css引入tailwindcss
- 有各种内置的css类名，分门别类
- 1rem=4个单位

- 文字行数限制
    -webkit-line-clamp:2; 不能独自生效
    -webkit 浏览器内核 chrome +safari
    - mozilla 火狐浏览器内核代号
    实验阶段的属性 新的 
    display:-webkit-box;    //实现弹性布局
    -webkit-box-orient: vertical;  //弹性布局的方向，此处为垂直方向上
    overflow:hidden 