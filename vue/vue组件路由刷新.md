# 刷新组件
#### 实现不闪屏刷新
```js
    <div class="content">
        <p @click="reload">刷新</p> 
        <Main if="isComAlive"></Main>
    </div>
    export default {
        name: 'App',
        data(){
            return {
                isComAlive:true
            } 
        },
        methods: {
            reload(){
                this.isComAlive = false;
                this.$nextTick(function(){
                    this.isComAlive = true;
                })
            }
        }
    }
```

# 路由刷新
```js
    <div class="content">
        <p @click="reload">刷新</p> 
        <router-view v-if="isRouterAlive"></router-view>
    </div>
    export default {
        name: 'App',
        data(){
            return {
                isRouterAlive:true
            } 
        },
        methods: {
            reload(){
                this.isRouterAlive = false;
                this.$nextTick(function(){
                    this.isRouterAlive = true;
                })
            }
        }
    }
```