import React from 'react'
import {Card , Button , message} from 'antd'

const openMessage = (type) => {
    message[type]('This is a message');
};

class mes extends React.Component{
    
    render(){
        return(
            <div className='box'>
                <Card title='全局提醒框'>
                    <Button type='primary' onClick={() => openMessage('success')}>Success</Button>
                    <Button type='primary' onClick={() => openMessage('info')}>Info</Button>
                    <Button type='primary' onClick={() => openMessage('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => openMessage('error')}>Error</Button>
                    <Button type='primary' onClick={() => openMessage('loading')}>Error</Button>
                </Card>
            </div>
        )
    }
}

export default mes;