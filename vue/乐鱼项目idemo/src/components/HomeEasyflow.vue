<template>
  <div class="easyflow">
     <div class="easyflow-box">
      <div class="easyflow-center">
        <div class="easyflow-center-center">
          <h1>快速到班</h1>
          <p>简化预约流程，为有需求的团队节省预约时间，极大限度的满足快速到班的需求，兼职时间灵活，双方可自由约定。</p>
          <div class="easyflow-line"></div>
          <div class="easyflow-img-box">
            <div class="easyflow-img-center">
              <div>
                <div class="easyflow-img"></div>
                <div class="easyflow-imgA"></div>
                <div class="easyflow-imgA-shadow"></div>
                <p>极速沟通</p>
              </div>
              <div>
                <div class="easyflow-img2"></div>
                <div class="easyflow-imgA"></div>
                <div class="easyflow-imgA-shadow"></div>
                <p>公司坐班</p>
              </div>
            </div>            
          </div>
          <div class="talents-button-box">
            <button class="talents-button1">发布招聘需求</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Easyflow',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .easyflow-box{
    width: 100%;
    height: 680px;
    background: #f1f5f7;
  }
  .easyflow-center{
    height: 400px;
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }
  .easyflow-center-center{
    width:1200px;
    height: 100%;
    margin: 0 auto;
  }
  .easyflow-center-center>h1{
    color: rgb(83, 83, 83);
  }
  .easyflow-center-center>p{
    color: rgb(156, 156, 156);
  }
  .easyflow-line{
      height: 30px;
    }
  .easyflow-img-box{
      width: 100%;
      padding: 48px 0;
      height: 250px;
  }
  .easyflow-img-center{
    height: 250px;
    width: 600px;
    margin: 0 auto;
  }
  .easyflow-img-center>div{
    width: 230px;
    height: 230px;
    padding: 10px;
    float: left;
    position: relative;
  }
  .easyflow-img-center>div>p{
    position: absolute;
    bottom: 0;
    margin-bottom: 40px; 
    margin-left: 83px;
    color: rgb(158, 158, 158);
  }
  .easyflow-img-center>div:nth-child(2){
    float: right;
  }
  .easyflow-img{
    position: absolute;
    width: 80px;
    height: 80px;
    background-image: url(../assets/img/tech-03.svg);
    z-index: 2;
    margin-left: 75px; 
    margin-top: 30px;
  }
  .easyflow-imgA{
    position: absolute;
    width: 120px;
    height: 120px;
    background-color: #dfecf0;
    border-radius: 60px; 
    z-index: 1;
    margin-left: 55px; 
    margin-top: 10px; 
  }
  .easyflow-imgA-shadow{
    position: absolute;
    width: 140px;
    height: 140px;
    background-color: #ebf1f3;
    border-radius: 70px;
    margin-left: 45px;
    animation: change 2s linear infinite;
  }
  @keyframes change{
    0%{
      margin-left: 55px; 
      margin-top: 10px; 
      width: 120px;
      height: 120px;
    }
    50%{
      margin-left: 45px;
      margin-top: 0px; 
      width: 140px;
      height: 140px;
    }
    100%{
      margin-left: 55px; 
      margin-top: 10px; 
      width: 120px;
      height: 120px;
    }
  }
  .easyflow-img2{
    position: absolute;
    width: 80px;
    height: 80px;
    background-image: url(../assets/img/tech-01.svg);
    z-index: 2;
    margin-left: 75px; 
    margin-top: 30px;
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
