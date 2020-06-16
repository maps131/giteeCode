# vueCLi4提供了专门的修改配置的文件——vue.config.js
> 在根目录创建
#### 用例
```js
    const CompressionWebpackPlugin = require('compression-webpack-plugin');//引入webpack的gzip打包插件
    const productionGzipExtensions = ['js', 'css'];
    module.exports = {
        // 选项...
        productionSourceMap: false,//取消生成map文件
        publicPath: './../',//打包后输出的路径
        // publicPath: '',
        configureWebpack: {
            resolve: {
                extensions: ['.js', '.json', '.vue', '.scss', '.css'],//cdn扩展接受的类型
                alias: {//配置别名，方便路径
                    'assets': '@/assets',
                    'common': '@/common',
                    'components': '@/components',
                    'network': '@/network',
                    'views': '@/views',
                    'plugins': '@/plugins',
                }
            },
            externals: {//导入外部js
                'vue': 'Vue',
                'vue-router': 'VueRouter',
                'element-ui': 'ELEMENT',
                'Axios':'axios',
                'hljs':'hljs',
                'marked':'marked'
            },
            plugins: [
                new CompressionWebpackPlugin({//配置打包成gzip,其实后端可以搞，读取的时候打包返回gzip或者br
                    filename: '[path].gzip[query]',   // 提示compression-webpack-plugin@2.0.0的话filename改为asset
                    algorithm: 'gzip',
                    test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                    threshold: 10240, //内容超过10KB进行压缩
                    minRatio: 0.8 //能压缩到0.8比例以下的才压
                })
            ],
            // ...其余啥配置可以到官网查看
        }
    }
```