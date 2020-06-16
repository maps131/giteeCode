# pragma
从ctx中拿到响应头
```js
    //解构赋值
    const {response} = ctx;
    //禁止强缓存，只能设置为no-cache
    response.set('pragma', 'no-cache');
```
# expires
也是响应头设置
```js
    //解构赋值
    const {response} = ctx;
    //1分钟后过期
    response.set('expires', new Date(Date.now() + 60 * 1000).toString());
```
# cache-control
响应头设置
```js
    //解构赋值
    const {response} = ctx;
    //禁止强缓存
    response.set('cache-control', 'no-cache');
    // max-age 值是精确到秒，设置过期时间为 1 分钟
    response.set('cache-control', `max-age=${60}`);
```
# 怎么更新配置了强缓存的资源
给资源带上版本号或者哈希值
例如，设置webpack打包带上hash值，每次打包的资源hash名称都不一样。