# computed
    	//计算属性不能手动修改数值.
		//如果需要手动修改计算属性,必须给计算属性设置setter和getter

		{{half}}

        var vm = new Vue({
			el:'#app',
			data:{
				msg:''
			},
			computed:{
				//计算属性的全写,可以在里面写setter和getter
				half:{
					get(){
						return this.msg/2;
					},
					set(val){
						//在计算属性内将计算属性的依赖this.msg的值更新为修改的值,这样才可以实现手动修改计算属性
						this.msg = val;
					}
				}
				//计算属性的简写,实际上是全写的getter(简写没有setter)
//				half(){
//					return this.msg/2;
//				}
			}
		})