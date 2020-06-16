import React from 'react'
import {Card , Button , Spin , Icon , Alert} from 'antd'
import './../index.less'
export default class Loading extends React.Component{
    render(){
        const icon = <Icon type='loading' style={{fontSize:24}}></Icon>
        return(
            <div className='loading_box'>
                <Card title = "SPin用法" className='card'>
                    <Spin size='small'></Spin>
                    <Spin ></Spin>
                    <Spin size='large'></Spin>
                    <Spin indicator = {icon}></Spin>
                </Card>
                <Card title = "Alert包含SPin用法" className='card'>
                    <Alert 
                        message='Mpas131'
                        description ='欢迎来到Maps131的页面'
                        type='info'
                    ></Alert>
                    <Spin>
                        <Alert 
                            message='Mpas131'
                            description ='欢迎来到Maps131的页面'
                            type='warning'
                        ></Alert>
                    </Spin>
                    <Spin tip='加载中...'>
                        <Alert 
                            message='Mpas131'
                            description ='欢迎来到Maps131的页面'
                            type='warning'
                        ></Alert>
                    </Spin>
                    <Spin indicator={icon}>
                        <Alert 
                            message='Mpas131'
                            description ='欢迎来到Maps131的页面'
                            type='warning'
                        ></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}