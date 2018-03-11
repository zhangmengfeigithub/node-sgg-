var mongoose=require('mongoose');
mongoose.connect('mongosedb://127.0.0.1:27017/test')
var connection=mongoose.connection;
connection.on('error',function(err){
    consol.error(err)
})
connection.on('open',function(){
    console.log('opened')
})
//schema
var userschema=new mongoose.Schema({
    userName:String,
    passWord:String
})
// model
var usermodel=mongoose.model('user',userschema)
function getUser(userName,callback){
    usermodel.findOne({userName:userName},function(err,doc){
        if(err){
            console.error(err)
        }else{
         console.log(doc)
         callback(doc)
        }
     })
}
exports.getUser=getUser;