var fs = require('fs');
var http = require('http');
var querystring = require("querystring");
var infoData = [];
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
        // console.log(infoData)
    }
})

http.createServer(function(request,response){
    var getData = '';
    if (request.url == '/comment' || request.url == '/start') {
        response.setHeader("Access-Control-Allow-Origin", "*"); 
        response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        // // response.setHeader('Access-Contral-Credentials',true)
        response.setHeader("Access-Control-Allow-Headers", "Content-type,Content-length,Authorzation,Accept,X-Requested-With");
        // response.setHeader("X-Powered-By", ' 3.2.1');
        // response.setHeader("Content-type", "text/plain")
        // response.writeHead(200, { 'Content-Type': 'text/plian' });
        
        if(request.url == '/comment'){
            request.on('data',function(postDataChunk){
                getData += postDataChunk;  
            }) 
            
            request.on('end',function(){
                getData = querystring.parse(getData);
                console.log(getData)
                //添加上传的信息
                var msgData = {
                    name:getData.name,
                    msg:getData.info
                };
                infoData.push(msgData) 
                
                //写文件
                var info = '' 
                function writeInfo(){
                    for(var o = 0 ;  o < infoData.length ; o++){
                        if(o != infoData.length-1){
                            var writestring = infoData[o].name+ ':' + infoData[o].msg + ','
                        }else{
                            var writestring = infoData[o].name+ ':' + infoData[o].msg
                        }
                        
                        info += writestring
                    }
                    console.log(info)
                }
                writeInfo()
    
                fs.writeFile('info.txt',info,'utf8',function(err){
                    if(err){
                        console.log(err)
                    }else{
                        console.log('success')
                    }
                })
    
                // response.statusCode = 302;
                // response.setHeader('Location','/')
                // response.write(JSON.stringify(infoData))
                response.end()
            });
        }else{
            response.write(JSON.stringify(infoData))
            response.end()
        }
    }else if(request.url == '/'){
        response.setHeader('Content-type','text/html;charset=utf8')
        fs.readFile('./index.html',function(err,data){
            if(err){
                response.write('文件读取错误')
                return
            }else{
                response.write(data)
                response.end()
            }
        })
        
    } 

}).listen(8888,function(){
    console.log('server start')
})

