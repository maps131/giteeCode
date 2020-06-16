import React from 'react'
import {HashRouter, Link , Route ,Switch} from 'react-router-dom'
import Mian from './Compnents/Mian'
import About from './Compnents/About'
import Topic from './Compnents/Topic'
import Home from './home'
export default class Router extends React.Component{
    render(){
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route path='/home' render={()=>
                            <Mian>
                                <Route path='/home/a' component={About}></Route>
                            </Mian>
                        }></Route>
                        <Route path='/about' component={About}></Route>
                        <Route path='/topic' component={Topic}></Route>
                    </Switch>
                </Home>            
            </HashRouter>
        )
    }
}