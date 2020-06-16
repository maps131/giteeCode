# beforeEach 和 affterEach
    在路由跳转的时候，我们需要一些权限判断。这个时候就需要使用路由的钩子函数。

## beforeEach函数
    router.beforeEach((to, from, next) => {
        // do something;
        /* must call `next` */
        next();
    });
    to: Route: 即将要进入的目标 路由对象 
from: Route: 当前导航正要离开的路由 
next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。

## afterEach 钩子不会接受 next 函数也不会改变导航本身：
