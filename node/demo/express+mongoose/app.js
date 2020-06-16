var express = require('express')
var router = require('./public/router')
var bodyParser = require('body-parser')

var app = express()

app.engine('html', require('express-art-template'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.all("*", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("X-Powered-By", ' 3.2.1');
    next();
})

app.use(router)

app.listen(5000, function () {
    console.log('server has start...')
})

module.exports = app
// npm install @babel/core @babel/register --save-dev

// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
//     //判断是ios用户的时候执行某种操作
// } else if (/(Android)/i.test(navigator.userAgent)) {
//     //判断是安卓用户的时候执行某种操作
// }

// document.addEventListener('plusready', function () {
//     var webview = plus.webview.currentWebview();
//     plus.key.addEventListener('backbutton', function () {
//         webview.canBack(function (e) {

//             if (that.$store.state.return == 1) {
//                 webview.back();
//             } else if (that.$store.state.return == 2) {
//                 that.$router.go(-2);
//             } else if (that.$store.state.return == 3) {
//                 that.$router.push('/Project');
//             } else if (that.$store.state.return == 4) {
//                 if (that.$store.state.dashboard.amr) {
//                     that.$store.state.dashboard.amr.stop();
//                     that.$store.commit('amr', {
//                         "amr": NaN
//                     });
//                 };
//                 webview.back();
//             } else if (that.$store.state.return == 0) {
//                 //首页返回键处理
//                 //处理逻辑：1秒内，连续两次按返回键，则退出应用；
//                 var first = null;
//                 plus.key.addEventListener('backbutton', function () {
//                     //首次按键，提示‘再按一次退出应用’
//                     if (!first) {
//                         first = new Date().getTime();
//                         State(2, '再按一次退出应用')
//                         setTimeout(function () {
//                             first = null;
//                         }, 1000);
//                     } else {
//                         if (new Date().getTime() - first < 1500) {
//                             plus.runtime.quit();
//                         }
//                     }
//                 }, false);
//             };
//         });
//     });
// });