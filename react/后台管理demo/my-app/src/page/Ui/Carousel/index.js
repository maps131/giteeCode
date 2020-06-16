import React from 'react'
import {Card , Carousel} from 'antd'

class CarouselT extends React.Component{
    
    render(){
        return(
            <div className='box'>
                <Card title='文字轮播'>
                    <Carousel autoplay>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title='图片轮播' className='antd-slider'>
                    <Carousel autoplay>
                        <div>
                            <img src='/carousel-img/carousel-1.jpg'></img>
                        </div>
                        <div>
                            <img src='/carousel-img/carousel-2.jpg'></img>
                        </div>
                        <div>
                            <img src='/carousel-img/carousel-1.jpg'></img>
                        </div>
                        <div>
                            <img src='/carousel-img/carousel-3.jpg'></img>
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}

export default CarouselT;