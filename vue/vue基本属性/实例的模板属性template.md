# template
    	var vm = new Vue({
			//确定新视图的插入点。
			//如果实例化的过程中没有el属性，那么会再检测vm.$mount有没有调用，如果没有，则实例化失败。
			//el:'#app',
			//确定新视图的DOM结果
			//如果没有template属性。那么默认用el所表示的div作为虚拟节点的模板。
			template:'<p id="app"><span>{{msg}}</span></p>',
			data:{
				msg:'哈哈哈哈'
			}
		})
		//因为实例化的过程中没有el属性，需要手动告知新视图的挂载点。
		vm.$mount(document.getElementById("app"));
