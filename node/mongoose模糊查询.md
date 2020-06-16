# 用到$regex
```js
    condition = {title:{$regex:condition.title}};
    //数据库查询
    const msgsdata = await dbData.find(condition)
```