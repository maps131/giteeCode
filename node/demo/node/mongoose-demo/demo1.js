const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//连接数据库
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});
//设计表结构
var Info = new Schema({
    name:{
        type:String,
        require:true
    },
    word:{
        type:String,
        require:true
    }
  });
//发布模型
const msg = mongoose.model('Info', Info);
//增加数据
// var admin = new msg({
//     name:'admin2',
//     word:'第二条信息'
// })

// admin.save(function(err,ret){
//     if(err){
//         console.log('保存失败')
//     }else{
//         console.log('保存成功')
//         console.log(ret)
//     }
// })
//查询
    //所有
msg.find(function(err,ret){
    if(err){
        console.log('出错')
    }else{
        console.log(ret)
    }
})
    //条件
// msg.find({
//     name:'admin'
// },function(err,ret){
//     if(err){
//         console.log('出错')
//     }else{
//         console.log(ret)
//     }
// })
//删除
// msg.remove({name:'admin2'},function(err,ret){
//     if(err){
//         console.log('删除失败')
//     }else{
//         console.log('删除成功')
//         console.log(ret)
//     }
// })
//更新
// msg.findByIdAndUpdate('5ddd2631d749901d60e3d8b7',{word:'更新的第一条信息'},function(err,ret){
//     if(err){
//         console.log('更新失败')
//     }else{
//         console.log('更新成功')
//         console.log(ret)
//     }
// })
//更新
// var wherestr = {'name': 'admin2'};

// // 执行更新数据
// var updatestr = {'word': '更新的信息'};

// msg.update(wherestr, updatestr, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(res);
//   }
// });