
export default {
    //适配视口
    screenAdaptation() {
        // screenW = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 
        //根据视口高改变
        var screenH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        style,
        zoomNum = screenH/975;
        if(zoomNum < 0.6){
            zoomNum = 0.6
        }
        //判断是否为火狐浏览器
        if(navigator.userAgent.indexOf("Firefox")>0){             
            style = {transform:'scale('+zoomNum+')'}
        }else{           
            style = {zoom:zoomNum}           
        }
        return style
    }
}



    

