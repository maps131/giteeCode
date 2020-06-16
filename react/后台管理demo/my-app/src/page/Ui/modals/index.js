import React from 'react';
import {Card,Button,Radio, Modal} from 'antd';
import './../index.less'
class Models extends React.Component{
    state = {
        show1:false,
        show2:false,
        show3:false,
        show4:false
    };

    handleOpen = (type)=>{
        this.setState({
            [type]:true
        })
    }

    handleComfirm = (type)=>{
        Modal[type]({
            title:'确认',
            content:'hello Maps131 ?',
            onOk(){
                console.log('ok')
            },
            onCancel(){
                console.log('cancel')
            }
        })
    }
    render(){
        return (
            <div className='modal_box'>
                <Card title='基础模态框' className='card'>
                    <Button type='primary' onClick={()=>this.handleOpen('show1')}>OPEN</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('show2')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('show3')}>顶部20px</Button>
                    <Button type='primary' onClick={()=>this.handleOpen('show4')}>水平垂直居中</Button>
                </Card>
                <Card title='信息框' className='card'>
                    <Button type='primary' onClick={()=>this.handleComfirm('confirm')}>Comfirm</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('info')}>自定义页脚</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('success')}>顶部20px</Button>
                    <Button type='primary' onClick={()=>this.handleComfirm('warning')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title='Maps131'
                    visible = {this.state.show1}
                    onCancel = {()=>{
                        this.setState({
                            show1:false
                        })
                    }}
                >
                    hello Maps131
                </Modal>
                <Modal
                    title='Maps131'
                    visible = {this.state.show2}
                    okText = '好吧'
                    cancelText = '算了'
                    onCancel = {()=>{
                        this.setState({
                            show2:false
                        })
                    }}
                >
                    hello Maps131
                </Modal>
                <Modal
                    title='Maps131'
                    visible = {this.state.show3}
                    style = {{top:20}}
                    onCancel = {()=>{
                        this.setState({
                            show3:false
                        })
                    }}
                >
                    hello Maps131
                </Modal>
                <Modal
                    title='Maps131'
                    wrapClassName = 'modal-center'
                    visible = {this.state.show4}
                    onCancel = {()=>{
                        this.setState({
                            show4:false
                        })
                    }}
                >
                    hello Maps131
                </Modal>
            </div>
        )
    }
}

export default Models;