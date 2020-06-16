# set方法
    var vm = new Vue({
			el:'#app',
			data:{
				obj:{},
			},
			methods:{
				fn(){
					//初始化时obj的name事件并没有获得数据监听的setter.
					//通过vm实例的$set方法来强制给obj的name属性添加数据监听.
					//this.$set(this.obj,'name','杨幂');
					
					//通过构造函数Vue的静态方法set来添加数据监听.
					Vue.set(this.obj,'name','杨幂');
				}
			}
		})