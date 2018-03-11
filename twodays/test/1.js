var fs=require('fs');
fs.readFile(__dirname+"/1.txt",function(err,data){
   if(err){
       throw err;
   }else{
       console.log(data.toString());
   }
})