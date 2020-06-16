路由(不是选项卡) -> 实现单页应用.
    单页应用(singe page application),简称SPA.

    单页应用 -> 一个网站就一个页面.其他的多个页面变成这个单页的多个组件.
//		单页应用切换网页 -> 实际上就是切换组件.(没有额外请求服务器渲染视图).
//		以上功能通过路由实现.
//		如何实现
//			1:修改hash值.(url的哈希值变化并不会让url真正改变,url不改变是不会请求服务器的)
//			2:使用历史记录模式.
//		
//		hash -> 哈希值 -> url后面#以及后面的字符.
# vue-router
    1.引入vue-router
    2.创建一个路由 var router= new VueRouter({
        routes:[
            {
                path:'/home',
                component:home,
                name:home,
            },
            {
                path:'/*',
                redirect:'/home'
            }
        ]
    })

# 出口 router-view

# 跳转 router-link
### $router
fn(){
					
//					路由跳转,把当前的哈希值替换成product
//					$router -> 路由实例router
//					this.$router.push('/product');
//					以下两种写法都可以.
//					this.$router.push({name:"product"});
					this.$router.push({path:"/product"});

//					replace也可以实现路由跳转,与push的区别是,replace不会生成上一条历史记录.push有.
//					this.$router.replace('/product');
				}