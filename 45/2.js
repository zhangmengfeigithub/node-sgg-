var http = require("http");
var url=require("url");
var server = http.createServer(function(req,res){
  res.writeHead(200,'ok',{
      'content-type':'text/plain'
  });
    var urlstr=req.url;
    var urlobj=url.parse(urlstr,true);
    var path=urlobj.pathname;
  if(path='/html/index.asp'){
       res.setHeader('content-type','text/plain');
      res.end("<h1>找到了</h1>")
  }else{
      res.end('404 notfound')
  }
});
server.listen(3000);