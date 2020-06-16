var Maps131 = {
    jsonp:function(params){
        params = params || {};
        params.data = params.data || {};
        mian(params)
        //script跨域
        function mian(params){
            //创建回调函数名
            var callBack = 'Mjsonp'+ Maps131.random();
            params.data['callback'] = callBack;
            //处理参数
            var data = Maps131.formateParams(params.data),
            //script插入
            head = document.getElementsByTagName('head')[0],
            script = document.createElement('script');
            head.appendChild(script);
            script.src = params.url + '?' + data;
            //全局创建回调
            window[callBack] = function (result) {
                head.removeChild(script);
                clearTimeout(script.timer);
                window[callBack] = null;   　　
                //请求成功　　　　 
                params.success && params.success(result);
            }
            //超时处理
            if (params.timeout) {
                script.timer = setTimeout(function () {
                    window[callBack] = null;
                    head.removeChild(script);
                    //请求失败
                    params.error && params.error({
                        info: 'Timeout'
                    });
                }, params.timeout);
            }
        };
    },
    cors:function(params){
        params = params || {};
        params.data = params.data || {};
        params.contentType = params.contentType || 'application/x-www-form-urlencoded';
        params.data.timestamp = Maps131.random();
        var data = Maps131.formateParams(params.data);
        //原生ajax
        var obj = new XMLHttpRequest();
        obj.open(params.type, params.url, true);
        obj.setRequestHeader("Content-Type", params.contentType);
        obj.send(data);
        obj.onreadystatechange = function () {
            if (obj.readyState == 4 && (obj.status == 200)) {
                params.success && params.success(obj.responseText)
            }
        }
    },
    //处理参数
    formateParams:function(data){
        var arr = [];
        for (var param in data) {
            arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
        }
        return arr.join('&');
    },
    //获取随机数戳，防止缓存
    random:function(){
        return Math.floor(Math.random() * 100000);
    },
    //promisejsonp
    promiseJsonp:function(params){
        return new Promise(function(resolve,reject){
            Maps131.jsonp({
                url: params.url,
                type: params.type, 
                data:params.data,
                success: function (result) {
                    resolve(result)
                },
                error:function(){ 
                    reject('error')
                }
            })
        })
    },
    //promiseCors
    promiseCors:function(params){
        return new Promise(function(resolve,reject){
            Maps131.cors({
                url: params.url,
                type: params.type, 
                data:params.data,
                success: function (result) {
                    resolve(result)
                },
                error:function(){ 
                    reject('error')
                }
            })
        })
    },
    //url参数获取
    getUrlParams:function(params){
        var urlParams = window.location.search.substring(1),
            arrList,
            ojectParams = {},
            arrParams = urlParams.split("&");
        for(var i = 0 ; i < arrParams.length ; i++){
            arrList = arrParams[i].split("=")
            ojectParams[arrList[0]] = arrList[1]
        }

        if(!params){
            return ojectParams
        }else if(typeof(params) == 'string'){
            return ojectParams[params]
        }else if(Object.prototype.toString.call(params) === '[object Object]'){              
            for (var param in params){
                if(params.hasOwnProperty(param) && (!ojectParams.hasOwnProperty(param) ))
                    ojectParams[param]=params[param];
            }
            return ojectParams
        }
    },
    //参数过滤
    removeParams:function(params,array){
        for(var i = 0 ; i < array.length ; i++){
            if(params[array[i]]) delete params[array[i]]
            
        }
        
        for(var param in params){
            var oparam = Number(params[param])
            if (!isNaN(oparam)) params[param] = oparam
        }

        return params
    }
}

