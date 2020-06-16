# 安装
```js
    yarn add wangeditor
``` 
# 在index.html引入highlight的js、css
```js
    <link href="http://cdn.bootcss.com/highlight.js/8.0/styles/monokai_sublime.min.css" rel="stylesheet"> 
    <script src="http://cdn.bootcss.com/highlight.js/8.0/highlight.min.js"></script>
```

# main.js引用
```js
    //wangeditor使用highlight.js
    const hljs = window.hljs
    Vue.directive('highlight',function (el) {
        let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
            hljs.highlightBlock(block)
        })
    })
```

# 在显示代码的标签上加v-highlight
```js
    <div id="text" class="text" v-highlight></div>
```

# 使用wangeditor
```js
    //template中
    //编辑器bar
    <div id="toolbar" class="toolbar">

    </div>
    //间隔bar和输入框
    <div style="padding: 2px 0"></div>
    //输入框
    <div id="text" class="text" v-highlight>

    </div>
    //script中
    //实例化wang富文本编辑器
    this.editor = new E("#toolbar","#text");
    this.editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        // 'italic',  // 斜体
        // 'underline',  // 下划线
        // 'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        //'link',  // 插入链接
        'list',  // 列表
        // 'justify',  // 对齐方式
        // 'quote',  // 引用
        //'emoticon',  // 表情
        //'image',  // 插入图片
        // 'table',  // 表格
        //'video',  // 插入视频
        'code',  // 插入代码
        //'undo',  // 撤销
        //'redo'  // 重复
    ];
    //聚焦时候函数
    this.editor.customConfig.onfocus = function () {
    //console.log("onfocus")
    };
    //失焦时候函数
    this.editor.customConfig.onblur = function () {
    //console.log("onblur")
    };
    //change事件，当富文本编辑器内容发生变化时便会触发此函数
    this.editor.customConfig.onchange = function () {
    // console.log(text)
    };
    this.editor.create();//以上配置完成之后调用其create()方法进行创建
    // this.editor.txt.html("<p>请输入</p>");//创建完成之后的默认内容
    // this.editorData = this.editor.txt.text();//获取编辑的内容
```