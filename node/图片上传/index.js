//使用koa-multer+koa-bodyparser接收单个文件
const Koa = require('koa'),//加载主体
    app = new Koa(),//实例化
    multer = require('koa-multer'),//接收图片插件
    koa_router = require('koa-router'),//加载路由分配
    render = require('koa-art-template'),//渲染模板-页面
    bodyParser = require('koa-bodyparser'),//参数解析
    serve = require('koa-static'),//处理静态资源
    path = require('path'),//平台路径
    router = new koa_router,//实例化路由
    fs = require('fs');
    
    fs.mkdir('public', (err) => {
        if(err && err.code == 'EEXIST'){
            fs.mkdir('public/img',(err)=>{
                if(err && err.code == 'EEXIST'){
                    return
                }
                console.log('创建文件夹成功');
            })
            return
        }
    })
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
            // console.log(file)
            cb(null, 'public/img/')
        },
        //修改文件名称
        filename: function (req, file, cb) {
            // var fileFormat = (file.originalname).split(".");
            // cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
            cb(null,file.originalname);
        }
    }),
    //过滤文件
    fileFilter = (ctx,file,cb)=>{
        const suffix = file.originalname.split('.').splice(-1)[0];
        switch(suffix){
            case 'webp' :;
            case 'tif' :;
            case 'jpg' :;
            case 'png' :;
            case 'gif' :;
            case 'jpeg' :;
            case 'bmp' :cb(null, true);break;
            default:cb(null, false); ;
        }
    },
    //限制大小
    limitsSzie = {
        fileSize:2048*1024
    }
    //加载配置
    upload = multer({ storage: storage ,limits:limitsSzie,fileFilter:fileFilter});
    //全局注册路由
    app.use(router.routes()).use(router.allowedMethods());
    //单张接收
    router.post('/image',async (ctx, next) => {
        let err = await upload.single('file')(ctx,next).then(res=>res).catch(err=>err);
        // console.log(ctx.req.body.user);
        if(err && err.code == 'LIMIT_FILE_SIZE'){
            ctx.body = {
                info: '超出大小限制，保存失败'
            }
        }else{
            //单张是file
            if(ctx.req.file){
                ctx.body = {
                    filename: ctx.req.file.filename//返回文件名
                }
            }else{
                ctx.body = {
                    info: '类型错误！'
                }
            }
            
        }
        
    }).get('/',async (ctx,next)=>{//返回页面
        ctx.render('index')
    }).post('/images',async (ctx, next) => {//多张接收
        let err = await upload.array('file',3)(ctx,next).then(res=>res).catch(err=>err);
        // console.log(err);
        if(err && err.code == 'LIMIT_FILE_SIZE'){
            ctx.body = {
                info: '超出大小限制，保存失败'
            }
        }else if(err && err.code == 'LIMIT_UNEXPECTED_FILE'){
            ctx.body = {
                info: '超出数量限制，保存失败'
            }
        }
        else{
            //多张是files
            if(ctx.req.files){
                ctx.body = {
                    info: '上传成功'//返回文件名
                }
            }else{
                ctx.body = {
                    info: '类型错误！'
                }
            }
            
        }
        
    })
app.listen(3000)
console.log('starting at port 3000')

module.exports = app