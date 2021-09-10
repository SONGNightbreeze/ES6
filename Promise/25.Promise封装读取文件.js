// 读取resources里面为学.md，在控制台作为一个输出

// 1. 引入 fs 模块
const fs = require("fs");

// 2. 调用方法读取文件     
// 第二个参数是回调函数, err是错误对象如果出错是错误对象如果失败就是none  data表示读取出来的结果是Buffer
fs.readFile("./resources/为学.md", (err, data)=>{
    // 如果失败, 则抛出错误
    if(err) throw err;
    // 如果没有出错，则输出内容
    console.log(data);   // 查看里面内容 data.toString()
    // 运行脚本在终端中输出 node 25.Promise封装读取文件.js
});  

// 3. 使用Promise封装
const p = new Promise(function(resolve, reject){
    // 封装一个异步的操作，而读取文件就是一个异步的操作
    fs.readFile("./resources/为学.md", (err, data)=>{
        // 判断如果失败 改变promise状态,并且可以改变失败的值为错误对象
        if(err) reject(err);
        // 如果成功
        resolve(data);
    });
});
// 通过对异步任务的封装，可以通过then方法处理成功和失败的结果
p.then(function(value){
    console.log(value);  // value 输出的Buffer, 可以通过toString()做一个转换，输出内容
}, function(reason){
    console.log("读取失败");

})