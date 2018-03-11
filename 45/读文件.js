var fs=require('fs')
var path='./1.txt'
fs.readFile(path,function(err,data){
    console.log(data.toString())
})