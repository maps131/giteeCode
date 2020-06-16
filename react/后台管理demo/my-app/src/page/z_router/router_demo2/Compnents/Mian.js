import React from 'react'
import { Link } from 'react-router-dom'
export default class Mian extends React.Component{
    render(){
        return (
            <div>
                this is Miann<br/>
                <Link to='/home/a'>嵌套About</Link>
                <hr></hr>   
                {this.props.children}       
            </div>   
        )
    }
}