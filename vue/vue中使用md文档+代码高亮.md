# 安装
> 这里只说cdn，条件好的可以使用npm或和yarn
## 在index.html页面引入
```html
    <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/marked/1.1.0/marked.min.js"></script>
```
# 配置
## 在vue.config.js配置外部js
```js
    module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue', '.scss', '.css'],//cdn扩展接受的类型
        },
        externals: {//导入外部js
            'hljs':'hljs',//这里库的变量名，不同的库自己去代码里找
            'marked':'marked'
        },
    }
```
## 在main.js中引入
```js
    //引入
    import marked from 'marked';
    import hljs from "hljs";
    //挂载在vue
    Vue.prototype.marked = marked;
    Vue.prototype.hljs = hljs;
```
# 使用
```js
    //这个在html页面也可以引入
    import './../assets/css/monokai-sublime.css';//引入代码高亮样式，这个自己找。太多了
    import './../assets/css/markdown.css';//引入md文档样式，这个自己找。也很多
    //在要使用的组件中
    const that = this;//保存个this,因为指向会变

    this.marked.setOptions(
        {
            renderer: new this.marked.Renderer(),
            highlight: function(code) {
                return that.hljs.highlightAuto(code).value;//高亮代码
            },
            pedantic: false,//这些啥意思自己去官网看
            gfm: true,
            tables: true,
            breaks: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
            xhtml: false
        }
    );
    //将文案转成md文档
    this.contentData = this.marked(data) //这个返回的就是md文档式的html，但还需要md文档样式
```
```html
    <!-- 在渲染的元素添加class="markdown-body" -->
    <div v-html="contentData" class="markdown-body"></div>
```
> 其实可以直接点不用配置，在组件中用window.hljs获取。