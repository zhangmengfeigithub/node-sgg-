var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
	fs.mkdir('./zhang/meng')
});
server.listen(3000,"127.0.0.1");