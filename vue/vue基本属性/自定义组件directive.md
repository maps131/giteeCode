//自定义指令 -> 封装DOM操作。
		//el -> 自定义指令绑定的元素
		
//		Vue.directive('color',function(el,binding){
//			console.log(binding);
//			binding.value -> 绑定自定义指令的表达式的值.
//			el.style.background = binding.value;
//		});
		
		var vm = new Vue({
			el:'#app',
			data:{
				color:'green',
			},
//			mounted(){
//				this.$refs.div.style.background = this.color;
//			},
//			局部自定义指令.
			directives:{
				color(el,binding){
					console.log(binding)
					el.style.background = binding.value;
				}
			}
		})