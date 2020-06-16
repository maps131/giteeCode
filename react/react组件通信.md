# 父传子(父传孙)
###  通过给加载的子组件标签上赋值，子组件通过this.props获取
#### 父组件
```javascript
    constructor(props){
        super(props)
        this.state = {
            testData:'父组件数据'
        }
    };
    testMethod = ()=>{
        alert(this.state.testData)
    }
      render(){
        return(
            <div className="contentBox" style={{width:this.state.widthLength}}>
                <children msg={this.state.testData} method={this.testMethod}/>
            </div>              
        )
    }
```
#### 子组件
```javascript
    render(){
        return(
            <div className="content">
                <h1>{this.props.msg}</h1>
                <button onClick={this.props.method}>点我</button>
                /*传孙*/
                <children {...this.props}/>
            </div>
        )
    }
```
#### 孙组件
```js
    render(){
        return(
            <div className="content">
                <h1>{this.props.msg}</h1>
            </div>
        )
    }
```
# 子传父
### 把父组件的需要改的东西封装到一个方法里，然后传到子组件，让子组件修改，设置
#### 父组件
```js
    constructor(props){
        super(props)
        this.state = {
            testData:'父组件数据'
        }
    };
    changeData = (msg) =>{
        this.setState(
            {   
                testData:msg
            }
        )
    };
    render(){
        return(
            <div className="contentBox">
                <h1>{this.state.testData}</h1>
                /*谨记需要传参得用箭头函数*/
                <Content changeData = {msg => this.changeData(msg)}/>
            </div>              
        )
    }
```
#### 子组件
```js
    clickMethod = ()=>{
        this.props.changeData('子组件数据')
    }
    render(){
        return(
            <div className="content">
                <button onClick={this.clickMethod}>点我</button>
            </div>
        )
    }
```
# 兄弟间
### 通过子传父再父传其他子或者flux、redux（如果想不到该不该用redux,那就别用）
```js
    待完成
```
# 观察者模式（发布订阅模式）
## 父传子、子传父，兄弟互传都可以   yarn add react-eventproxy
## 兄弟间
#### 兄弟一
```js
    import eventProxy from 'react-eventproxy'

    constructor(props){
        super(props)
        this.state = {
            testData:'搜索组件的数据'
        }
    };
    componentDidMount(){
        eventProxy.on('msg',(msg)=>{
            this.setState({
                testData:msg
            })
        })
    };
    render(){
        
        return(
            <div className="searchBox">
                <h1>{this.state.testData}</h1>
            </div>
        )
    }
```
#### 兄弟二
```js
    import eventProxy from 'react-eventproxy';

    clickMethod = ()=>{
        eventProxy.trigger('msg','内容组件数据')
    }
    render(){
        return(
            <div className="content">
                <button onClick={this.clickMethod}>点我</button>
            </div>
        )
    }
```
# Flux
```js
    待完成
```

# redux
## 目录结构
    src
        >store
            >state.js   默认值
            >reducer.js     编辑操作方式
            >action.js      操作reducer
            >index.js       主出口
        >App    这里可以是你要使用redux组件的父组件也可以是跟组件，主要让redux下传store
            >main   使用store的组件

    需要安装
        react-redux、react-thunk、redux、redux-thunk
#### state.js
```js
    //设置初始值
    let defaultState = {
        maininfo:'todolist',
        contentinfo:'i am contentinfo'
    }

    export default defaultState
```
#### reducer.js
```js
    //工具函数，用于组织多个reducer，并返回reducer集合
    import { combineReducers } from 'redux'
    import defaultState from './state.js';
    //每个函数都是一个reducer
    let maininfo = (state = defaultState.maininfo,action)=>{
        switch(action.type){
            case 'mainchange':
            //这里可以用data，是因为redux-thunk中间件的问题
                return action.data;
            default:
                return state
        }
    }
    let contentinfo = (state = defaultState.contentinfo,action)=>{
        switch(action.type){
            case 'contentchange':
                return action.data;
            default:
                return state
        }
    }

    export default combineReducers({maininfo,contentinfo})
```
#### action.js
```js
    //操作reducer的函数，在要用的redux的组件中加载
    const mainchange = (data)=>{
        return (dispatch,getState)=>{
            dispatch({type:"mainchange",data:data}) 
        } 
    };

    const contentchange = (data)=>{
        return (dispatch,getState)=>{
            dispatch({type:"contentchange",data:data}) 
        } 
    };

    const change = {
        mainchange:mainchange,
        contentchange:contentchange
    }

    export default change;
```
#### index.js
```js
    // applyMiddleware: redux通过该函数来使用中间件
    // createStore: 用于创建store实例
    import { applyMiddleware, createStore } from 'redux'
    //中间件，可以使action传入对象
    import thunk from 'redux-thunk'
    import reducer from './reducer';

    let store = createStore(reducer,applyMiddleware(thunk))

    export default store
```
#### App.js
```js
    import React from 'react';
    import './App.css';
    import Main from "./page/main/main";
    //Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
    import { Provider } from 'react-redux';
    //加载创建好的store实例
    import store from './store';
    class App extends React.Component{
        render(){
            return(
            <div className="App">
                <Provider store={store}>
                    <Main />
                </Provider>
            </div>
            );
        }
    }
    export default App;
```
#### main.js
```js
    import React from 'react';
    import './../main/main.less'
    //connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
    import { connect } from 'react-redux'
    import change from '../../store/action'
    class Mian extends React.Component{
        changeData = (props)=>{
            //解构赋值获取action
            let { mainchange,contentchange } = this.props;
            //触发action
            mainchange(props)
            contentchange(props+'contentchange')
        }

        render(){
            //解构赋值获取name
             let { maininfo,contentinfo } = this.props
            return(
                <div className="wrap" style={this.state.zoomValue}> 
                    <h1>{maininfo}</h1>
                    <h1>{contentinfo}</h1>
                    <!-- 修改store里的值 -->
                    <button onClick = {()=>{this.changeData('哈哈哈哈哈哈')}}>点我</button>
                    <div className="searchBox">
                        <Search />
                    </div>
                    <div className="contentBox" style={{width:this.state.widthLength}}>
                        <Content/>
                    </div>              
                </div>
            )
        }
    }
    //将state映射到组件的props中
    const mapStateToProps = (state) => {
        return {
            maininfo: state.maininfo,
            contentinfo:state.contentinfo
        }
    }
    //将dispatch映射到组件的props中
    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            mainchange(data) {
                // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
                dispatch(change.mainchange(data))
                // 执行setPageTitle会返回一个函数age
                // 这正是redux-thunk的所用之处:异步action
                // 上行代码相当于
                /*dispatch((dispatch, getState) => {
                    dispatch({ type: 'SET_PAGE_TITLE', data: data })
                )*/
            }
            ,
            contentchange(data){
                dispatch(change.contentchange(data))
            }
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Mian);
```
# mobx
```js
    待完成
```