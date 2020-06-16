import React from 'react';
import { Row,Col} from 'antd'
import Nav from './../../Comments/Nav/index'
import Header from './../../Comments/Header/index'
import Footer from './../../Comments/Footer/index'
import './../../Style/comment.less'
// import Content from './../../Comments/Content/index'
class Mian extends React.Component{
    render(){
        return (
            <Row className='contauner'>
                <Col span={4} className='nav'>
                    <Nav/> 
                </Col>
                <Col span={20} className='main'>
                    <Header/>
                    <Row className='content'>
                        {/* <Content/> */}
                        {this.props.children}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}

export default Mian;
