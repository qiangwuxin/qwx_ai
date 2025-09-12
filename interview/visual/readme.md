# 数据可视化

- echarts 
    老板、客户看的数据报表
    开源的用于绘制树状图、饼状图等的可视化库
- @types/echarts 
    echarts的类型声明文件，单独的 
    为什么react不需要单独安装类型声明文件
    react 是用ts写出来的，所以react的类型声明文件是内置的
    echarts 原生js 和类型声明文件是分开的 

- 直观看出数据的价值
    echarts 2D
    three.js 3D
    数据可视化 

- echarts 流程
   - 安装echarts,@types/echarts
   - init 实例化 
       要传给他一个图表DOM挂载点
       useRef<HTMLDivElement>(null)
       null|HTMLDivElement
       联合类型 useRef可变对象 
    - setOption(option)
        series 数据条目