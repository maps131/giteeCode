# render
//		render函数 -> 用于代替template属性,为组件生成模板
//		render函数需要return虚拟节点代替模板。
//		虚拟节点需要调用render的回调函数createdElement。这个回调函数，习惯写h。
//		render内的this也指向组件实例.
//		如果render和template同时存在,render替换template

	render:function(createElement){
				return createElement('div',{attrs:{id:'qwe'},class:{active:true},style:{width:'100px',height:'100px'
				,background:'red'}},'sdds');
			},