const Koa = require('koa'),//加载主体
    app = new Koa(),//实例化
    multer = require('koa-multer'),//接收图片插件
    koa_router = require('koa-router'),//加载路由分配
    render = require('koa-art-template'),//渲染模板-页面
    bodyParser = require('koa-bodyparser'),//参数解析
    serve = require('koa-static'),//处理静态资源
    path = require('path'),//平台路径
    router = new koa_router,//实例化路由
    fs = require('fs');//读取模块
    //创建存储文件夹夹
    if(!fs.existsSync('public')){
        fs.mkdir('public',()=>{
            fs.mkdirSync('public/hash');
            fs.mkdirSync('public/zip');
        });
    }else{
        if(!fs.existsSync('public/hash')){
            fs.mkdirSync('public/hash');
        }
        if(!fs.existsSync('public/zip')){
            fs.mkdirSync('public/zip');
        }
    }

    render(app,{
        root:path.join(__dirname,'view'),//连接路径
        extname:'.html',
        debug: process.env.NODE_ENV !== 'production'
    })
    app.use(bodyParser());//注入参数解析
    app.use(serve(__dirname + "/public"));//开放公共资源
    //配置图片上传并保存
    let storage = multer.diskStorage({ 
        //文件保存路径
        destination: function (req, file, cb) {
            let path = 'public/hash/'+req.body.hash;
            if(!fs.existsSync(path)){//没就创建
                fs.mkdirSync(path)
            }
            cb(null, path)
        },
        //修改文件名称
        filename: function (req, file, cb) {
            // var fileFormat = (file.originalname).split(".");
            // cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
            cb(null,req.body.hash+req.body.index);
        }
    }),
    //限制大小
    limitsSzie = {
        fileSize:2*1024*1024 
    }
    //加载配置
    upload = multer({ storage: storage ,limits:limitsSzie});
    //全局注册路由
    app.use(router.routes()).use(router.allowedMethods());
    //接收
    router.post('/file',async (ctx, next) => {
        let err = await upload.single('file')(ctx,next).then(res=>res).catch(err=>err);//处理文件和参数
        if(err && err.code == 'LIMIT_FILE_SIZE'){
            ctx.body = {
                info: '超出大小限制，保存失败'
            }
        }else{
            if(ctx.req.file){
                ctx.body = {
                    fileIndex: ctx.req.body.index//返回md文本
                } 
            }else{
                ctx.body = {
                    info: '类型错误！'
                }
            }
        }
    }).get('/',async (ctx,next)=>{//返回页面
        ctx.render('indexHttp')
    }).get('/file',async (ctx,next)=>{
        const chunkPath = 'public/hash/' + ctx.query.hash + '/',//上传的块路径
        filePath = 'public/zip/' + ctx.query.name,//要合并后储存的路径
        hash = ctx.query.hash;
        chunks = await fs.readdirSync(chunkPath);//索引文件数
        fs.writeFileSync(filePath,'');//创建空文件
        for(let i = 0 ; i < chunks.length ; i++){
            // 追加写入到文件中
            fs.appendFileSync(filePath, fs.readFileSync(chunkPath + hash + i));
            // 删除本次使用的chunk    
            fs.unlinkSync(chunkPath + hash + i);
        }
        //删除临时的文件夹
        fs.rmdirSync(chunkPath);
        ctx.body = {
            info:'成功'
        }
    }).get('/check',async (ctx,next)=>{
        let hashName = 'public/hash/' + ctx.query.hash;
        if(fs.existsSync(hashName)){
            const chunks = await fs.readdirSync(hashName);//索引文件数
            ctx.body = {
                ret:chunks.length-1
            }
        }else{
            ctx.body = {
                ret:0
            }
        }
    }).get('/download',async (ctx,next)=>{//下载
        filePath = 'public/zip/'+ctx.query.filename;
        if(!fs.existsSync(filePath)){
            ctx.body = {
                info:'查找文件失败'
            }
            return
        }
        let stats = fs.statSync(filePath);//判断文件大小
        ctx.set('Content-Type', 'application/octet-stream');
        ctx.set('Content-Length', stats.size);
        ctx.set('Content-Filename', ctx.query.filename);
        let fileData = await fs.createReadStream(filePath);
        ctx.body = fileData;
    })

app.listen(3000)
console.log('starting at port 3000')

module.exports = app