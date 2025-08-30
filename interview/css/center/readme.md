# 居中

研究对手

- 听清什么居中
  - 水平垂直居中
- 方式不是关键，区别和优劣

  - 水平居中 text-align:center
  - 单行文本垂直居中 line-hight=height padding(上下的 padding 都设为相同)
  - 固定宽高块级盒子水平垂直居中 1.absolute +margin 赋值 margin-top: -高度的一半、margin-left: -宽度的一半
    top、left 都设为 50%，
    缺点是需要知道盒子的宽高
    2.absolute + margin auto (重要)+t0 b0 l0 r0
    3.absolute + calc (css 中 calc 计算函数) 父元素的 50%-自身宽高的一半 缺点是性能差，很少用

  - 不固定宽高块级盒子水平垂直居中
    1.absolute+transform 相对自身大小的百分比 left:50% top:50% transform:translate(-50%,-50%)  
    2.line-height+vertical-align 3. writing-mode 父元素设置 writing-mode:horizontal-tb,text-align:center 子元素设置 writing-mode:horizontal-tb,display:inline-block
    4.table-cell 父元素设置为 display:table-cell,vertical-align:middle,text-align:center 子元素设置为 display:inline-block
    5.flex 父元素设置为 display:flex,justify-content:center,align-items:center
    6.grid 父元素设置为 display:grid,place-items:center
