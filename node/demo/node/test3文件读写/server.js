var http = require("http");
var url = require("url"); 
var fs = require('fs');
var infoData = [];
//服务器一开读取数据
fs.readFile('./info.txt','utf8',function(err,data){
    if(err){
        console.log(err)
    }else{
        //读文件
        data = JSON.stringify(data).replace(/(\\r\\n)|(\\n)/g,'').replace(/\"/g,'').split(',')
        for(var i = 0 ; i < data.length ; i++){
            var arrData = data[i].split(':')
            var msgData = {
                name:arrData[0],
                msg:arrData[1]
            };
            infoData.push(msgData)          
        }
    }
})

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        route(handle, pathname, response, request, infoData);

    }

    http.createServer(onRequest).listen(8888,'127.0.0.1');
    console.log("Server has started.");
}

exports.start = start;