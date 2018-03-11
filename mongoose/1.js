var mongoose=require('mongoose')
mongoose.connect('mongoose://127.0.0.1:27017/test')
var connection=mongoose.connection
connection.on('error',function(err){
    console.log(err);
})
connection.on('open',function(){
    console.log('opened')
})