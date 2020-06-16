<template>
  <div class="hello">
    <!-- 导航组件 -->
    <nav class="nav-box">
      <div class="nav-center-box">
        <ul>
          <li class="li-link">
             <router-link to="/home">{{$t("navl.logo")}}</router-link>
          </li>
          <li class="li-line"></li>
          <li class="li-link li-shadow">
            <router-link to="/tech"> {{$t("navl.skill")}}</router-link>
          </li>
          <li class="li-line "></li>
          <li class="li-link li-shadow">{{$t("navl.skill")}}</li>
          <li class="li-line"></li>
          <li class="li-right li-link">
            <router-link to='/rigs'>{{$store.state.rigs['rigs']}}</router-link>
          </li>
          <li class="li-right li-link">
            <router-link to='/load'>{{$store.state.rigs['load']}}</router-link>
          </li>
          <li class="li-right">
          <select class="lang" v-model="lang" @change='langChange'>
            <option value="zhCHS"> 简体中文 </option>
            <option value="en"> English </option>             
          </select>
          </li>       
        </ul>
      </div>

    </nav>

  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
      lang:'zhCHS'
      // nlogo:'乐鱼网',
      // npart:'技术兼职',
      // nneed:'招聘需求',
    }
  },
  methods: {
    langChange(){
        this.$i18n.locale = this.lang//切换默认语言
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav-box{
    width: 100%;
    height: 40px;
    background: rgb(25, 119, 207);
  }
  .nav-center-box{
    height: 40px;
    width: 1200px;
    line-height: 40px;
    margin: 0 auto;
  }
  .nav-center-box>ul{
    list-style: none;
  }
  .nav-center-box>ul>li{
    color: rgb(255, 255, 255);
    float: left;
  }
  .nav-center-box>ul>li:nth-child(1){
    font-size: 22px;
    padding-right: 50px;
  }
  .nav-center-box>ul>.li-link{
    cursor: pointer;
  }
  .nav-center-box>ul>.li-right{
    float: right;
    margin-left: 20px;
    font-size: 14px;
  }
  .nav-center-box>ul>.li-shadow{
    padding: 0 50px;
  }
  .nav-center-box>ul>.li-shadow:hover{
    background: rgb(0, 67, 145);
  }
</style>
