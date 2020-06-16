# vue-cli中使用cdn加载的js
1. 直接用windows对象里的
2. 挂载到vue上面
## 一、直接使用windows对象里的
> 不在vue原型中加
### 在public里index.html中
```js
    //正常加载
    <script src="./js/isPgvMain.js"></script>
```
### 直接在要使用的组件中
```js
    //直接拿到使用
    const pgvSendClick = window.pgvSendClick;//pgvSendClick是外部js的东西
```

## 二、挂载在vue上面
### 在出口inde.html中
```js
    //正常加载
    <script src="./js/isPgvMain.js"></script>
```
### 在cli的main.js中
```js
    //赋值加载进来的全局变量
    const pgvSendClick = window.pgvSendClick;
    //注册到整个vue中
    Vue.prototype.pgvSendClick = pgvSendClick;
```
### 在要使用的组件中
```js
    //直接this.拿到
    this.pgvSendClick
```
## 三、配置挂载到vue上面
### 在出口inde.html中
```html
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.11"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/highlight.js/10.0.3/highlight.min.js"></script>
    <script src="https://cdn.bootcdn.net/ajax/libs/marked/1.1.0/marked.min.js"></script>

```
### 在vue.config.js中导入js
```js
    ...
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue', '.scss', '.css'],//cdn扩展接受的类型
            ...
        },
        externals: {//导入外部js
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'element-ui': 'ELEMENT',
            'Axios':'axios',
            'hljs':'hljs',
            'marked':'marked'
        }
    }
```
### 配置路由
```js
    // import Vue from 'vue'
    import Router from 'vue-router'

    // Vue.use(Router)
```
### 在main.js中
```js
    import Vue from 'vue';
    import router from './router';
    import axios from 'Axios';
    import {
        Notification,
        Message,
        MessageBox,
        Container,
        Header,
        Aside,
        Main,
        Select,
        Option,
        Upload,
        Menu,
        Submenu,
        MenuItemGroup,
        MenuItem,
        Table,
        TableColumn,
        Pagination,
        Row,
        Col,
        Button,
        Input,
        Divider
    } from 'element-ui';//如果配置了按需加载的要取消配置，不然报未安装的错误。
    import marked from 'marked';
    import hljs from "hljs";

    Vue.prototype.marked = marked;
    Vue.prototype.hljs = hljs;
    //全局注册axios
    Vue.prototype.axios = axios;
    Vue.config.productionTip = false;
    //全局提示ui组件
    Vue.prototype.Notification = Notification;
    Vue.prototype.Message = Message;
    Vue.prototype.MessageBox = MessageBox;
    //注册ui组件
    Vue.component("el-container",Container);
    Vue.component("el-header",Header);
    Vue.component("el-aside",Aside);
    Vue.component("el-main",Main);
    Vue.component("el-select",Select);
    Vue.component("el-option",Option);
    Vue.component("el-upload",Upload);
    Vue.component("el-menu",Menu);
    Vue.component("el-submenu",Submenu);
    Vue.component("el-menu-item-group",MenuItemGroup);
    Vue.component("el-menu-item",MenuItem);
    Vue.component("el-table",Table);
    Vue.component("el-table-column",TableColumn);
    Vue.component("el-pagination",Pagination);
    Vue.component("el-row",Row);
    Vue.component("el-col",Col);
    Vue.component("el-button",Button);
    Vue.component("el-input",Input);
    Vue.component("el-divider",Divider);
```