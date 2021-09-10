// 引入 fs 模块
const fs = require("fs");

fs.readFile("./resources/为学.md", (err,data1)=>{
    fs.readFile("./resources/插秧诗.md", (err,data2)=>{
        fs.readFile("./resources/观书有感.md", (err,data3)=>{
            let result = data1 + "\r\n" + data2 + "\r\n" + data3;
            console.log(result);
        });
    });
});

// 使用 promise 实现
const p = new Promise((resolve, reject)=>{
    fs.readFile("./resources/为学.md", (err,data)=>{
        resolve(data);
    });
});

p.then(value=>{
    console.log(value.toString());
})
// 读取第二个
p.then(value=>{
    fs.readFile("./resources/插秧诗.md", (err,data)=>{
        resolve(data);
    });
})  // 没办法读第三个，如果想继续读第三个文件，又要嵌套，又成了回调地狱



// 可以在then方法里面再回调一个promise
p.then(value=>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/插秧诗.md", (err,data)=>{
           // value是第一个文件内容，data是第二个文件内容
           // 可以将文件合并，继续向下传递内容
           resolve([value,data]); // resolve()可以改变promise对象状态的变成成功
                                    // then方法返回的也是成功，成功的值就是then方法返回的成功的值
        });
    })
    //再套一个then 此时value变成第一个文件和第二个文件内容上形成的数组
}).then(value =>{
    return new Promise((resolve,reject)=>{
        fs.readFile("./resources/观书有感.md", (err,data)=>{
           // 压入 
           value.push(data);
           resolve(value);
        });
    })
}).then(value => {
    console.log(value.join("\r\n"));     // \r\n 做拼接
})
