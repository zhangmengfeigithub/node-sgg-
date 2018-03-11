var ejs=require("ejs");
var string="今天我买了<%= a %>s";
var data={
       a:6
}
    var html=ejs.render(string,data);
    console.log(html);