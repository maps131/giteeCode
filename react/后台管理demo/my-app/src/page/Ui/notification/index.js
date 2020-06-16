import React from 'react'
import {Card , Button , notification} from 'antd'

const openNotificationWithIcon = (type,direction) => {
    if(direction){
        notification.config({
            placement:direction
        })
    }
    notification[type]({
        message: 'Notification Title',
        description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
};

class notice extends React.Component{
    
    render(){
        return(
            <div className='notice_box'>
                <Card title='通知提醒框'>
                    <Button type='primary' onClick={() => openNotificationWithIcon('success')}>Success</Button>
                    <Button type='primary' onClick={() => openNotificationWithIcon('info')}>Info</Button>
                    <Button type='primary' onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
                    <Button type='primary' onClick={() => openNotificationWithIcon('error')}>Error</Button>
                </Card>
                <Card title='通知提醒框位置'>
                    <Button type='primary' onClick={() => openNotificationWithIcon('success','topLeft')}>Success</Button>
                    <Button type='primary' onClick={() => openNotificationWithIcon('info','topRight')}>Info</Button>
                    <Button type='primary' onClick={() => openNotificationWithIcon('warning','bottomLeft')}>Warning</Button>
                    <Button type='primary' onClick={() => openNotificationWithIcon('error','bottomRight')}>Error</Button>
                </Card>
            </div>
        )
    }
}

export default notice;