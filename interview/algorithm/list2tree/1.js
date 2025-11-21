// 列表项在数据库中怎么储存的？ 比如 省，市，县...
// 树状菜单 场景题 
// id      title parent
// 86      中国   null
// 36      江西   86
// 0793    抚州   36
//11201    临川   0793
//2312     体育路  11201
const sourceList=[
    {
        id:1,
        name:"首页",
        parentId:0
    },
    {
        id:2,
        name:"产品",
        parentId:0
    },{
        id:3,
        name:"手机",
        parentId:2
    },{
        id:4,
        name:"电脑",
        parentId:2
    },{
        id:5,
        name:"折叠屏",
        parentId:3
    }
]

function listToTree(list,parentId){                     // 0 ->  
    const result=[];                                    //       1=> none  返回[item(id:1)]  result push 这个值
    list.forEach(item=>{                                //       2=> item2.children=[item(id:3)]  返回[item(id:4)]
        if(item.parentId===parentId){                   //           3=> item3.children=[item(id:5)]  返回了这个item3
            const children=listToTree(list,item.id);    //              5=> none  返回[item(id:5)]  
            if(children.length>0){                      //           4=> none  返回了[item(id:4)]
                item.children=children;
            }
            result.push(item);
        }
    })
    return result;
}
const tree=listToTree(sourceList,0);
console.log(tree);

