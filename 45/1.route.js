/*
    路由:     route    router
        根据用户的 url 中的文件路径找到对应的资源

    获得用户的**文件路径**
        urlObj.path


 */


var http = require('http');
var url = require('url');

http.createServer(function(req, res){
    var urlStr = req.url;
    var method = req.method;
    var urlobj=url.parse(urlStr,true)
    var username=urlobj.query.username;
    var password=urlobj.query.password;
    if('wukong'==username){
        res.setHeader('content-type','text/html;charset=utf-8')
        res.end(username+'欢迎你')
    }else{
        res.end('青重新登录')
    }

}).listen(3000);













