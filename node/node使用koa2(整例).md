# 初始化
```js
    yarn init
```
# 安装相关插件
```js
    {
        "name": "server",
        "version": "1.0.0",
        "main": "index.js",
        "license": "MIT",
        //以下为安装配置的
        "dependencies": {
            //koa2框架
            "koa": "^2.11.0",
            //配合koa--art-template"
            "art-template": "^4.13.2",
            //返回网页用，模板字符串
            "koa-art-template": "^1.1.1",
            //解析参数
            "koa-bodyparser": "^3.2.0",
            //路由
            "koa-router": "^7.4.0",
            //配置静态资源，外部可访问
            "koa-static": "^5.0.0",
            //配置cors跨域
            "koa2-cors": "^2.0.6",
            //操作mongoDB插件
            "mongoose": "^5.8.1",
            //更新自动重启node.js
            "nodemon": "^2.0.2",
            //返回gzip格式
            "koa-compress": "^4.0.1",
            //处理vue的路由的history模式
            "koa2-connect-history-api-fallback": "^0.1.2",
        }
    }
```
# 在index.js中引入使用
```js
    const Koa = require('koa'),//加载主体
    app = new Koa(),//实例化
    router = require('./serve/router'),//加载路由分配
    render = require('koa-art-template'),//渲染模板-页面
    bodyParser = require('koa-bodyparser'),//参数解析
    serve = require('koa-static'),//处理静态资源
    {historyApiFallback} = require('koa2-connect-history-api-fallback'),
    compress = require('koa-compress'),//br格式插件
    cors = require('koa2-cors'),
    path = require('path');//平台路径
    render(app,{
        root:path.join(__dirname,'view'),//连接路径
        extname:'.html',
        debug: process.env.NODE_ENV !== 'production'
    })
    app.use(compress({ threshold: 2048 }));//使用br压缩，大于2k都给我压
    app.use(
        cors({
            //设置允许来自指定域名请求
            origin: '*', //只允许http://localhost:8080这个域名的请求
            maxAge: 5, //指定本次预检请求的有效期，单位为秒。
            credentials: true, //是否允许发送Cookie
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
            allowHeaders: ['Content-Type', 'Authorization', 'Accept','token'], //设置服务器支持的所有头信息字段
            exposeHeaders: ['WWW-Authenticate', 'Server-Authorization','token'] //设置获取其他自定义字段
        })
    );
    app.use(bodyParser({limit:'20mb'}));//注入参数解析
    app.use(historyApiFallback({}));//处理vue路由地址问题
    app.use(serve(__dirname + "/public"));//开放公共资源
    app.use(router.routes()).use(router.allowedMethods());//使用路由

    app.listen(3030,function(){
        console.log('starting at port 3030')
    })//监听的端口号
    

module.exports = app
```
# 路由
```js
    const koa_router = require('koa-router'),//引入路由
    crypto = require('crypto'),//引入node的加密模块
    dbData = require('./mongooser.js');//引入mongoose
    // dbLogin = require('./mongooserLogin.js');
    let lastModifiedTime = new Date().toGMTString();

    let router = new koa_router;//实例化路由
    //get方式接受全部数据查询
    router.get('/data',async (ctx,next) => {
        const {response,request} = ctx;
        //强缓存
        // response.set('expires', new Date(Date.now() + 2 * 60 * 1000).toString());
        const ifNoneMatch = request.headers['if-none-match'];//获取请求头里的if-none-match
        const hash = crypto.createHash('md5');//创建一个哈希对象
        hash.update(lastModifiedTime);//更新hash内容为指定的data
        const etag = `"${hash.digest('hex')}"`;//用hex编码方式计算传入数据的hash摘要
        //分页信息
        let pageSize = 14,                  //一页多少条
        currentPage = ctx.query.pageNum,               //当前第几页
        sort = {'_id':1},       //从最新入库开始查询
        condition = JSON.parse(ctx.query.category),                //条件
        skipnum = (currentPage - 1) * pageSize; //跳过数
        if(condition.title){
            condition = {title:{$regex:condition.title}}
        }
        //判断返回还是用缓存
        if(ifNoneMatch == etag){
            response.status = 304;
        }else{
            //设置etag
            response.set('etag',etag);
            //获取整个数据长度
            const totolNum = await dbData.countDocuments(condition);
            //获取分页数据
            const msgsdata = await dbData.find(condition).skip(skipnum).limit(pageSize).sort(sort)
            //返回数据信息
            if (!msgsdata) {
                ctx.body = {
                    ret: 1001,
                    msg: "查询失败"
                }
            } else {
                ctx.body = {
                    ret: 0,
                    msg: "查询成功",
                    data: msgsdata,
                    totolNum:totolNum
                }
            }
        }
    })
    //post上传请求
    .post('/upload',(ctx, next) => {
        //因为一般只有自己看后台管理，偷懒就没入库查询了
        if(ctx.request.body.token == 'a167a6e951650f648b3035854a0cfc5f'){
            lastModifiedTime = new Date().toGMTString();
            //返回保存信息
            function respone(a) {
                
                if (a) {
                    ctx.body = {
                        ret: 0,
                        msg: "发布成功",
                        data:a
                    }
                } else {
                    ctx.body = {
                        ret: -1,
                        msg: "发布失败",
                    }
                } 
            }
            //实例化检查数据类型，打上_id
            let data = new dbData(ctx.request.body.data);
            //返回信息
            data.save().then(
                respone(data)
            )
        }else{
            ctx.body = {
                ret: -2,
                msg: "请联系管理员发布!",
            }
        }
    })
    //get删除请求
    .get('/remove', async (ctx, next) => {
        //因为一般只有自己看后台管理，偷懒就没入库查询了
        if(ctx.query.token == 'a167a6e951650f648b3035854a0cfc5f'){
            lastModifiedTime = new Date().toGMTString();
            //获取数据
            const info = await dbData.deleteOne({ _id: ctx.query.id })
            if (info.deletedCount) {
                ctx.body = {
                    ret: 0,
                    msg: "删除成功",
                }
            } else {
                ctx.body = {
                    ret: -1,
                    msg: "删除失败"
                }
            }
        }else{
            ctx.body = {
                ret: -2,
                msg: "请联系管理员删除!",
            }
        }
    })
    //get二级分类查询
    .get('/category', async (ctx, next) => {
        const msgsData = await dbData.find({categoryTwo:ctx.query.categoryTwo});
        if(msgsData.length){
            ctx.body = {
                ret: 0,
                msg: "查询成功",
                data: msgsData
            }
        }else{
            ctx.body = {
                ret: -1,
                msg: "查询失败"
            }
        }
    })
    .post('/edit',async (ctx,next)=>{
        //因为一般只有自己看后台管理，偷懒就没入库查询了
        if(ctx.request.body.token == 'a167a6e951650f648b3035854a0cfc5f'){
            lastModifiedTime = new Date().toGMTString();
            const editBackData = await dbData.findByIdAndUpdate(ctx.request.body.data.id,ctx.request.body.data.data)
            if(editBackData){
                ctx.body = {
                    ret: 0,
                    msg: "修改成功",
                }
            }else{
                ctx.body = {
                    ret: -1,
                    msg: "修改失败",
                }
            }
        }else{
            ctx.body = {
                ret: -2,
                msg: "请联系管理员发布!",
            }
        }
    })
    .get('/checklogin',async (ctx,next) => {
        let md5 = crypto.createHash('md5'),
        token;//创建一个哈希对象;
        if(ctx.query.userName == '8000' && ctx.query.passWord == 'temppassword'){//临时账号，因为是自己博客的后台管理系统，所以一般只有自己一个人可以登入
            md5.update(ctx.query.userName + new Date().toGMTString());           //如果要做公司级管理可以注册账号和入数据库查询
            token = `${md5.digest('hex')}`;                                      //同时也取消了数据库对登入状态的md5字段的过期时间，减少了登入验证。但也只在个人博客这里
            //实例化检查数据类型，打上_id
            // let data = {
            //     token:token
            // },
            // info = new dbLogin(data);
            // //存储信息
            // info.save();
            ctx.set('token', token);
                ctx.body = {
                    ret: 0,
                    msg: "登入成功"
                }
        }else if(ctx.query.userName == '18179145204' && ctx.query.passWord == 'fortitude'){//管理员账号
            md5.update(ctx.query.userName);
            token = `${md5.digest('hex')}`;
            //实例化检查数据类型，打上_id
            // let data = {
            //     token:token
            // },
            // info = new dbLogin(data);
            // //存储信息
            // info.save(); 
            ctx.set('token', token);
            ctx.body = {
                ret: 0,
                msg: "登入成功"
            }
        }else{
            ctx.body = {
                ret: -1,
                msg: "登入失败"
            }
        }
    })
    .get('/',async (ctx,next)=>{//返回页面
        ctx.render('index')
    })
    .get('/*',async (ctx,next)=>{//返回页面
        ctx.render('index')
    })
    module.exports = router
```
# mongoose.js
```js
    var mongoose = require('mongoose');//引入ymongoose
    var Schema = mongoose.Schema;//引入数据模型骨架
    //连接数据库vuetest
    mongoose.set('useCreateIndex', true) 
    mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true,useUnifiedTopology: true});
    //设置数据模型
    var Info = new Schema({
        title:{
            type:String,
            require:true
        },
        categoryOne:{
            type:String,
            require:true
        },
        categoryTwo:{
            type:String,
            require:true
        },
        date:{
            type:String,
            require:true
        },
        htmlData:{
            type:String,
            require:true
        }
    });

    //导出vuetestinfo的数据
    module.exports = mongoose.model('blogdata', Info);
```