const state = {
    //创建数据
    userName:'',
    passWord:'',
    checked:'',
    load:'登入',
    rigs:'注册',
}

const mutations = {
    //修改数据
    rigsnmae(state,val){
       state.userName = val
    },
    rigsword(state,val){
        state.passWord = val
     },
    rigscheck(state,val){
        state.checked = val
    },
    rigsload(state,val){
        state.load = val
    },
    rigsrigs(state,val){
        state.rigs = val
    },
}

export default{
    //导出
    namespaced:true,
    state,
    mutations,
}