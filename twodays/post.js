/**
 * Created by Danny on 2015/9/20 9:23.
 */
var http = require("http");

//创建服务器
var server = http.createServer(function (req, res) {
    if (req.url == "/dopost" && req.method.toLowerCase() == "post") {
        req.addListener("data", function (chunk) {
            var alldata = "";
            alldata += chunk;
            console.log(chunk);
        })
         req.addListener("end", function () {
        console.log(alldata.toString());
        })
    }

});

server.listen(80, "127.0.0.1");