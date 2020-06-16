<template>
  <div class="employer">
      <div class="employer-box">
      <div class="employer-center">
        <div class="employer-center-center">
          <h1>雇主保障</h1>
          <p>多项雇主权利保障措施，保证金赔付，极大程度上保证兼职效果，平台交易更放心。</p>
          <div class="employer-line"></div>
          <div class="employer-content-box">
            <ul>
              <li>
                <div class="employer-border">
                  怕技术水平不过关?
                </div>
                <div class="employer-triangle"></div>
                <div class="employer-img"></div>
                <br>
                <h2>1小时试用</h2>
                <p>先到班1小时试用不满意可无条件退款</p>
              </li>
              <li>
                <div class="employer-border">
                  技术兼职拖延时间？
                </div>
                <div class="employer-triangle"></div>
                <div class="employer-img2"></div>
                <br>
                <h2>保证完成</h2>
                <p>约定兼职时间内按质完成工作并修改到满意为止</p>
              </li>
              <li>
                <div class="employer-border">
                  抄袭、剽窃来的作品？
                </div>
                <div class="employer-triangle"></div>
                <div class="employer-img3"></div>
                <br>
                <h2>保证原创</h2>
                <p>保证向雇主提供原创作品（设计类适用）</p>
              </li>
              <li>
                <div class="employer-border">
                  付款后作品不能用?
                </div>
                <div class="employer-triangle"></div>
                <div class="employer-img4"></div>
                <br>
                <h2>保证维护</h2>
                <p>保证向雇主提供一个月免费维护（开发类适用）</p>
              </li>
              <li>
                <div class="employer-border">
                  拿不到源码做二次开发？
                </div>
                <div class="employer-triangle"></div>
                <div class="employer-img5"></div>
                <br>
                <h2>保证提供源码</h2>
                <p>保证提供可供二次开发使用的完整程序源码（开发类适用）</p>
              </li>
              <li>
                <div class="employer-border">
                  担心推广达不到效果？
                </div>
                <div class="employer-triangle"></div>
                <div class="employer-img6"></div>
                <br>
                <h2>保证推广效果</h2>
                <p>保证提供符合约定的真实的推广效果（推广类适用）</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Employer',
  data () {
    return {    
    }
  }
}
</script>
<style scoped>
  .employer-box{
    width: 100%;
    height: 780px;
  }
  .employer-center{
    height: 400px;
    width: 100%;
    padding: 100px 0;
    text-align: center;
  }
  .employer-center-center{
    width:1200px;
    height: 100%;
    margin: 0 auto;
  }
  .employer-center-center>h1{
    color: rgb(83, 83, 83);
  }
  .employer-center-center>p{
    color: rgb(156, 156, 156);
  }
  .employer-line{
    height: 50px;
  }
  .employer-content-box{
    width: 100%;
    height: 480px;
  }
  .employer-content-box>ul{
    list-style: none;
  }
  .employer-content-box>ul>li{
    float: left;
    width: 400px;
    height: 240px;
  }
  .employer-content-box>ul>li>div{
        margin: 0 auto;
  }
   .employer-content-box>ul>li>p{
        color: rgb(163, 163, 163);
        font-size: 14px;
  }
  .employer-border{
    width: 320px;
    height: 50px;
    border: 2px solid rgb(0, 162, 255);
    line-height: 50px;
    text-align: center;
    font-size: 20px;
  }
  .employer-triangle{
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 8px;
    border-color: rgb(0, 162, 255) transparent transparent transparent;
  }
  .employer-img{
    width: 60px;
    height: 60px;
    background: url(../assets/img/untitled.png);
    background-position: 4px 107px;
  }
   .employer-img2{
    width: 60px;
    height: 60px;
    background: url(../assets/img/untitled.png);
    background-position: 4px 198px;
  }
   .employer-img3{
    width: 60px;
    height: 60px;
    background: url(../assets/img/untitled.png);
    background-position: 4px 289px;
  }
   .employer-img4{
    width: 60px;
    height: 60px;
    background: url(../assets/img/untitled.png);
    background-position: 4px 380px;
  }
   .employer-img5{
    width: 60px;
    height: 60px;
    background: url(../assets/img/untitled.png);
    background-position: 4px 471px;
  }
   .employer-img6{
    width: 60px;
    height: 60px;
    background: url(../assets/img/untitled.png);
    background-position: 4px 560px;
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
