# build
在根目录创建vue.config.js
```js
module.exports = {
    // 选项...
    productionSourceMap: false,
    publicPath: '',
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
                'plugins': '@/plugins',
            }
        }
    }
}
```