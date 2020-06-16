//公共方法
export default {
    formateData(time){
        if(!time) return '';
        let date = new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate() +' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds()
    }

}