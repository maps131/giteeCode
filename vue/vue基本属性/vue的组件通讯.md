# vuex
    状态管理，集中管理公共数据和状态
## vue实例
    1.src引入vuex
    2.var store = new Vuex.Store({
        state:{
            data:'data'
        }
    })


## vue-cli
    1.需要在入口文件加载，注册
    2.在src文件夹中创建store文件夹
    3.store文件夹中创建index文件
    4.index文件需要开始要引入Vue和vuex
        import Vue from 'vue'
        import Vuex from 'vuex'

    5.如需要引入子组件，也要引入
        子组件写法
            直接const state={
                qqq:'qqq'
            }
            最后要导出
            export default{
                namespace:ture,   开启命名空间
                state
            }

            开启命名空间后
                获取值 this.$store.state.xx.qqq
                方法运用是要加上xx/


        import xx from 'xxx'(路径)

    6.使用vuex插件
        Vue.use(Vuex)
    
    7.导出store对象
        export default new Vuex.store({

        })

###    modules 子组件
        modules:{
            xx 注入子组件
        }

###    state 公共数据
        state:{
            插件数据
            data1:'data1',
            data2:'data2',
            data3:{
                info1:'info1',
                info2:'info2'
            }
        }
        页面获取用this.$store.state.data1

###    mutations 单个修改数据
        mutations:{
            changeData(state,value){   自定函数
                state.data1 = value
            },
            changeData2(state,value){   自定函数
                state.data2 = value
            },
             changeData3(state,value){   自定函数
                for(const prop in state.data3){
                    state.data3[prop] = value[prop]
                }
            }
        }
        页面修改 this.$store.commit('changeData',value的实参)

###    actions 多个修改数据,集合mutations
        actions:{
            actionChange(context,args){
                context.commit('changeData',args.value1)
                context.commit('changeData2',args.value2)
                context.commit('changeData3',args.value3)
            }
        }
        页面修改 this.$store.dispetch('actionChange',{
            value1:{'实参'}
            value2:{'实参'}
            value3:{'实参'}
        })

###    getter 计算数据
        getters:{
            gettersDate(prop){
                return prop.data1*1000
            }
        }
        页面获取 this.$store.getters[' gettersDate']

# props
###    父传子
        父组件的数据msg
        子组件的数据info
        在子组件上:info='msg'

# bus共享
### 父传子
    子组件要触发
        bus.$on('自定义事件名',(val)=>{
            console.log(val)
        })
    父组件触发
        bus.$emit('自定义事件名','参数')

### 子传父 
    父组件触发
        bus.$on('自定义事件名',(val)=>{
            console.log(val)
        })
    子组件要触发
        bus.$emit('自定义事件名','参数')

# $on和$emit
### 子传父
    子组件触发
        this.$parent.$emit('自定义事件名'，'传递的数据')
   
        父组件触发
        this.$on('自定义事件名',(val)=>{
            console.log(val)
        })

### 兄弟之间
    要等兄弟组件挂载完成
        兄弟一 this.$parent.$emit('自定义事件名'，'传递的数据')
        兄弟二 this.$parent.$on('自定义事件名',(val)=>{
                    console.log(val)
                })


# $emit
    子组件触发
        this.$emit('自定义事件名'，'传递的数据')
   
    父组件
        methods:{
            函数名(val){
                console.log(val)
            }
        }

    子组件上写@自定义事件名='函数名'

# $children
    要等子组件加载完毕
    console.log(this.$children[0].data)

# $parent
    要等父组件加载完毕
    console.log(this.$parent.data)