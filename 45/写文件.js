var fs=require('fs')
var path='./2.txt'
var data='石破天惊'
var data1='拜师求医'
fs.writeFile(path,data1,function(err){
    if(err){
        console.log(error)
    }else{
        console.log('写完了')
    }})