<template>
  <div class="footer">
    <div class="footer-box">
      <div class="footer-center">
        <div>
          <h2>新手指南</h2>
          <br>
          <p><span>注册新用户</span><span>雇主入门</span></p>
          <p><span>技术兼职入门</span><span>规则中心</span></p>
        </div>
        <div>
          <h2>我是雇主</h2>
          <br>
          <p><span>发布招聘需求</span><span>挑选技术兼职</span></p>
        </div>
        <div>
          <h2>我是技术兼职</h2>
          <br>
          <p><span>发布简历</span><span>投递职位</span></p>
        </div>
         <div>
          <h2>交易保障</h2>
          <br>
          <p><span>乐鱼担保交易</span><span>雇主保障</span></p>
          <p><span>众包平台</span><span></span></p>
        </div>
      </div>
      <div class="bottom-box">
        <div class="bottom-center">
          <p><span>关于我们</span><span>企业文化</span><span>联系方式</span><span>使用协议</span><span>网站地图</span>
          <span>友情链接</span><span>网站留言</span>
          </p>
          <p>©2019 乐鱼网 All Rights Reserved 鲁ICP备15008460号</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-box{
    height: 220px;
    width: 100%;
    background: #606873;
    float: left;
  }
  .footer-center{
    width: 1200px;
    height: 120px;
    padding: 50px 0;
    margin: 0 auto;
  }
  .footer-center>div{
    width: 280px;
    height: 100%;
    padding: 0 10px;
    float: left;
    text-align: center;
    color: white;
  }
   .footer-center>div>p>span{
     display: inline-block;
     margin: 5px 20px;
     cursor: pointer;
   }
   .bottom-box{
    height: 100px;
    padding: 20px 0;
    width: 100%;
    float: left;
   }
   .bottom-center{
     height: 80px;
     width: 1200px;
     padding: 10px 0;
     margin: 0 auto;
     text-align: center;
     color: #606873;
   }
    .bottom-center>p>span{
      margin: 10px 20px;
      font-size: 14px;
    }
     .bottom-center>p{
       margin: 10px 0;
       font-size: 12px;
     }
</style>
