# html5 王者对象 Blob

- 图片转成 base64 字符串编码
- atob(base64) 获得二进制的字符串编码
- for 每一个字符
  调用 chatCodeAt() 0-255 8 byte 的整数
  Unit8Array()
- 二进制文件对象描述 new Blob([unit8Array],类型)
- 二进制层面上去压缩，切割，修改
  浏览器将会为二进制对象提供一个临时访问的地址
- URL.createObjectURL(blob)方法
