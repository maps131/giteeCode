<template>
  <div class="parttime">
    <div class="part-time-box">
      <div class="part-time-center">
        <div class="part-time-center-center">
          <h1>兼职保障</h1>
          <p>兼职就选乐鱼网，交易有保障，乐鱼网为您解决交易六大难题，解决您的后顾之忧。</p>
          <div class="part-time-line"></div>
          <div class="part-time-content-box">
            <div>
              <img src="../assets/img/productivity.png" alt="">
              <p>乐鱼网对需求严格筛选和沟通后再做推荐，保护个人隐私。双方签订兼职合同，技术兼职不必担心需求变化。</p>
            </div>
            <div>
              <img src="../assets/img/clarity.png" alt="">
              <p>技术兼职直接和雇主沟通，充分了解所要兼职的内容，线上交易乐鱼网严格把控交易环节，保障兼职权益。</p>
            </div>
            <div>
              <img src="../assets/img/peace2.png" alt="">
              <p>乐鱼网担保交易，先支付后工作，保证劳动回报。坐班时间双方约定，弹性工作</p>
            </div>
          </div>
          <div class="talents-button-box">
            <button class="talents-button1">登记技术简历</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parttime',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .part-time-box{
    width: 100%;
    height: 520px;
    background: #f1f5f7;
  }
  .part-time-center{
    height: 400px;
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }
  .part-time-center-center{
    width:1200px;
    height: 100%;
    margin: 0 auto;
  }
  .part-time-center-center>h1{
    color: rgb(83, 83, 83);
  }
  .part-time-center-center>p{
    color: rgb(156, 156, 156);
  }
  .part-time-line{
      height: 60px;
  }
  .part-time-content-box{
    width: 100%;
    height: 160px;
  }
  .part-time-content-box>div{
    height: 100%;
    width: 380px;
    padding: 0 10px;
    float: left;
  }
  .part-time-content-box>div>p{
    color: rgb(194, 194, 194);
    font-size: 14px;
  }
  .talents-button-box{
     width: 420px;
     height: 50px;
     margin: 0 auto;
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
