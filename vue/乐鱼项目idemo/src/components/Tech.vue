<template>
  <div class="tech">
    <div class="tech-empty"></div>
    <div class="tech-choose-box">
      <div class="tech-choose-center">
        <div class="tech-choose-site">
          <div class="tech-choose-site-content-box"><span>{{$store.state['choosedata']}}</span>
            <div class="tech-choose-site-content">
              <div>
                <ul @click="choose">
                <li>全部</li>
                <li>山东</li>
                <li>广东</li>
                <li>浙江</li>
                <li>河南</li>
                <li>南昌</li>
                <li>内蒙古</li>
                <li>哈尔滨</li>
                <li>北京</li>
                <li>上海</li>
                <li>天津</li>
                <li>重庆</li>
                <li>河北</li>
                <li>山西</li>
                <li>武汉</li>
                <li>深圳</li>
                <li>广州</li>
                <li>中山</li>
                <li>赣州</li>
                <li>南昌</li>
                <li>内蒙古</li>
                <li>哈尔滨</li>
                <li>北京</li>
                <li>上海</li>
                <li>天津</li>
                <li>重庆</li>
                <li>河北</li>
                <li>山西</li>
                <li>武汉</li>
                <li>深圳</li>
                <li>广州</li>
                <li>中山</li>
                <li>赣州</li>
                <li>南昌</li>
                <li>内蒙古</li>
                <li>哈尔滨</li>
              </ul>
              </div>             
            </div>
          </div>
          <div class="tech-choose-search">
            <form>
                <input class="changeinput" type="text" placeholder="请输入关键字搜索" @focus="changewidth" @blur="changewidth2" />
                <button type="submit" class="icon-search" ></button>
            </form>          
          </div>
        </div>
        <div class="tech-choose-category">
          <div>
            <ul>
              <li>雇主保障 :</li>
              <li class="tech-choose-color">全部</li>
              <li>1小时不满意退款</li>
              <li>保证完成</li>
              <li>保证原创</li>
              <li>保证维护</li>
              <li>提供源码</li>
              <li>保证推广效果</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>兼职角色 :</li>
              <li class="tech-choose-color">全部</li>
              <li>移动开发</li>
              <li>后端开发</li>
              <li>前端开发</li>
              <li>运维人员</li>
              <li>DBA</li>
              <li>视觉设计</li>
              <li>交互设计</li>
              <li>产品经理</li>
              <li>交互设计</li>
              <li>运营人员</li>
              <li>测试人员</li>
              <li>其他</li>
            </ul>
          </div>
        </div>
        <div class="talents-button-box">
            <button class="talents-button1">登记技术简历</button>
            <button class="talents-button2">发布招聘需求</button>
        </div>
      </div>
    </div>
    <Techscreen></Techscreen>
    <Techdata class="techdata"></Techdata>
  </div>
</template>

<script>
import Techscreen from './Techscreen'
import Techdata from './Techdata'

export default {
  name: 'Tech',
  data () {
    return {
      ad:'',
    }
  },
  components:{
    Techscreen,
    Techdata,
  },
  methods: {
    changewidth(){
        $('.changeinput').eq(0).css('width','600px').css('box-shadow',"0px 0px 4px rgb(1, 120, 255)");
    },
    changewidth2(){
        $('.changeinput').eq(0).css('width','500px').css('box-shadow',"none");
    },
    choose(ev){
      if("LI" == ev.target.nodeName){
        this.$store.commit('chooseData',ev.target.innerText)
        this.$store.commit('chooseDatar',"address")
        console.log(this.$store.state['datar'])
        // console.log(this.$store.state['choosedata']) 
      }    
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tech{
  background: #ebeced;
}
.tech-empty{
  height: 60px;
  width: 100%;
}
.tech-choose-box{
  width: 1200px;
  height: 280px;
  border-radius: 5px;
  box-shadow: 0px 1px 4px 2px rgb(206, 206, 206);
  background: white;
  margin: 0 auto;
  margin-bottom: 30px;
}
.tech-choose-center{
  width: 1160px;
  height: 240px;
  padding: 20px 20px;
}
.tech-choose-site{
  height: 50px;
  width: 100%;
  font-size: 24px; 
  border-bottom: 1px solid rgb(182, 182, 182); 
  position: relative; 
}
.tech-choose-site>div{
  float: left;
  position: relative;
}
.tech-choose-site>.tech-choose-search{
  float: right;
}
.tech-choose-site>.tech-choose-search input{
  width: 500px;
  height: 30px;
  border-radius: 20px;
  border-style: none;
  border: 1px solid rgb(201, 201, 201);
  background: #ebebeb;
  box-shadow: 0px 0px 4px rgb(179, 179, 179) inset;
  text-indent: 20px;
  outline: none;
  transition: 0.3s;
}
.tech-choose-site>.tech-choose-search button{
  position: absolute;
  top: 5px;
  right: 0;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background: transparent;
  outline: none;
  font-size: 18px; 
}
.tech-choose-site>div>.tech-choose-site-content{
  width: 400px;
  height: 200px;
  border: 1px solid gainsboro;
  background: white;
  border-radius: 5px 5px 5px 5px;
  display: none;
  position: absolute;
}
.tech-choose-site-content-box>span{
  cursor: pointer;
}
.tech-choose-site-content-box:hover .tech-choose-site-content{
  display: block; 
}
.tech-choose-site-content>div>ul{
  list-style: none;
}
.tech-choose-site-content>div{
  width: 90%;
  height: 100%;
  margin: 0 auto;
}
.tech-choose-site-content>div>ul>li{
  float: left;
  color: rgb(4, 116, 214);
  font-size: 14px;
  padding: 5px;
  cursor: pointer;
}
.tech-choose-category{
  width: 100%;
  height: 100px;
  padding-top: 20px;
}
.tech-choose-category>div{
  width: 100%;
  height: 25px;
  padding: 10px 0;
}
.tech-choose-category>div>ul{
  list-style: none;
}
.tech-choose-category>div>ul>li{
  float: left;
  margin-right: 20px;
  font-size: 14px;
  color: rgb(4, 116, 214);
  cursor: pointer;
}
.tech-choose-category>div>ul>.tech-choose-color{
  color: #f89603;
}
.talents-button-box{
     width: 420px;
     height: 50px;
     margin: 10px auto 0;
  }
  .talents-button-box>button{
    width: 180px;
    height: 40px;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
  .talents-button-box>.talents-button1{
    background: linear-gradient(rgb(39, 126, 255),rgb(0, 73, 184))
  }
  .talents-button-box>.talents-button2{
    margin-left: 15px;
    background: linear-gradient(rgb(43, 179, 77),rgb(5, 114, 54))
  }
</style>
