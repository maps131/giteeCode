import React from 'react'
import {HashRouter, Link , Route ,Switch} from 'react-router-dom'
import Mian from './Compnents/Mian'
import About from './Compnents/About'
import Topic from './Compnents/Topic'
import Home from './home'
import Info from './Compnents/info'
import Block from './Compnents/block'
export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route path='/home' render={()=>
                            <Mian>
                                <Route path='/home/:id' component={Info}></Route>
                            </Mian>
                        }></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                        <Route component={Block}></Route>
                    </Switch>
                </Home>            
            </HashRouter>
        )
    } 
}