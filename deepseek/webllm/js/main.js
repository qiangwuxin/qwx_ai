document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');
    app.innerHTML = '<p>项目初始化完成！</p>';
});
//js主动的去拉取http 接口
fetch('https://api.github.com/users/shunwuyu/repos')
 .then(res=>res.json())
 .then(data=>{
    console.log(data);
 })