/*
  synchronous   同步的
 asynchronous   异步的

同步读取文件
fs.readFileSync(filename, [encoding])

数据做为返回值 返回给程序员
 */


var fs = require('fs');
/*

var path = '/content.txt';
var data = fs.readFileSync(path);   //同步读取文件
console.log(data);
console.log(data.toString());
console.log('aaa');
*/


//try catch 语句
//try   尝试，试图， 尝试执行代码
//catch 抓，捕获，异常     错误会被封装到 参数里面
console.log('before');
try{

    var path = 'content.txt';
    var data = fs.readFileSync(path);   //同步读取文件  阻塞  挂起
    console.log('read');
    console.log(data);
    // console.log(data.toString());


}catch (err){
    console.error(err);
}
console.log('after');
