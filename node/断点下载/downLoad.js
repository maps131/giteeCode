const fs = require('fs'),
fetch = require('node-fetch'),
readJson = fileName => JSON.parse(fs.readFileSync('public/down/'+fileName+'.info')),//读取信息文件
writeJson = (fileName,data) => {fs.writeFileSync('public/down/'+fileName+'.info',JSON.stringify(data))};//用来记录下载信息
const downLoadPath = 'public/down',
rootPath = 'public'
if(!fs.existsSync(rootPath)){//没就创建
    fs.mkdir(rootPath,function(){
        fs.mkdirSync(downLoadPath)
    })
}else{
    if(!fs.existsSync(downLoadPath)){//没就创建
        fs.mkdirSync(downLoadPath)
    }
}

class downFile{
    constructor(url,downSize){
        this.url = url;//资源地址
        this.chunkSize = downSize*1024*1024;//一次下载多少M
        this.chunkList = [];//分段列表
        this.chunkLength = 1;//分段长度
        this.contentType;//资源的MIME类型 media type 
        this.contentRange;//数据内容的起止位置以及整个需要请求的内容的长度
        this.lastModified;//资源最近修改时间，判断资源是否变化
        this.etag;//资源文件的md5，判断是否变化
        this.currentChunk = 0;//下载的当前分段
        this.fileName = this.url.split("/").reverse()[0].split("?")[0];//资源名称
        this.header;//下载请求头
        this.openDownLoad();//启动下载
    }
    //启动下载
    openDownLoad = async ()=>{
        await this.getFileInfo();//获取文件资源的信息
        await this.chunkDownLoad();//分段
        this.startDown();//开始下载
    }
    //获取下载文件信息
    getFileInfo(){
        return new Promise((res,rej)=>{
            fetch(this.url,{
                method:'get',
                headers:{
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36",
                    "Cache-Control": "no-cache",
                    Connection: "keep-alive",
                    Pragma: "no-cache",
                    Range: "bytes=0-1"
                }
            }).then(ret => {
                let headerInfo = {};
                ret.headers.forEach((value,key)=>{
                    headerInfo[key.toLowerCase()] = value;//遍历信息
                });

                this.contentType = headerInfo['content-type'];
                this.contentRange = Number(headerInfo['content-range'].split("/").reverse()[0]);
                this.lastModified = headerInfo['last-modified'] ? headerInfo['last-modified'] : null;
                this.etag = headerInfo['etag'] ? headerInfo['etag'] : null;
                this.header = {
                    'Content-Type' : this.contentType,
                    'Cache-Control': 'no-cache',
                    'Connection' : 'keep-alive',
                    'Pragma': 'no-cache',
                }
                if(this.lastModified){
                    this.header['Last-Modified'] = this.lastModified;
                }
                if(this.etag){
                    this.header['Etag'] = this.etag;
                }
                return res()
            }).catch(rej)
        })
    }
    //下载分段
    chunkDownLoad (){
        return new Promise((res,rej)=>{
            this.chunkLength = Math.ceil(this.contentRange/this.chunkSize);
            for(let i = 0, start, end ; i < this.chunkLength ; i++){
                start = i * this.chunkSize;
                end = (i+1) * this.chunkSize - 1 < this.contentRange ? (i+1) * this.chunkSize - 1 : this.contentRange;//减1避免下一个重复1b
                this.chunkList.push({start:start,end:end})
            }
            return res()
        })
    }
    //存储文件信息
    saveFileInfo (){
        let tempData = {
            fileName : this.fileName,
            contentType : this.contentType,
            contentRange : this.contentRange,
            lastModified : this.lastModified,
            currentChunk : this.currentChunk,
            chunkSize : this.chunkSize,
            chunkLength : this.chunkLength,
            chunkList : this.chunkList
        };
        writeJson(this.fileName,tempData);
    }
    //
    //下载请求
    downLoad (downRange,that){
        return new Promise((result,rej)=>{
            that.header['Range'] = 'bytes=' + downRange.start + '-' + downRange.end;
            fetch(that.url, {
                method: 'GET',
                headers: that.header,
            }).then(res =>{
                let savePath = 'public/down/'+that.fileName+'_folder';
                if(!fs.existsSync(savePath)){//没就创建
                    fs.mkdirSync(savePath)
                }
                res.buffer().then((data)=>{
                    fs.writeFile(savePath + '/'+ that.fileName +'_'+that.currentChunk, data, ()=>{//存储分段文件
                        that.currentChunk++
                        console.log(Math.ceil(that.currentChunk/that.chunkLength*100)+'%')
                        result()
                    });    
                })
            })
        })
    }
    //开始下载
    startDown = async ()=>{
        if(!this.currentChunk){//判断是否下载着
            await this.checkStatus(this);
        }
        this.downLoad(this.chunkList.shift(),this)
        .then(()=>{this.nextDown()});//调度
    }
    //调度函数
    nextDown (){
        if(this.chunkList.length){
            this.saveFileInfo()
            this.startDown()
        }else{
            console.log('下载结束')
            this.mergeDownLoadFile ()
        }
    }
    //合并文件
    mergeDownLoadFile (){
        const chunkPath = 'public/down/' + this.fileName + '_folder' + '/',//上传的块路径
        filePath = 'public/down/' + this.fileName;//要合并后储存的路径
        fs.writeFileSync(filePath,'');//创建空文件
        for(let i = 0 ; i < this.chunkLength ; i++){
            // 追加写入到文件中
            fs.appendFileSync(filePath, fs.readFileSync(chunkPath + this.fileName + '_' + i));
            // 删除本次使用的chunk    
            fs.unlinkSync(chunkPath + this.fileName + '_' + i);
        }
        //删除临时的文件夹
        fs.rmdirSync(chunkPath);
        fs.unlinkSync(filePath + '.info')
    }
    //查询是否下载着和网络资源是否更新
    checkStatus (that){ 
        return new Promise((res,rej)=>{
            if(fs.existsSync('public/down/'+that.fileName+'.info')){
                let fileInfo = readJson(that.fileName);
                if(fileInfo.lastModified && fileInfo.lastModified != that.lastModified){
                    that.currentChunk = 0;
                }
                if(fileInfo.etag && fileInfo.etag != that.etag){
                    that.currentChunk = 0;
                }
                if(fileInfo.currentChunk > 0){
                    that.currentChunk = fileInfo.currentChunk
                    that.chunkList.splice(0,fileInfo.currentChunk);
                }
            }
            return res()
        })
        
    }
}

//要下载啥直接new('url','一次下载多少M')
new downFile('https://dldir1.qq.com/qqfile/qq/QQ9.0.8/24209/QQ9.0.8.24209.exe',4)