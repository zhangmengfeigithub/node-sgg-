var http=require("http");
var rou=require("./rou.js");

http.createServer(function(req,res){
    if(req.url="/"){
        rou.showIndex(req,res);
    }else if(req.url="/student/"){
        rou.showStudent(req,res);
    }else{
        rou.show404(req,res);
    }
}).listen(3000);