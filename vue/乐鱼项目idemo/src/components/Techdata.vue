<template>
  <div class="data">

    <div class="data-box" v-for="(prop,key) in dataArr" :key="key">
      <div class="data-box-center">
        <div class="data-img-box">
          <img :src="prop.imgAddr" alt="">
          <div>{{prop.category}}</div>
        </div>
        <div class="data-content-box">
          <h3><span>{{prop.title}}</span></h3>
          <br>
          <p><b>技术经验：</b>{{prop.jiShu}}</p>
          <br>
          <p><b>项目经验：</b>{{prop.xiangMu}}</p>
        </div>
        <div class="data-price-box">
          <h2>{{prop.price}}/8小时</h2>
          <br>
          <p class="data-price-num">{{prop.phoneNum}}</p>
          <br>
          <p>可兼职时间： {{prop.time[0]}}/{{prop.time[1]}}/{{prop.time[2]}}</p>
          <p>可兼职地点： {{prop.address}}</p>
          <div>
            <button class="data-price-bnt1">关注</button>
            <button class="data-price-bnt2">立即预约</button>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: 'Techdata',
  data () {
    return {
      dataArr:{},
      addr:'',
      datar:'1111',
    }
  },
  created() {   
      this.addr = this.$store.state['choosedata']
      this.datar = this.$store.state['datar']
      console.log(this.datar)
      // $.get('http://localhost/testservice.json',(result)=>{
      //     let res = JSON.parse(result);
      //     console.log(res)
      //     let a = []  
      //     let abb = this.datar      
      //     for(let i=0;i<17;i++){
      //       if(-1 != res[i].abb.indexOf(this.addr)){
      //         a.push(res[i])          
      //       }else if("全部" == this.addr || "工作地点" == this.addr){
      //         a.push(res[i])
      //       }
      //       // console.log(a)
      //       this.dataArr = a;
      //     }         
      // })
  },
  updated(){
      this.addr = this.$store.state['choosedata']
      this.datar = this.$store.state['datar']
      console.log(1111)
      console.log(this.datar)
      // $.get('http://localhost/testservice.json',(result)=>{
      //     let res = JSON.parse(result);
      //     let a = []
      //      let abb = this.datar          
      //     for(let i=0;i<17;i++){
      //       if(-1 != res[i].abb.indexOf(this.addr)){
      //         a.push(res[i])          
      //       }else if("全部" == this.addr || "工作地点" == this.addr){
      //         a.push(res[i])
      //       }
      //       this.dataArr = a;
      //     }         
      // })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .data-box{
    width: 1200px;
    height: 250px;
    background: white;
    border-radius: 5px;
    box-shadow: 0px 1px 4px 2px rgb(206, 206, 206);
    margin: 0 auto;
    margin-bottom: 15px;
    display: block;
  }
  .data-box-center{
     width: 1100px;
     height: 200px;
     padding: 25px 50px;
  }
  .data-box-center>div{
    float: left;
  }
  .data-box-center>.data-img-box{
    width: 200px;
    height: 100%;
  }
  .data-box-center>.data-img-box>img{
    height: 100px;
    width: 100px;
    border-radius: 50px;
    margin-left: 50px;
  }
  .data-box-center>.data-img-box>div{
    color: white;
    width: 120px;
    text-align: center;
    padding: 5px 5px;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 30px;
    background: linear-gradient(rgb(241, 75, 75),rgb(177, 23, 23))
  }
  .data-box-center>.data-content-box{
    width: 500px;
    height: 100%;
    padding-left: 20px;
    padding-right: 30px;
    border-right: 1px solid rgb(65, 65, 65);
  }
  .data-box-center>.data-price-box{
    width: 319px;
    height: 100%;
    padding-left: 30px;
  }
  .data-box-center>.data-price-box>h2{
    color: rgb(241, 75, 75);
  }
  .data-box-center>.data-price-box>.data-price-num{
    color: rgb(0, 90, 168);
    font-size: 18px;
  }
  .data-box-center>.data-price-box>div{
    width: 100%;
    height: 34px;
    padding: 20px 0 0 0; 
  }
  .data-box-center>.data-content-box>h3>span{
    padding-right: 20px;
    color: rgb(4, 116, 214);
  }
  .data-box-center>.data-content-box>p{
    color: rgb(65, 65, 65);
    font-size: 13px;
  }
  .data-price-bnt1{
    width: 60px;
    height: 100%;
    border-radius: 5px; 
    font-size: 14px;
  }
  .data-price-bnt2{
    margin-left: 30px;
    width: 120px;
    height: 100%;
    border-radius: 5px; 
    font-size: 14px;
    background: rgb(13, 131, 52);
    color: white;
  }
</style>
