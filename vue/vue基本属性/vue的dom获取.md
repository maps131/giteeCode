# ref和$refs
<div ref='div1'>{{msg}}</div>
mounted(){
				this.$refs.div1.style.background = 'red';
				this.$refs.div2.style.background = 'blue';
			},