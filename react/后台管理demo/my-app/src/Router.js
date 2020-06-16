import React from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from './App'
import Login from './page/Login/Login'
import Mian from './page/Mian/Mian'
import Register from './page/Register/Register'
import Buttons from './page/Ui/buttons/index'
import Modals from './page/Ui/modals/index'
import Loading from './page/Ui/loading/index'
import Notification from './page/Ui/notification/index'
import Message from './page/Ui/message/index'
import Tabs from './page/Ui/tabs/index'
import Gallery from './page/Ui/gallery/index'
import Carousel from './page/Ui/Carousel/index'
import Nomatch from './page/Nomatch/index'
import Formlogin from './page/Form/login'
import Formregister from './page/Form/register'
import TableBasic from './page/Table/table'
import TableHigh from './page/Table/tableHigh'
import Richedit from './page/Richedit/index'

export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <App>
                    <Switch>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/mian' render={()=>
                            <Mian>
                                <Switch>
                                    <Route path='/mian/ui/buttons' component={Buttons}></Route>
                                    <Route path='/mian/ui/modals' component={Modals}></Route>
                                    <Route path='/mian/ui/loadings' component={Loading}></Route>
                                    <Route path='/mian/ui/message' component={Message}></Route>
                                    <Route path='/mian/ui/notification' component={Notification}></Route>
                                    <Route path='/mian/ui/tabs' component={Tabs}></Route>
                                    <Route path='/mian/ui/gallery' component={Gallery}></Route>
                                    <Route path='/mian/ui/carousel' component={Carousel}></Route>
                                    <Route path='/mian/form/login' component={Formlogin}></Route>
                                    <Route path='/mian/form/reg' component={Formregister}></Route>
                                    <Route path='/mian/table/basic' component={TableBasic}></Route>
                                    <Route path='/mian/table/high' component={TableHigh}></Route>
                                    <Route path='/mian/rich' component={Richedit}></Route>
                                    
                                    <Route component={ Nomatch }></Route>
                                </Switch>                             
                            </Mian>
                    }/>
                    <Route path='/register' component={Register}></Route>
                    <Route path="/" component={Mian}></Route>
                    </Switch>                  
                </App>
            </HashRouter>
        )
    }
}
