# 配置
1. 一般在根目录创建一个router目录存放
```js
    //index.js
    // import Vue from 'vue' //引入vue
    import Router from 'vue-router' //引入router,这里是cdn引入，所以注释了上下两行
    // Vue.use(Router) //全局使用router

    export default new Router({
    mode:'history',//开启历史模式，配合后台去掉地址的#
    routes: [
        {
            path: '/',
            name: 'home',
            redirect:'/main',//在当前路由时，默认子路由
            components: {
                default: resolve => require(['@/pages/Home'], resolve),
            },
            children:[//home页的子路由
                {
                path: '/main',
                name: 'main',
                components: {
                    default: resolve => require(['@/components/Main'], resolve),//路由懒加载，一promise，先再pending状态，用的时候then,加载
                },  //路径匹配成功后要渲染的组件。
                meta:{
                    keepAlive:true,//离开时不消毁，免得再次重建
                }
                },
                {
                path: '/content',
                name: 'content',
                components: {
                    default: resolve => require(['@/components/Content'], resolve),
                },  //路径匹配成功后要渲染的组件。
                meta:{
                    keepAlive:true,
                } 
                },
            ] 
        },
        {
            path: '/editor',
            name: 'editor',
            components: {
                default: resolve => require(['@/pages/Editor'], resolve),
            },  //路径匹配成功后要渲染的组件。
            meta:{
                keepAlive:true,
            }  
        },
        {
            path: '/login',
            name: 'login',
            components: {
                default: resolve => require(['@/pages/Login'], resolve),
            }  //路径匹配成功后要渲染的组件。
        },
        {
            path:'/*',//重定向
            redirect:'/main' //修改指定路径
        },
    ]
    })
```
2. 在main.js中引入
```js
    import router from './router';

    new Vue({
        ...
        router:router,
        render: h => h(App),
    }).$mount('#app')
```
# 使用
### 出口
```html
    <keep-alive>
        <!-- 保存返回到keepAlive为true路由不刷新 -->
        <router-view v-if="$route.meta.keepAlive"></router-view><!-- 这里时路由出口， $route.meta.keepAlive拿到的时路由配置的meta-->
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- 路由跳转 -->
    <router-link to="/edior">Go to editor</router-link>
```
```js
    //通过js触发跳转
    this.$router.push({
        path:'/editor',//指定跳转路径
        name: 'editor',//指定跳转的路由名称,与上面二选一
        params: {
            data: data //和name搭配，因为时传值，所以不在url后面显示数据，值会在vue.$router.params存储
        },
        query:{
            data: data //和path搭配，是传参会在在url后面显示数据
        }
    })
```
### 动态路由
1. 通过路径地址绑定hash
```js
    //在路由配置的index.js里添加：id
    {
        path: '/editor/:id',//会在地址栏显示
        name: 'editor',
        components: {
            default: resolve => require(['@/pages/Editor'], resolve),
        },  //路径匹配成功后要渲染的组件。
        meta:{
            keepAlive:true,
        }  
    }
    //跳转触发
    this.$router.push({
        path:`/editor/${id}`,//指定跳转路径
    })
    //获取
    this.$route.params.id
```
2. 通过name和params搭配
```js
    //在路由配置的index.js里添加：id
    {
        path: '/editor',//会在地址栏显示
        name: 'editor',
        components: {
            default: resolve => require(['@/pages/Editor'], resolve),
        },  //路径匹配成功后要渲染的组件。
        meta:{
            keepAlive:true,
        }  
    }
    //跳转触发
    this.$router.push({
        name: 'editor',//指定跳转的路由名称
        params:{//配置了就得携带才能跳转，且刷新就没了
            data:data
        }
    })
    //获取
    this.$route.params.data
```
3. 通过path和query搭配
```js
    //在路由配置的index.js里添加：id
    {
        path: '/editor',//会在地址栏显示
        name: 'editor',
        components: {
            default: resolve => require(['@/pages/Editor'], resolve),
        },  //路径匹配成功后要渲染的组件。
        meta:{
            keepAlive:true,
        }  
    }
    //跳转触发
    this.$router.push({
        path:'/editor',//指定跳转路径
        query:{//刷新数据还在
            data:data
        }
    })
    //获取
    this.$route.query.data
```
> 2、3区别主要还是为了解耦，params和路由的props传参有关
### 路由守卫
1. 全局守卫，写在组件外部想router的index.js或者main.js
```js
    router.beforeEach((to,from,next)=>{
    /* 
        to:去哪个路由
        from：从哪个路由来，可以看到携带的信息
        next:相当于.then()，将pending执行
    */
    let isLogin = getCookie('userInfo')
    if(to.name === 'login') { //这步很重要，不然死循环
        next() 
        return  
    }
    if(isLogin){
        next()
    }else{
        next(
            {
                path:"/login"
            }
        )
    }
})
```
2. 路由守卫，写在路由组件里
```js
    //使用导航守卫
    beforeRouteEnter(to, from, next) {
        if (from.name=="main"){ 
            next(vm => {
                //vm是当前组件的vue
            });
        }
        next()
    }
```
