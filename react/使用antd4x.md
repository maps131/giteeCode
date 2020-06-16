# 安装
	>	yarn add antd
# 按需加载样式
	>	 yarn add babel-plugin-import	
	>>创建.balbelrc然后把以下代码放进去（
		{
  			"plugins": [
    			["import", {
     		 	"libraryName": "antd",
     		 	"libraryDirectory": "es",
      			"style": "css" // `style: true` 会加载 less 文件
    			}]
  			]
		} )	
	>>然后在node_modules/react-scripts/config/webpack.config.js中把babelrc: true：
		
##  还是按antd官网给的方法好，不然可能出问题