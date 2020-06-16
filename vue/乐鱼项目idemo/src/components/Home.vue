<template>
  <div class="home">
  <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            <div class="swiper-text">预约互联网坐班兼职工程师</div>
            <div class="swiper-text2">预约知名互联网公司的产品、美工、前端、后端等技术人员到您的团队坐班兼职。</div>
            <div class="swiper-shadow"></div>
            <div class="swiper-img1"></div>      
        </div>
        <div class="swiper-slide">
            <div class="swiper-text">预约互联网坐班兼职工程师</div>
            <div class="swiper-text2">预约知名互联网公司的产品、美工、前端、后端等技术人员到您的团队坐班兼职。</div>
            <div class="swiper-shadow"></div>
            <div class="swiper-img2"></div> 
        </div>
        <div class="swiper-slide">
            <div class="swiper-text">预约互联网坐班兼职工程师</div>
            <div class="swiper-text2">预约知名互联网公司的产品、美工、前端、后端等技术人员到您的团队坐班兼职。</div>
            <div class="swiper-shadow"></div>
            <div class="swiper-img3"></div> 
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <HomeTalents></HomeTalents>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <HomeEasyflow></HomeEasyflow>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <HomeSafe></HomeSafe>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <HomeParttime></HomeParttime>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
    <HomeEmployer></HomeEmployer>
<!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
  </div>
</template>

<script>
import Swiper from 'swiper';
import HomeTalents from './HomeTalents'
import HomeEasyflow from './HomeEasyflow'
import HomeSafe from './HomeSafe'
import HomeParttime from './HomeParttime'
import HomeEmployer from './HomeEmployer'

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
    HomeTalents,
    HomeEasyflow,
    HomeSafe,
    HomeParttime,
    HomeEmployer,

  },
  mounted() {
      var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  },
}
</script>

<style scoped>
  .home{
    width: 100%;
  }
  .qwe{
    width: 100%;
    height: 1000px;
  }
    .swiper-container {
      width: 100%;
      height: 850px;
      margin-left: auto;
      margin-right: auto;
    }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    } 
    .swiper-img1{
      width: 100%;
      height: 1200px;
      background: url(../assets/img/5c094a6b5a8c5.jpg) no-repeat;
      background-size: cover;
    }
    .swiper-img2{
      width: 100%;
      height: 1200px;
      background: url(../assets/img/5c094a6b5a86c.jpg) no-repeat;
      background-size: cover;
    }
    .swiper-img3{
      width: 100%;
      height: 1200px;
      background: url(../assets/img/5c094a6b5a7de.jpg) no-repeat;
      background-size: cover;
    }
    .swiper-shadow{
      width: 100%;
      height: 1200px;
      background: black;
      position: absolute;
      opacity: .4;
    }
    .swiper-text{
      position: absolute;
      color: #fff;
      font-size: 80px;
      z-index: 1;
      margin-top: -80px;
      font-weight: 400;
      text-shadow: 2px 2px 1px black;
      animation: show 0.5s linear;
    }
    @keyframes show{
      0%{
        opacity: 0;
        margin-top: -120px;
      }
      100%{
        opacity: 1;
        margin-top: -80px;
      }
    }

    .swiper-text2{
      position: absolute;
      color: #fff;
      font-size: 32px;
      z-index: 1;
      margin-top: 10px;
      text-shadow: 2px 2px 1px black;
      animation: move 0.5s linear;
    }

    @keyframes move{
      0%{
        opacity: 0;
        margin-top: 50px;
      }
      100%{
        opacity: 1;
        margin-top: 10px;
      }
    }
    .HomeTalents{
      width: 100%;
      height: 600px;
    }
</style>
