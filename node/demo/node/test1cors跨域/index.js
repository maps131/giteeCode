var http = require('http');
var querystring = require("querystring");
var url = require('url')

http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader('Access-Contral-Credentials',true)
    res.setHeader("Access-Control-Allow-Headers", "Content-type,Content-length,Authorzation,Accept,X-Requested-With");
    res.setHeader("X-Powered-By", ' 3.2.1');
    res.setHeader("Content-type", "text/plain")
    var getData = '';
    if (req.url) {    
        req.on('data',function(postDataChunk){
            getData += postDataChunk;  
        })
        
        req.on('end',function(){
            getData = querystring.parse(getData);
            console.log(getData)
            res.write(JSON.stringify(getData))
            res.end()
        })
    } 
}).listen(3000,function () {
    console.log("open the server");
});