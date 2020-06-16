# axios
    1.安装引入axios
    2.入口引入 import axios from 'axios'
    3.//给Vue的原型添加一个自定义属性，用于存axios构造函数。
        //这样做可以让整个程序的所有组件实例通过原型链都可以访问到axios。(这样可以避免每个组件都引入axios)

        Vue.prototype.$axios = axios;

         created(){
   
        var that = this;
        this.$axios.get('./static/box1.json').then(function(res){
            that.msg = res.data.name
        })
    }

## post请求
    import axios from 'axios'
    import qs from 'qs

    axios.post(url, qs.stringify(data)).then((response) => {
        return Promise.resolve(response.data);
    })

    全局设置
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

    请求时配置
    axios.post('url',qs.stringify(data),{
    headers: {
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(res=>{
    _this.msg = res.data
    },err =>{
    console.log(err)
    })

## 拦截器
    axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    axios.interceptors.response.use(function (response) {
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    });