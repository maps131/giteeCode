import React from 'react'
import { Link } from 'react-router-dom'
export default class Mian extends React.Component{
    render(){
        return (
            <div>
                this is Miann<br/>
                <Link to='/home/testInfo'>嵌套info</Link>
                <hr></hr>   
                {this.props.children}       
            </div>   
        )
    }
}