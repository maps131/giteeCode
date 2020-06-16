<template>
  <div id="app">
    <Nav class="appnav"></Nav>
    <router-view class="content"/>
    <Footer class="appfooter"></Footer>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Nav,
    Footer,
  }
}
</script>

<style>
   *{
    padding: 0;
    margin: 0;
  }
  html,body,#app{
    height: 100%;
    width: 100%;
    min-width: 1200px;
  }
  a{
    text-decoration: none;
    color: white;
  }
</style>
