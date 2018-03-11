var http = require("http");
var url=require("url");
var server = http.createServer(function(req,res){
    var method=req.method;
    var url1=req.url;
    var obj=url.parse(url1,true);
    console.log(obj);
    res.end("jiesu")
    var query=obj.query;
    console.log(query);
    

});
    
server.listen(3000);