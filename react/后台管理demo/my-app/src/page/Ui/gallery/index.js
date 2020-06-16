import React from 'react'
import {Card , Row , Col , Modal} from 'antd'



class hualang extends React.Component{
    state = {
        visible:false
    }
    openGallery = (item)=>{
        this.setState({
            visible:true,
            currentImg: '/gallery/'+item
        })
    }

    render(){
        const imgs = [
            ['1.png','2.png','3.png','4.png','5.png','21.png'],
            ['6.png','7.png','8.png','9.png','10.png','22.png'],
            ['11.png','12.png','13.png','14.png','15.png','23.png'],
            ['16.png','17.png','18.png','19.png','20.png','24.png']

        ]
        const imgList = imgs.map((list) => list.map((item) => 
            <Card
                style={{marginBottom:10}}
                cover={<img src={'/gallery/'+item} onClick={()=>this.openGallery(item)}/>}
            >
                <Card.Meta
                    title='Maps131'
                    description = 'this feifei'
                ></Card.Meta>
            </Card>
        ))
        return(
            <div>
                <Card>
                    <Row gutter={10}>
                        <Col md={6}>
                            {imgList[0]}
                        </Col>
                        <Col md={6}>
                            {imgList[1]}
                        </Col>
                        <Col md={6}>
                            {imgList[2]}
                        </Col>
                        <Col md={6}>
                            {imgList[3]}
                        </Col>
                    </Row>
                </Card>
                <Modal
                    visible={this.state.visible}
                    title= 'Maps131'
                    onCancel={()=>{
                        this.setState({
                            visible:false
                        })
                    }}
                    footer={null}
                >
                    {<img src={this.state.currentImg} style={{width:'100%'}}></img>}
                </Modal>
            </div>
        )
    }
}

export default hualang;