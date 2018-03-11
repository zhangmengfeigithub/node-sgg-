/**
 * Created by Danny on 2015/9/20 9:23.
 */
var http = require("http");

//创建服务器
var server = http.createServer(function(req,res){
    //每次接受请求之后做的事情
    //设置响应头
    if(req.url=="/"){
        res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end('success')
    }else{
         res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        res.end('失败')
    }
   
  
});

server.listen(3000,"127.0.0.1");