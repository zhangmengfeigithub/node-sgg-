var express=require("express");
var app=express();
app.set("view engine","ejs");
app.get("/",function(req,res){
    res.render("haha",{news:[]})
});
app.listen(3003);