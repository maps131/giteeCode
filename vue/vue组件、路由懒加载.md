# 组件懒加载
```js
    <Pop></Pop>
    <Message></Message>
    export default {
        components:{
            //异步方法
            Pop:resolve => require(['./../components/Pop3.0'],resolve),
            Message:resolve => require(['./../components/HuoDongMessage'],resolve)
        }
    }
    //或者
    <script> 
        const Pop = ()=>import('./../components/Pop3.0');
        const Message = ()=>import('./../components/HuoDongMessage');
        export default {
            components:{
                Pop,
                Message
            }
        }
    </script>
```
# 路由懒加载
```js
    export default new Router({
        routes: [
            {
                path: '/',
                name: 'HelloWorld',
                //异步组件
                component: resolve=>(require(["@/components/HelloWorld"],resolve))
            }
        ]
    })
    // 或者
    const HelloWorld = ()=>import("@/components/HelloWorld");
    export default new Router({
        routes: [
            {
                path: '/',
                name: 'HelloWorld',
                component:HelloWorld
            }
        ]
    })
```