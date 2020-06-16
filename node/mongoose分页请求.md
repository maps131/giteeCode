# 分页查询
```js
    //框架用的是koa2
    //get方式接受全部数据查询
    router.get('/data',async (ctx,next) => {
        let pageSize = 10,                  //一页多少条
        currentPage = ctx.query.pageNum,               //当前第几页
        sort = {'date':-1},       //排序（按登录时间倒序）
        condition = ctx.query.category,                //条件
        skipnum = (currentPage - 1) * pageSize; //跳过数
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
    })
```