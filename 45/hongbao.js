
var http = require('http');
var url = require('url');
var fs = require('fs'); //操作文件的包

//变量
var counter = 0;
var sum = 0;
var average = 0;

var info = [];//名字 和 数字

http.createServer(function(req, res){
    var urlStr = req.url;
    var method = req.method;

    var urlObj = url.parse(urlStr, true);
    var path = urlObj.pathname; //文件路径
    var userName = urlObj.query.userName; //userName
    var number = urlObj.query.number; //number
    // console.log(urlObj);

    var userObj = {
        userName : userName,
        number : number //字符串
    };

    switch (path){
        case '/average':
            //非空检查
            if(!userName || !number){
                res.end('not empty');
            }else {
                counter++;
                sum += (+number);
                average = sum / counter; //求出平均数
                console.log(average);

                info.push(userObj);

                res.setHeader('content-type', 'text/html;charset=utf8');
                res.end('恭喜你 投票结束');
            }
            break;
        case '/statistics':
            //参与的人数 counter
            //平均值    average

            res.setHeader('content-type', 'text/html;charset=utf8');
            //遍历数组
            for(var i=0; i<info.length; i++){
                var temp = info[i];
                res.write('用户名：' + temp.userName + '    数字: ' + temp.number);
                res.write('<br>');
            }

            res.end('参与的人数: ' + counter + '， 平均值:    ' + average);
            break;
        case '/':
            //读文件
            fs.readFile('./form.html', function (err, data) {
                if(err){
                    console.error(err);
                }else{
                    console.log(data); //buffer
                    //发送给客户端
                    res.end(data);  //string or buffer
                }
            });
            break;
        default:
            res.statusCode = 404;
            res.end('404 not found');
    }
}).listen(3000, function(){
    console.log('server started');
});



require('fs'); //file system