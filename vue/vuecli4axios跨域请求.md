# axios跨域请求
#### 在vue.config.js里添加
```js
    module.exports = {
        devServer:{
            proxy:{
                '/api':{
                    target:'要请求的url',
                    changeOrigin:true,
                    ws:true,
                    pathRewrite:{
                        //重命名
                        '^/api':''
                    }
                }
            }
        }
    }
```

## 使用axios
#### 在main.js配置原型
```js
    import axios from 'axios';
    Vue.prototype.axios = axios;
```

#### 组件中使用
```js
    this.axios({
      method:'get',
      url:'/api',
      //这里很重要，post是data
      params:{}
    }).then((ok)=>{
      console.log(ok)
    }),(err)=>{
      console.log(err)
    }
```