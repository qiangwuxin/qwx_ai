//VNode VDOM 
function createElement(type,props,...children){
    // 参数的抽象 VDOM 树状结构来定义的 
    // 递归思想
    return {
        type,
        props:{
            ...props,
            children:children.map(child =>
                typeof child==="object"
                ? child
                //文本节点是叶子结点 
                :createTextElement(child)         
              )
        }
    }
}
function render(element,container){
    //不考虑组件
    const dom=element.type=='TEXT_ELEMENT'
       ? document.createTextNode("")
       :document.createElement(element.type)

    const isProperty=key=>key!=="children";

    Object.keys(element.props)
        .filter(isProperty)
        .forEach(name=>{
            dom[name]=element.props[name];//setAttribute 简写
        })
    element.props.children.forEach(child=>
        render(child,dom)
    )

    container.appendChild(dom);
}
//namespace 
const Didact={
    createElement, //生成VDOM ，一次生成 内存中
    render // 真实DOM并挂载

}
// babel给的
const element=Didact.createElement(
    'div',
    {id:'foo'},
    Didact.createElement("a",null,"bar"),
    Didact.createElement("b")
)
//略显复杂
function createTextElement(text){
    return{
        type:'TEXT_ELEMENT',
        props:{
            nodeValue:text,
            children:[]
        }
    }
}
console.log(element)
Didact.render(element,document.getElementById('root'))