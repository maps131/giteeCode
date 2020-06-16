<template>
  <div class="load">
    <div class="load-box">
      <div class="load-box-center">
        <div class="load-box-logo">
          <div></div>
          <h1>会员登入</h1>
        </div>
        <div class="load-title">
          <div class="load-title-content">密码登入</div>
        </div>
        <input type="text" placeholder="账号" v-model="loadUsername">
        <input type="password" placeholder="密码" v-model="loadPassword">
        <div class="load-reb"><input type="checkbox" class="checked" @click="checked"><span>记住我</span><span class="load-foundpasswoed">找回密码</span></div>        
        <button type="submit" @click="load">登入</button>
        <div class="laod-bottom">
          <p>
            <router-link to='/rigs'>注册新账号</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navload',
  data () {
    return {
      loadUsername:'',
      loadPassword:'',
    }
  },
  mounted() { 
      let a = $('.checked').eq(0).prop('checked')
      a =  this.$store.state.rigs['checked']
      if(a){
        this.loadUsername = this.$store.state.rigs['userName'];
        this.loadPassword = this.$store.state.rigs['passWord'];
      }    
  },
  methods: {
    load(){
      if(this.$store.state.rigs['userName'] == this.loadUsername && this.$store.state.rigs['passWord'] == this.loadPassword){
        this.$store.commit('rigs/rigsload','欢迎回来')
        this.$store.commit('rigs/rigsrigs',this.loadUsername)
        this.$router.push('/')
      }else{
        alert('账号或密码错误')
      }
    },
    checked(){
      this.$store.commit('rigs/rigscheck','true');
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .load{
    width: 100%;
    height: 100%;
    background: #ebeced;
  }
  .load-box{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 350px;
    height: 500px;
    border-radius: 5px;
    background:white;
    box-shadow: 0px 1px 4px 2px rgb(206, 206, 206);
  }
  .load-box>.load-box-center{
    width: 300px;
    height: 450px;
    padding: 25px 25px;
  }
  .load-box-center>.load-box-logo{
    height: 60px;
    padding: 30px 0;
  }
  .load-box-center>.load-box-logo>div{
    height: 60px;
    width: 60px;
    background: url(../assets/img/fishing_72px.png);
    background-size: cover; 
    float: left;
  }
  .load-box-center>.load-box-logo>h1{
    padding-left: 30px;
    margin-left: 30px;
    height: 60px;
    line-height: 60px;
    font-size: 26px;
    float: left;
    border-left: 1px solid gainsboro;
  }
  .load-title{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid#1977cf; 
    margin-bottom: 10px;
  }
  .load-title-content{
    height: 40px;
    width: 100px;
    line-height: 40px;
    border-radius: 5px 5px 0 0;
    background: #1977cf;
    text-align: center;
    color: white;
  }
  .load-box-center>input{
    float: left;
    height: 30px;
    width: 100%;
    border-radius: 5px;
    background: white;
    border: 1px solid gainsboro;
    margin: 10px 0;
    text-indent: 10px;
  }
   .load-box-center>.load-reb{
     height: 20px;
     width: 100%;
     float: left;
   }
    .load-box-center>.load-reb>input{
    }
    .load-box-center>.load-reb>span{
    font-size: 12px;
    padding-left: 10px;
    line-height: 20px;
  }
  .load-foundpasswoed{
    float: right;
    line-height: 20px;
    margin-top: 3px;;
  }
  .load-box-center>button{
    height: 50px;
    width: 100%;
    background: #1977cf;
    margin-top: 20px;
    border-radius: 5px;
    color: white;
    font-size: 24px;
    margin-bottom: 60px;
  }
  .laod-bottom{
    height: 30px;
    width: 100%;
    border-top: 1px solid gainsboro;
  }
  .laod-bottom>p>a{
    display: inline-block;
    color: #1977cf;
    font-size: 13px;
    margin-top: 10px;
  }
</style>
