const Koa = require('koa'),//加载主体
    app = new Koa(),//实例化
    router = require('./public/router'),//加载路由分配
    render = require('koa-art-template'),//渲染模板-页面
    bodyParser = require('koa-bodyparser'),//参数解析
    serve = require('koa-static'),//处理静态资源
    path = require('path');//平台路径

    render(app,{
        root:path.join(__dirname,'view'),//连接路径
        extname:'.html',
        debug: process.env.NODE_ENV !== 'production'
    })

    app.use(bodyParser());//注入参数解析
    app.use(serve(__dirname + "/public"));//开放公共资源
    app.use(router.routes()).use(router.allowedMethods());

app.listen(3000)
console.log('starting at port 3000')

module.exports = app