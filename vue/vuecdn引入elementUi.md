# 引入
> 直接在index页面引入
#  在vue.config.js配置使用外部js
```js
    module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue', '.scss', '.css'],//cdn扩展接受的类型
        },
        externals: {//导入外部js
            'element-ui': 'ELEMENT',//ELEMENT!,js里的变量名是这个
        },
    }
```
## 在main.js中引入
```js
    //引入，这里是拿了要用的。不是按需啊，在index页面已经把他完完整整的搞过来了。
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
    } from 'element-ui';

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
# 使用
> 组件内除了配置components,之前咋用就咋用。