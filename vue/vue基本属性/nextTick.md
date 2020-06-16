# nextTick
    fn(){
					//数据变化不会马上导致视图变化,这是一个异步操作
					this.msg = '222222';
					this.str = '333333';
					//视图没有更新完毕就打印视图的内容,只能显示变化之前的内容
					//console.log(this.$refs.div1.innerText);//11111
					
					//本次点击事件导致的视图更新完成之后会自动触发nextTick的回调函数.
					//只会触发一次.本次的视图更新完毕之后就再也不触发了.
					this.$nextTick(function(){
						console.log(this.$refs.div1.innerText);
					})					
				}