import React from 'react'

export default class Home extends React.Component{
    render(){
        return (
            <div>
                this is info
                <br/>
                动态路由的值：{this.props.match.params.id}
            </div>
        )
    }
}  