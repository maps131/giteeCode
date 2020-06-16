import React from 'react';
 
export default class Child extends React.Component{
    constructor(props) {
        super(props);
        this.state = {data: 0};

    }

    componentWillMount(){
        console.log('将要挂载')
    }

    componentDidMount(){
        console.log('已经挂载')
    }

    componentWillReceiveProps(newProps){
        console.log('接受参数'+newProps)
    }

    shouldComponentUpdate(){
        console.log('是否更新')
        return true
    }

    componentWillUpdate(){
        console.log('将要更新')
    }

    componentDidUpdate(){
        console.log('完成更新')
    }

    render(){
        return (
            <div>
                <p>这是Child组件的信息</p>
                <p>{this.props.name}</p>
            </div>
        )
            
    }
}