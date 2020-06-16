# 请求头 if-modified-since 和响应头 last-modified
HTTP1.0时的产物，格式为GMT,精确到秒。last-modified资源最后修改时间大于请求头中的if-modified-since（上一次请求的时间）。资源过期，返回新的，status=200;小于，304，走协商缓存。
```js
    let lastModifiedTime = new Date().toGMTString();//如果是文件的话可以用fs.stat获取更改时间，这里是取的开启服务器后，第一个请求的时间

    let router = new koa_router;//实例化路由
    //get方式接受全部数据查询
    router.get('/data',async (ctx,next) => {
        const {response,request} = ctx;
        //强缓存
        // response.set('expires', new Date(Date.now() + 2 * 60 * 1000).toString());
        const ifModifiedSince = request.headers['if-modified-since'];//拿到请求头的if-modified-since，第一次拿应该是undefined，需要第一次返回后，浏览器保存
        //分页信息
        let pageSize = 10,                  //一页多少条
        currentPage = ctx.query.pageNum,               //当前第几页
        sort = {'date':-1},       //排序（按登录时间倒序）
        condition = ctx.query.category,                //条件
        skipnum = (currentPage - 1) * pageSize; //跳过数
        //判断返回还是用缓存
        if(ifModifiedSince == lastModifiedTime){
            response.status = 304;
        }else{
            response.lastModified = lastModifiedTime;//返回lastModified 
            //获取整个数据长度
            const totolNum = await dbData.count({});
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
```
# 请求头 if-none-match 和响应头 etag
它们是位于双引号之间的ASCII字符串（如“675af34563dc-tr34”）。 没有明确指定生成ETag值的方法。 通常，使用内容的散列，最后修改时间戳的哈希值，或简单地使用版本号。 例如，MDN使用wiki内容的十六进制数字的哈希值。
```js
    const koa_router = require('koa-router'),//引入路由
        crypto = require('crypto')//引入node的加密模块
        dbData = require('./mongooser.js');//引入mongoose
    let lastModifiedTime = new Date().toGMTString();

    let router = new koa_router;//实例化路由
    //get方式接受全部数据查询
    router.get('/data',async (ctx,next) => {
        const {response,request} = ctx;
        //强缓存
        // response.set('expires', new Date(Date.now() + 2 * 60 * 1000).toString());
        const ifNoneMatch = request.headers['if-none-match'];//获取请求头里的if-none-match，第一次拿应该是undefined，需要第一次返回后，浏览器保存
        const hash = crypto.createHash('md5');//创建一个哈希对象
        hash.update(lastModifiedTime);//更新hash内容为指定的data,如果是文件，可以用fs.readfiles获取，然后再更新hash
        const etag = `"${hash.digest('hex')}"`;//用hex编码方式计算传入数据的hash摘要
        //分页信息
        let pageSize = 10,                  //一页多少条
        currentPage = ctx.query.pageNum,               //当前第几页
        sort = {'date':-1},       //排序（按登录时间倒序）
        condition = ctx.query.category,                //条件
        skipnum = (currentPage - 1) * pageSize; //跳过数
        //判断返回还是用缓存
        if(ifNoneMatch == etag){
            response.status = 304;
        }else{
            //设置etag
            response.set('etag',etag);
            //获取整个数据长度
            const totolNum = await dbData.count({});
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
```
# last-modified和etag
1. 资源在 1 秒内更新，并且在该一秒内访问，使用 last-modified 处理协商缓存无法获取最新资源。本质上的原因还是因为 last-modified 是精确到秒的，无法反映在 1 秒内的变化。
2. 当资源多次被修改后内容不变，使用 last-modified 来处理有点浪费。多次修改资源，其 last-modified 值肯定是会变的，但是如果内容不变我们其实不需要服务器返回最新资源，直接使用本地缓存。使用 etag 就没这个问题，因为同一个资源多次修改，内容一样， hash 值也一样。
3. 使用 etag 更加灵活，因为 etag 并不一定是我说的就用 hash 值，etag 采用的是弱比较算法，即两个文件除了每个比特都相同外，内容一致也可以认为是相同的。例如，如果两个页面仅仅在页脚的生成时间有所不同，就可以认为二者是相同的。

# 优先级
if-none-match > if-modified-since。

当服务器收到的请求中同时包含 if-modified-since 和 if-none-match 时，服务器会忽略 if-modified-since。