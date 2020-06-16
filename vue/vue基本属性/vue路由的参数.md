# $route.path
    //3个路由选项都使用同一个组件。
		//当路由跳转时,$route.path会自动获取到当前跳转的路由选项的路径。
		//动态路由 -> 重复模板的路由组件使用同一个而不是多个.(因为只有一个组件,因此activated不会触发).

# $route.params.hash
    <div id='app'>
<!-- 			
			<router-link to='/home'>首页</router-link>
			<router-link to='/product'>产品</router-link>
			<router-link to='/contact'>联系我们</router-link> -->
			
			<router-link :to='{name:"home",params:{hash:"home"}}'>首页</router-link>
			<router-link :to='{name:"home",params:{hash:"product"}}'>产品</router-link>
			<router-link :to='{name:"home",params:{hash:"contact"}}'>联系我们</router-link>
			
			<keep-alive>
				<router-view></router-view>
			</keep-alive>	
		</div>

        <script type="text/javascript">
		
		//3个路由选项都使用同一个组件。
		//当路由跳转时,$route.path会自动获取到当前跳转的路由选项的路径。
		//动态路由 -> 重复模板的路由组件使用同一个而不是多个.(因为只有一个组件,因此activated不会触发).
		const box = {
			template:`<div>{{$route.path}}</div>`,
			activated(){
				console.log('哈哈哈哈')
			}
		}
		
		const router = new VueRouter({
			//书写上可以3个选项合并成一个书写,但是实际上路由选项还是3个而不会真正变成1个.
			//hash -> 路由参数  -> 每当路由跳转时,hash都会变成当前的哈希值.
			//如何访问路由参数? -> $route.params.hash
			routes:[
				{
					path:'/:hash',//
					component:box,
					name:'home'
				},{
					path:'*',
					redirect:'/home'
				}
			]
		})
		
		var vm = new Vue({
			el:'#app',
			data:{
				flag:true,
			},
			router,
		})
		
		
	</script>

