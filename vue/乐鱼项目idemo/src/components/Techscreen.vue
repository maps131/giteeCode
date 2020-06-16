<template>
  <div class="screen">
    <div class="screen-box">
      <div>
         <ul>
          <li>综合</li>
          <li class="screen-li-line"></li>
          <li>预约量</li>
          <li class="screen-li-line"></li>
          <li>技能经验</li>
          <li class="screen-li-line"></li>
          <li>价格</li>
          <li class="screen-li-line"></li>
          <li>个人认证</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Techscreen',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .screen-box{
    width: 1200px;
    margin: 0 auto;
    height: 50px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 1px 4px 2px rgb(206, 206, 206);
    margin-bottom: 30px;
  }
  .screen-box>div{
    width: 90%;
    height: 20px;
    padding: 15px 0;
    line-height: 20px;
    margin: 0 auto;
  }
  .screen-box>div>ul{
    list-style: none;
    float: right;
  }
  .screen-box>div>ul>li{
    float: left;
    font-size: 14px;
    color: rgb(4, 116, 214);
  }
   .screen-box>div>ul>.screen-li-line{
     width: 1px;
     height: 20px;
     background: rgb(4, 116, 214);
     margin: 0 20px;
   }
</style>
