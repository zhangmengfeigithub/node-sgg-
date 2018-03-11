
var http = require('http');
var url = require('url');
var fs = require('fs'); //操作文件的包
var db=require('./dao/db.js')
http.createServer(function(req, res){
    var urlStr = req.url;
    var urlObj = url.parse(urlStr, true);
    var pathName = urlObj.pathname; //文件路径
    var filePath='./login.html'
    switch (pathName){
        case '/':
            fs.readFile(filePath,function(err,data){
              if(err){
                  console.error(err)
                  res.end('error')
              }else{
                  res.end(data)
              }
            })
           break;
        case '/login':
            var userName=urlObj.query.userName
            var passWord=urlObj.query.passWord
            //查找
            db.getUser(userName,callback)
            function callback(doc){
                console.log('qian:',doc)
                if(null !==doc){
                    if(doc.passWord==passWord){
                      res.setHeader('content-type','text/html;charset=utf8')
                      res.end('登录成功')
                    }else{
                      res.setHeader('content-type','text/html;charset=utf8')
                      res.end('密码不正确')
                    }
                 }else{
                     res.setHeader('content-type','text/html;charset=utf8')
                     res.end('用户名密码不正确')
                 }
            }
            break;
        default:
            res.statusCode = 404;
            res.end('404 not found');
    }
}).listen(3000, function(){
    console.log('server started');
});


function logic(password,doc,res){
    if(null !==doc){
        if(doc.passWord==passWord){
          res.setHeader('content-type','text/html;charset=utf8')
          res.end('登录成功')
        }else{
          res.setHeader('content-type','text/html;charset=utf8')
          res.end('密码不正确')
        }
     }else{
         res.setHeader('content-type','text/html;charset=utf8')
         res.end('用户名密码不正确')
     }
}