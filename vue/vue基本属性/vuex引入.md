#vuex
    1.npm install vuex --save
    2、在src下新建一个名叫store的文件夹，用App.js同级，并在文件夹下新建store.js文件。因为store.js是基于vue的，所以需要引入vue和vuex

    import Vue from 'vue'
    import Vuex from 'vuex'

    3.Vue.use(Vuex);
    4.主入口import store from  './store'

