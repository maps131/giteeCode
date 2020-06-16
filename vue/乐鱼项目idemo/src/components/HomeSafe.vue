<template>
  <div class="safe">
      <div class="safe-box">
      <div class="safe-center">
        <div class="safe-center-center">
          <h1>担保交易</h1>
          <p>薪酬先支付到乐鱼网，确认完工后，再支付给人才。按需支付，未工作时间无忧退款。如发生纠纷，乐鱼网介入调查仲裁保证服务满意度。</p>
          <div class="safe-line"></div>
          <div class="safe-img-box">
            <img src="../assets/img/stepi.png" alt="">
          </div>
          <div class="safe-content-box">
            <div class="safe-content-title">
              <ul>
                <li>托管雇佣金
                  <p>托管雇佣金先支付薪酬到乐鱼网,确认完工，满意后再付款</p>
                </li>
                <li>签订合同
                  <p>官方提供第三方交易协议保障双方权益</p>
                </li>
                <li>工作验收
                  <p>雇主对兼职工作进行验收</p>
                  <br>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Safe',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.safe-box{
    width: 100%;
    height: 500px;
  }
  .safe-center{
    height: 400px;
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }
  .safe-center-center{
    width:1200px;
    height: 100%;
    margin: 0 auto;
  }
  .safe-center-center>h1{
    color: rgb(83, 83, 83);
  }
  .safe-center-center>p{
    color: rgb(156, 156, 156);
  }
  .safe-line{
      height: 60px;
  }
  .safe-img-box{
    margin: 0 auto;
  }
  .safe-content-title{
    margin: 0 auto;
    height: 30px;
  }
  .safe-content-title>ul{
    list-style: none;
    margin-left: -60px;
  }
   .safe-content-title>ul>li{
    width: 200px;
    display: inline-block;
    margin: 0 10px;
  }

   .safe-content-title>ul>li>p{
     font-size: 12px;
     color: rgb(192, 192, 192);
    margin: 0 20px;
  }
  .safe-content-title>ul>li:nth-child(3){
    position: relative;
    left: 20px;
  }
</style>
