const App = {
			template:`<div id='app'><p>{{msg}}</p></div>`,
			data(){
				return {
					msg:'哈哈哈哈'
				}
			}
		}
		
		var vm = new Vue({
			
			el:'#app',
//			使用子组件App的模板作为当前的视图模板,这时vm实例呈现的是子组件视图。子组件不能默认方法vm的data属性
			// template:'<App />',
//			template:'<App></App>',
			template:'<div is="App"></div>',

//			render:function(h){
//				return h(App)
//			},
			components:{
				App,
			},

//			通过render函数编译子组件App的template模板.将编译生成的虚拟节点作为vm的视图
			render:(h)=>h(App),
			<!-- components:{App} -->
		})