/*
    假定：wukong 已经在系统中注册过了


    需求：
        完成用户登录
        已经注册过的用户登录成功返回自己的首页：XXX 欢迎您
        没有注册过的用户登录失败返回：请重新登录
 */



var http = require('http');
var url = require('url');


http.createServer(function(req, res){
    var urlStr = req.url;
    var method = req.method;

    var urlObj = url.parse(urlStr, true);
    var path = urlObj.pathname;
    var  op1= urlObj.query.op1;
    var  op2= urlObj.query.op2;


    switch (path){
        case '/add':
           var result=(+op1)+(+op2);
           console.log(result)
            res.setHeader('content-type', 'text/html;charset=utf8');
            res.end(resule+'');
            break;
        case '/login':
            res.setHeader('content-type', 'text/html;charset=utf8');
            if('wukong' === userName ){
                res.setHeader('content-type', 'text/html;charset=utf8');
                res.end(userName + ' 欢迎你');
            }else {
                res.setHeader('content-type', 'text/html;charset=utf8');
                res.end('用户名密码不正确请重新登录');
            }
            break;
        default:
            res.statusCode = 404;
            res.end('404 not found');
    }



}).listen(3000);












