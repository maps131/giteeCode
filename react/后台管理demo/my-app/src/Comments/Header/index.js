import React from 'react'
import { Row,Col} from 'antd'
import './index.less'
import Utils from './../../Utils/utils'
import axios from './../../axios/index'
export default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:'Maps131'
        });
        //时间功能
        setInterval(()=>{
            let systime = Utils.formateData(new Date().getTime());
            this.setState({
                systime
            })
        },1000)
        this.getWeatherAPIData()
    }

    //天气功能
    getWeatherAPIData(){
        // let city ='深圳';
        axios.jsonp({
            // url:'http://api.map.baidu.com/telematics/v3/weather?location='+ encodeURIComponent(city) +'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
            url:'http://wthrcdn.etouch.cn/weather_mini?city=深圳'
        }).then((res)=>{
            let data = res.data.forecast[0]
            this.setState({
                high:'  ' + data.high + '  ' +data.low,
                weather:data.type
            })
        })
    }
    render(){
        return (
            <div className='header'>
                <Row className='header-top'>
                    <Col span={24} >
                        <span>欢迎，{this.state.userName}</span>
                        <a href='javascript:;'>退出</a>
                    </Col>
                </Row>
                <Row className='breadcrump'>
                    <Col span={4} className='breadcrump-title'>首页</Col>
                    <Col span={20} className='weather'>
                        <span>{this.state.systime}</span>
                        <span>                      
                            深圳-{this.state.weather}
                            {this.state.high}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
