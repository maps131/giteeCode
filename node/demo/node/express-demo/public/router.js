var express = require('express')
var msg = require('./msg.js')

var router = express.Router()

router.get('/',function(req,res){
    msg.find(function(err,msgs){
        if(err){
            return res.status('500').send('server error')
        }else{
            res.render('index.html',{
                infomation:msgs
            })
        }
    })
})

router.get('/news',function(req,res){
    res.render('news.html')   
})

router.post('/news',function(req,res){
    msg.save(req.body,function(err){
        if(err){
            console.log('保存失败')
        }else{
            console.log('成功')
            res.redirect('/')
        }
    })
})

module.exports = router

