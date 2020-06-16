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
    },
    //处理姓名头像
    handelAlbum:function(params){
        var friendList  = params.friendList || [],
            accontType = params.accontType;

        for(var i = 0 ; i < friendList.length ; i++){
            //姓名
            if(friendList[i][params.nickName] == ''){
                friendList[i][params.nickName] = ' ';
            }
            var albumUrl = friendList[i][params.albumUrl];
            //头像
            if(albumUrl.substring(0,5) != 'https'){
                albumUrl = 'https'+ albumUrl.substring(4)           		
            }
            
            //默认头像
            if(albumUrl == 'https'){
                albumUrl = '//game.gtimg.cn/images/fish/act/a20190428hsRank/img_erji_touxiang2.png'
            }else{
                //微信         
                if(accontType == 1){
                    if(albumUrl.substring(albumUrl.length-2) == '/0'){
                    }else if(albumUrl.substring(albumUrl.length-1) == '/'){
                        albumUrl = albumUrl+'0'
                    }else{
                        albumUrl = albumUrl+'/0'
                    }
                //QQ
                }else{               
                    if(albumUrl.substring(albumUrl.length-3) == '100'){
                    }else{
                        albumUrl = albumUrl+'100'
                    }
                }
            }
            friendList[i][params.albumUrl] = albumUrl;
        }
        return friendList
    },
    //构建dom
    buildDom:function(params){
        if(!window['recordDom']){
            window['recordDom'] = {};
            window['changeList'];
        }
        var fragMent = '',
            friendList = params.friendList || [];

        if(!recordDom[params.templateId]){
            var domString_1 = document.getElementById(params.templateId).innerHTML,
                //处理空格换行
                domString_2 = JSON.stringify(domString_1).replace(/(\\t)|(\\n)|(\\)/g,''),
                //去除两边引号
                domString = domString_2.substr(1,domString_2.length-2);
                //获取需要修改的字符串
                changeList = domString.match(/\{{[^\}]+\}}/g) || [];
                for(var a = 0 ; a < changeList.length ; a++){
                    changeList[a] = changeList[a].replace(/({{ )|( }}|({{)|(}}))/g,'');
                    var content = "{{ " + changeList[a]  + " }}";
                    domString = domString.replace(new RegExp(content,'g'),changeList[a]);
                }
                //记录dom字符串
                recordDom[params.templateId] = domString
        }
        //创建dom树
        for(var b = 0 ; b < friendList.length ; b++){
            fragMent += handleContent(friendList[b])
        }
        //添加进html
        var boxDomId = document.getElementById(params.boxId);
        boxDomId.innerHTML = fragMent
        //修改内容
        function handleContent(c){
            var domTree = recordDom[params.templateId]
            for(var p = 0 ; p < changeList.length ;p++){
                domTree = domTree.replace(new RegExp(changeList[p],'g'),c[changeList[p]])
            }
            return domTree
        }
    },
    //切换好友
    refreshFriends:function(params){
        if(!window['refreshStart']){
            window['refreshStart'] = 0;
            window['refreshFlag'] = true;
        }
        var btn = document.getElementsByClassName(params.btnClass)[0];
        //干掉之前绑定的		
        btn.onllick = null;
        //设置初始值
        if(refreshFlag){
            refreshStart = params.startNum
            refreshFlag = false 
        }

        //绑定事件 
        btn.onclick = function(){
            if(refreshStart < params.friendNum-params.friendNum%5-5){

                refreshStart += params.showNum   
                params.methodFun(refreshStart,params.showNum)   

            }else if(refreshStart < params.friendNum-params.friendNum%5){

            if(params.friendNum%5 == 0 ){
                refreshStart = 0
                params.methodFun(refreshStart,params.showNum)
            }else{
                refreshStart = params.friendNum-params.friendNum%5

                params.methodFun(refreshStart,params.friendNum%5)
            }

            }else{
                refreshStart = 0
                params.methodFun(refreshStart,params.showNum) 
            }    
        }
    },
    //微信定向分享
    jumpWX:function(params){
        var shareData = '{"MsdkMethod":"WGSendToWeiXinWithUrl","scene":"0","title":"' + params.title + '","desc":"' + params.desc + '","url":"https://huanle.qq.com/m/mj/d/index.html","imgData":"' + params.imgbaseUrl + '","userOpenId":"' + params.friendOpenID + '"}';

        setTimeout(function(){
            msdkShare(shareData);
        },200)
    },
    //设置cookie
    setCookie:function(params){
        if( Object.prototype.toString.call(params)== '[object Array]' ){
            for(var i = 0 ; i < params.length ; i++){
                if(!params[i].name){
                    alert('缺少name')
                    return
                }else{
                    params[i].value = params[i].value || '';
                    params[i].expires = params[i].expires || -1;
                    params[i].path = params[i].path || '/';
                    params[i].domain = params[i].domain || null;
                    params[i].secure = params[i].secure || false;

                    var currentTime = new Date();
                    if(params[i].expires == -1){
                        currentTime.setDate(currentTime.getDate() - 1)
                    }else{
                        currentTime.setDate(currentTime.getDate() + params[i].expires)
                    }
                    document.cookie = params[i].name + '=' + params[i].value + ( params[i].expires ? ';expires=' + currentTime.toGMTString() : '') + (';path' + params[i].path ) + ( ';domain' + params[i].domain ) + ( ';secure' + params[i].secure )
                }
            }
        }else{
            if(!params.name){
                alert('缺少name')
            }else{
                params.value = params.value || '';
                params.expires = params.expires || -1;
                params.path = params.path || '/';
                params.domain = params.domain || null;
                params.secure = params.secure || false;

                var currentTime = new Date();
                if(params.expires == -1){
                    currentTime.setDate(currentTime.getDate() - 1)
                }else{
                    currentTime.setDate(currentTime.getDate() + params.expires)
                }
                document.cookie = params.name + '=' + params.value + ( params.expires ? ';expires=' + currentTime.toGMTString() : '') + (';path' + params.path ) + ( ';domain' + params.domain ) + ( ';secure' + params.secure )
            }
        }
    },
    //获取cookie
    getCookie:function(param){
        var cookieContent = document.cookie,
        cookieArray = cookieContent.split('; '),
        cookieObject = {};
        for(var i = 0 ; i < cookieArray.length ; i++){
            var tempArray = cookieArray[i].split('=');
            cookieObject[tempArray[0]] = tempArray[1]
        }
        if(param){
            return cookieObject[param]
        }else{
            return cookieObject
        }
    },
    clearCookie = (name)=>{
        setCookie(name, "", -1);
    }
}

