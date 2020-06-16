	<!--两个视图切换时,如果有相同的html部分,那么默认是会复用这部分html的-->
			<!--如果希望两个html部分不复用,可以给元素添加key属性,然后填上不同的名字-->
			
			<div v-if='flag'>
				<input type="text" placeholder="账号" value="" key='up' />
				<input type="password" placeholder="密码" value="" />
				<p contenteditable="true">dddddd</p>
			</div>

			<div v-else>
				else,else
				<input type="text" placeholder="账号" value="" key='down' />
				<input type="password" placeholder="密码" value="" />
				<p contenteditable="true">zxzcxzcxz</p>
			</div>