function Reqiure(params){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: params.url,
            type: params.type, 
            data:params.data,
            success: function (result) {
                resolve(result)
            },
            error:function(){ 
                reject('请求失败')
            }
        })
    })
}