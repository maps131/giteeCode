<template>
  <div class="talents">
    <div class="talents-box">
      <div class="talents-center">
          <div class="talents-center-center">
              <h1>人才来源</h1>
              <p>乐鱼网兼职技术人员来自各大互联网公司，普遍具有多年工作经验，平台严格把控人才入口，确保工作质量和效率。</p>
              <div class="talents-line"></div>
              <div class="talents-logo-box">
                <ul>
                  <li><img src="http://www.leyu.net/file/yi/images/i_baidu.jpg" alt=""></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_alibaba.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_tengxun.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_wangyi.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_jingdong.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_sina.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_360.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_souhu.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_xiaomi.jpg"></li>
                  <li><img src="http://www.leyu.net/file/yi/images/i_suning.jpg"></li>
                </ul>
              </div>
              <div class="talents-button-box">
                <button class="talents-button1">浏览技术人才</button>
                <button class="talents-button2">发布招聘需求</button>
              </div>
          </div>       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Talents',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .talents-box{
      width: 100%;
      height: 600px;
    }
    .talents-center{
      height: 400px;
      width: 100%;
      padding: 100px 0;
      text-align: center;
    }
    .talents-center-center>h1{
      color: rgb(83, 83, 83);
    }
    .talents-center-center>p{
      color: rgb(156, 156, 156);
    }
    .talents-center-center{
      width:1200px;
      height: 100%;
      margin: 0 auto;
    }
    .talents-line{
      height: 30px;
    }
    .talents-logo-box{
      width: 100%;
      padding: 48px 0;
      height: 132px;
    }
    .talents-logo-box>ul{
      list-style: none;
    }
    .talents-logo-box>ul>li{
      width: 240px;
      height: 66px;
      float: left;
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
