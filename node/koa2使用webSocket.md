# 安装
```js
    yarn add koa-websocket
```

# 使用
1. 在公共文件夹下创建wsRouter.js，用于路由webSoket请求
```js
    // wsRouter.js
    const koa_router = require('koa-router'),//引入路由
    dbData = require('./mongooser.js');//引入mongoose
    let wsRouter = new koa_router;//实例化路由
    wsRouter.get('/test',async (ctx)=>{
        ctx.websocket.send('连接成功');
        //测试，返回数据库有多少条数据
        const totolNum = await dbData.count({});
        
        // 接收消息
        ctx.websocket.on('message', function (message) {
            //打印前端传来的
            console.log(message);
            // 返回给前端的数据
            ctx.websocket.send(totolNum);
            
        })
    })

    module.exports = wsRouter
```
2. 在serve中加载使用
```js
    const Koa = require('koa'),//加载主体
    router = require('./public/router'),//加载http路由分配
    wsRouter = require('./public/wsRouter'),//加载ws路由分配
    bodyParser = require('koa-bodyparser'),//参数解析
    serve = require('koa-static'),//处理静态资源
    cors = require('koa2-cors'),
    websockify = require('koa-websocket'),//加载websocket
    app = websockify(new Koa());//加入监听

    app.use(
        cors({

            //设置允许来自指定域名请求
            origin: '*', //允许所有域名的请求
            maxAge: 5, //指定本次预检请求的有效期，单位为秒。
            credentials: true, //是否允许发送Cookie
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
            allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
            exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
        })
    );
    app.use(bodyParser({limit:'20mb'}));//注入参数解析
    app.use(serve(__dirname + "/public"));//开放公共资源
    app.use(router.routes()).use(router.allowedMethods());//使用路由，http的
    app.ws.use(wsRouter.routes()).use(wsRouter.allowedMethods());//使用ws路由

    app.listen(3030)//监听的端口号
    console.log('starting at port 3030')

    module.exports = app
```

# 前端使用
```js
    // 打开一个 web socket
    var wst = new WebSocket("ws://localhost:3030/test");
    
    wst.onopen = function()
    {
        // Web Socket 已连接上，使用 send() 方法发送数据
        wst.send("发送数据");
        console.log("数据发送中...");
    };
    
    wst.onmessage = function (evt) 
    { 
        let received_msg = evt.data;
        console.log(received_msg)
        console.log("数据已接收...");
    };
    
    wst.onclose = function()
    { 
        // 关闭 websocket
        console.log("连接已关闭..."); 
    };
```
