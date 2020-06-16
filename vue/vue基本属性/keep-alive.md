# keep-alive
    	动态组件在切换的过程中，组件是会被重复创建和销毁的。这样会导致组件的created等钩子函数重复执行。
//		组件重复创建和销毁 -> 开销大，性能不好，应该让这个组件可以复用。
//		keep-alive -> 可以让其内部的动态组件可以实现复用.不会重复被创建和销毁.
//		keep-alive -> 虚拟(假象) -> 没有template,也不会在页面显示.(不会变成真实的DOM节点)		
//		被复用的组件的状态(数据),也得到保留,视图也得到了保留.


# 特有的两个钩子
	//当动态组件被显示(激活)时触发activated
			activated(){
				//每次组件切换回来时,都把color变成最开始的颜色.
				this.color = 'red';
				console.log('组件激活');
			},
			//当动态组件被隐藏(移除)时触发deactivated
			deactivated(){
				console.log('组件移除');
			}