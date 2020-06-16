# provide和inject
#### 父组件
```js
    export default {
        provide () {
            return {
            reload: this.reload
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
#### 子组件
```js
    <p @click="reload">刷新</p>
    export default {
        inject:["reload"]
    }
```