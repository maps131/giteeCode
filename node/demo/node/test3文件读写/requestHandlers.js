// var exec = require("child_process").exec;
var querystring = require("querystring"),fs = require("fs"),getData = '';

function show(response, postData, infoData){
    console.log('show')
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

function start(response, postData, infoData) {
    console.log('start')
    console.log(infoData)
    response.setHeader("Access-Control-Allow-Origin", "*"); 
    response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-type,Content-length,Authorzation,Accept,X-Requested-With");
    response.write(JSON.stringify(infoData))
    response.end()
}

function comment(response, request, infoData) {
    console.log('comment')
    response.setHeader("Access-Control-Allow-Origin", "*"); 
    response.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    response.setHeader("Access-Control-Allow-Headers", "Content-type,Content-length,Authorzation,Accept,X-Requested-With");
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
                
                info += '\r\n' + writestring
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
        response.end()
    });
}


exports.start = start;
exports.comment = comment;
exports.show = show;