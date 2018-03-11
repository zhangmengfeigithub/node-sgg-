
var http = require('http');
var url = require('url');
var fs = require('fs'); //操作文件的包
http.createServer(function(req, res){
    var urlStr = req.url;
    var method = req.method;
    var urlObj = url.parse(urlStr, true);
    var path=urlObj.pathname;
    console.log(urlObj);
    switch (path){
        case '/':
            console.log('/index.html')
            res.end('./index.html')
            break;
        case 'favicon.ico':
        var filepath='./favicon.ico'
           fs.readFile(path,function(err,data){
               if(err){
                   console.error(err)
                   res.end('error')
               }else{
                 console.log(data)
                 res.end(data)
               }
           })
            break;
        default:
            res.statusCode = 404;
            res.end('404 not found');
    }
}).listen(3001, function(){
    console.log('server started');
});