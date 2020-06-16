# 安装
```js
    yarn add element-ui
    yarn add babel-plugin-component -D
    yarn add vue-cli-plugin-element -D
```
# 配置
#### 在babel.config.js里添加
```js
    "plugins": [
        [
        "component",
        {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
        }
        ]
    ]
```
# 使用
```js
    <div>
        <el-button type="primary">element按钮</el-button>
    </div>
    
    <script>
        import {Button} from 'element-ui'
        export default {
            components:{
                "el-button":Button
            }
        }
    </script>

```