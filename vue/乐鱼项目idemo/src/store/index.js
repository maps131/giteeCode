import Vue from 'vue'
import Vuex from 'vuex'
import rigs from './modules/rigs'
//使用vuex 插件
Vue.use(Vuex)
// 导出store对象
export default new Vuex.Store({
  modules:{
    rigs,
  },
  state: {
    hello: "Hello Vuex！", //组件可以访问到该数据
    choosedata:'工作地点',
    datar:'address'
  },
  mutations:{
    chooseData(state,val){
      state.choosedata = val;
    },
    chooseDatar(state,val){
      state.datar = val;
    },
  }
})
  