# 基于webpack异步模块打包
#### 需要封装一个异步打包方法
```js
    import React from 'react';
    export default function lazyLoad(componentProps) {
        class LazyloadComponent extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    component: null
                }
            }
            async componentWillMount() {
                //解构赋值
                const {default: component} = await componentProps();
                this.setState({component})
            }
            render() {
                const C = this.state.component;
                return C ? <C {...this.props}/> : null;
            }
        }
        return LazyloadComponent;
    }
```
#### 在router.js中
```js
    import lazyLoad from './utils/lazyLoad'
    //异步加载组件，到真正调用时才真正的加载
    const content = lazyLoad(()=> import("./comments/content/content"))
    const search = lazyLoad(()=> import("./comments/search/search"))
    export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                        <Route path='/main'  render={()=>
                            <Main>
                                <Route path='/main/content' component={content} exact={true} key={8}/>
                                <Route path='/main/search' component={search} exact={true} key={9}/> 
                            </Main>
                        }                        
                        ></Route>
                        <Redirect from='/*' to='/main/content' />
                    </Switch>                  
                </App>           
            </HashRouter>
        )
    }
}
```
#### 要切换路由的组件中
```js
    ```
    import {Link} from 'react-router-dom';
    ```
    <Link to='/main/content'><button>content</button></Link>
    <Link to='/main/search'><button>search</button></Link>	
    <div className="contentBox" style={{width:this.state.widthLength}}>
        {this.props.children}
    </div>   
```