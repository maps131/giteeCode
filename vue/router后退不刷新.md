# router后退不刷新
#### 设置路由为两种情况，路由meta.keepAlive为true/false,true则运行缓存路由组件，false则重新加载路由组件
```js
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
```
#### 在路由配置文件里，需要缓存的加上,meta.keepAlive = true
```js
    {
      path: '/editor',
      name: 'editor',
      components: {
        default: resolve => require(['@/components/Editor'], resolve),
      },  //路径匹配成功后要渲染的组件。
      meta:{
        keepAlive:false,
      }  
    },
```
#### 在主组件内配置beforeRouteLeave
```js
    beforeRouteLeave(to,from,next){
      to.meta.keepAlive = true;
      next()
    }
```