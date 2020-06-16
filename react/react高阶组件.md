# 高阶组件
```
就是一接收React组件作为参数,输出一个新的组件的函数
```
#### 首先创建高阶组件Hoc.js
```js
    import React from 'react'
    //InnerComponent就是传入的组件
    const Hoc = (InnerComponent) => class extends React.Component{
        constructor(){
            super();
            this.state = {
                count:0
            }
        }
        update = ()=>{
            const {count} = this.state;
            this.setState({
                count:count+1
            })
        }
        render(){
            const newProps = this.state;
            return(
                <InnerComponent
                    //这个得写，不然接受不到组件的children
                    {...this.props}
                    //这个作为复用的参数
                    {...newProps}
                    //这个作为复用的方法
                    update = {this.update}
                />
            )
        }
    }

    export default Hoc;
```
#### 作为参数的组件
```js
    import React from 'react';
    class Title extends React.Component{
        componentWillMount(){
            //接受到的参数
            console.log(this.props)
        }
        render(){
            return(
                <div>
                    <h1 onClick={this.props.update}>{this.props.children}-{this.props.count}</h1>
                </div>
            )
        }
    }

    export default Title;
```
#### 在组件中使用
```js
    import Hoc from '../../comments/propsproxy/Hoc'
    import But from '../../comments/test/Button'
    const Button = Hoc(But)
    ...
        <Button>这里就是children</Button>
    ...
```

# 注意命名空间问题，高阶组件会覆盖组件的同名变量