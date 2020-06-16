import React from 'react'
import {HashRouter, Link , Route ,Switch} from 'react-router-dom'
import Mian from './Compnents/Mian'
import About from './Compnents/About'
import Topic from './Compnents/Topic'

export default class Home extends React.Component{
    render(){
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/topic'>Topic</Link>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route exact path='/' component={Mian}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/topic' component={Topic}></Route>
                </Switch>
            </HashRouter>
        )
    }
}