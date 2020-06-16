# DNS优化
* 减少DNS解析时间和次数是个很好的优化方式。DNS Prefetching 是让具有此属性的域名不需要用户点击链接就在后台解析，而域名解析和内容载入是串行的网络操作，所以这个方式能 减少用户的等待时间，提升用户体验 。
* 有些浏览器有隐式的DNS Prefetch，没得话就自己加
* 目前大多数浏览器已经支持此属性，支持版本如下：
* – Safari: 5+
* – Chrome: All
* – Firefox: 3.5+
* – Opera: Unknown
* – IE: 9+ (called “Pre-resolution” on blogs.msdn.com)
# 使用
DNS Prefetch 应该尽量的放在headr的里面，推荐放在 <meta charset="UTF-8"> 后面。
```js
    <meta http-equiv="x-dns-prefetch-control" content="on">
    <link rel="dns-prefetch" href="//www.111.com">
    <link rel="dns-prefetch" href="//www.222.com">
```

# 禁用
需要注意的是，虽然使用 DNS Prefetch 能够加快页面的解析速度，但是也不能滥用，因为有开发者指出 禁用DNS 预读取能节省每月100亿的DNS查询 。

如果需要禁止隐式的 DNS Prefetch，可以使用以下的标签：
```js
<meta http-equiv="x-dns-prefetch-control" content="off">
```