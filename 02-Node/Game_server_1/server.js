
var express = require('express');
var app = express();    // web Server
var fs = require('fs'); // Readfile

app.get("/",function(req,res){ 
    res.send("Good Bye");

});

app.get("/users",function(req,res){ 

    fs.readFile(__dirname+"/"+"User.json","utf8",function(err,data){
        console.log(data);
        res.send(data);
    });


});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("App Listening at HTTP://%s:%s",host,port);
});