import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: resolve => require(['@/components/Home'], resolve),
      }  //路径匹配成功后要渲染的组件。
    },
    {
      path: '/tech',
      name: 'tech',
      components: {
        default: resolve => require(['@/components/Tech'], resolve),
      }  //路径匹配成功后要渲染的组件。
    },
    {
      path: '/load',
      name: 'load',
      components: {
        default: resolve => require(['@/components/Navload'], resolve),
      }  //路径匹配成功后要渲染的组件。
    },
    {
      path: '/rigs',
      name: 'rigs',
      components: {
        default: resolve => require(['@/components/Navrigs'], resolve),
      }  //路径匹配成功后要渲染的组件。
    },
    {
      path:'/*',//重定向
      redirect:'/' //修改路径指定
    },
  ]
})
