// 统一暴露
let school = "尚硅谷";
function findJob(){
    console.log("我们可以帮助你找工作");
}

export{school, findJob};

// 默认暴露    里面可以放入任何值， 多数情况是对象
export default{
    school:"ATGUIGU",
    change: function(){
        console.log("我们可以改变你");
    }
}