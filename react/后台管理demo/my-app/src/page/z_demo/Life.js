import React from 'react';
import Child from './Child'
import './style.css'
import {Button,Input} from 'antd'
// import 'antd/dist/antd.css'
export default class Life extends React.Component{
    constructor(props) {
        super(props);
        // this.state = {data: 0};
        this.getNewData1 = ()=>{
            this.setState({
                data: 1
            })
        }
    }

    state ={
        data: 0
    }

    getNewData2 = ()=>{
        this.setState({
            data: 2
        })
    }

    getNewData3(){
        this.setState({
            data: 3
        })
    }
    componentDidMount() {
        console.log('挂载完成Life')
    }
  
    componentWillUnmount() {
        console.log('卸载完成Life')
    }

    render(){

        return (
            <div className='content'>
                <p>react生命周期</p>
                <Input></Input>
                <Button onClick={this.getNewData1}>点一下1</Button> 
                {/* <button onClick={this.getNewData1}>点一下1</button> */}
                <button onClick={this.getNewData2}>点一下2</button>
                <button onClick={this.getNewData3.bind(this)}>点一下3</button>
                <p>{this.state.data}</p>
                <Child name={ this.state.data }></Child>
            </div>
        )
    }
}

