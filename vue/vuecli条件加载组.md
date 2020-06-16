# 条件加载组件
```js
    <component :is="currentCom"></component>
    import Grid from './component/grid';
    methods: {
    　　condiation () {
    　　　　this.currentCom = Grid
    　　}
    }
```