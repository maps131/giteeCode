# defineProperty方法

vue实现数据驱动(数据更新导致视图更新)的最底层核心方法 -> defineProperty方法

js对象的属性有4中描述(值是什么,可以修改吗,可以删除吗,可以枚举吗).

如何查找任意对象的任意属性的4种描述? -> Object.getOwnPropertyDescriptor(对象名,属性名).

如何修改任意对象的任意属性的4种描述? -> Object.defineProperty(对象名,属性名,描述对象);

	var Des = Object.getOwnPropertyDescriptor(oYm,'name');
		console.log(Des)
		 
		Object.defineProperty(oYm,'name',{
			enumerable:false,
			value:'范冰冰',
			
			//getter函数 -> 每次name的属性被访问都会触发.
			get(){},
			//setter函数 -> 每次name的属性被修改都会触发.
			set(){},
		})

# defineProperty新视图
var data = {
			msg:'我要动起来',
			str:'哈哈哈'
		}

		// 全局变量存msg的默认值，这样可以在设置了setter和getter后让msg有默认值。
		var val = data.msg;
		
		//如果一个对象的属性设置了setter和getter,那么它的属性值就必须通过getter返回。
		//给msg设置了属性变化的监听函数setter(数据监听),当msg变化时视图就会更新.
		//str没有设置数据监听,因此str变化视图不会更新..
		//vue的数据变化不会导致视图变化,很有可能就是这个数据没有设置setter.
		Object.defineProperty(data,'msg',{
			get(){
				console.log('msg被访问了');
				return val
			},
			set(newVal,oldVal){
				//让新变化的值变成msg的属性值。
				val = newVal;
				console.log('msg变化了');
				console.log('msg变成了'+newVal);
				oDiv.style.background = 'red';
			}
		})

# 批量给对象添加数据监听

	vue实例创建的过程中,对给参数的data属性的所有数据添加数据监听
		
//		var oDiv = document.getElementById("app");
		
//		function Vue(obj){
			
			//循环对象时,如果遇到的属性值是obj类型,就再给这个对象的所有属性添加一次监听.依次类推
			//给obj.data的所有属性添加数据监听,如果遇到属性值是obj类型的就递归添加监听
//			watch(obj.data);
			
			//给vm实例的$data属性赋值为obj.data,让他们表示同一个对象.
			//这样两个引用的属性都有了监听.
//			this.$data = obj.data;
//		}
		
//		function watch(obj){
			//循环传入的对象的所有属性,添加监听.
//			for(var prop in obj){				
//				let val = obj[prop];				
//				Object.defineProperty(obj,prop,{
//					get(){
//						return val;
//					},
//					set(newVal){
//						val = newVal;
//						oDiv.style.background = 'red';
//					}
//				})
				//如果当前的属性是对象,再递归给这个属性对象设置监听
//				if(typeof val == 'object'){
//					watch(obj[prop]);
//				}
//			}
//		}
		
		var vm = new Vue({
			el:'#app',
			data:{
				msg:'999',
				str:'8888',
				obj:{}
			}
		})