//登入
function login(userId,password){

    // 参数校验一，字符类型
    var regex = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
        // regexOther = /\!| /g
    for(var i = 0 ; i < arguments.length ; i++){
        var a = HtmlUtil.htmlEncode(arguments[i]);
        if(regex.test(a)){
                showMessage('用户名或者密码含特殊字符')
                return
        }
    }
}

//防止css攻击（脚本攻击）
var HtmlUtil = {
        /*1.用浏览器内部转换器实现html转码*/
    htmlEncode:function (html){
        var temp = document.createElement ("div");
        (temp.textContent != undefined ) ? (temp.textContent = html) : (temp.innerText = html);
        var output = temp.innerHTML;
        temp = null;
        return output;
    },
    /*2.用浏览器内部转换器实现html解码*/
    htmlDecode:function (text){
        var temp = document.createElement("div");
        temp.innerHTML = text;
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }
};

function showMessage(info){
    //需要配合通用弹窗
    alert(info)
}