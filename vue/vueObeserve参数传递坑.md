# vue的[__ob__: Observer]
#### vue data 里面值都是有这个属性的。这是被vue接管的数据，observer是Vue核心中最重要的一个模块（个人认为），能够实现视图与数据的响应式更新，底层全凭observer的支持

# 作为传入给普通js的参数时
#### 如果是数字，布尔，字符串这些没深拷贝给参数，未传递observer，所以在普通js中改变数据不引起视图更新，得用对象。

#### 但操作这个对象可能会遇到问题，如果不做mvvm，可以把在对象JSON.parse(JSON.stringfy(object)),得到深拷贝的原始对象
<img src='https://imgconvert.csdnimg.cn/aHR0cHM6Ly9pbWFnZS1zdGF0aWMuc2VnbWVudGZhdWx0LmNvbS8zOTYvMzc1LzM5NjM3NTMzMDctNWJhODU1N2NlZDFmYQ?x-oss-process=image/format,png' />