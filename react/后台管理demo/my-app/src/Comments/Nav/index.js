import React from 'react';
import { Menu, Icon } from 'antd';
import MenuConfig from './../../config/menuConfig';
import './index.less';
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu;
export default class Nav extends React.Component{
    componentWillMount(){
        //方法赋值
        const menuTreeNode = this.renderMenu(MenuConfig)
        this.setState({
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu key={item.key} title={item.title}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return <Menu.Item key={item.key} title={item.title}>
                <NavLink to={item.key}>{ item.title }</NavLink>
                </Menu.Item>
        })
    }

    render(){
        return (
            <div>
                <div className='logo'>
                    <img src='/assets/logo-ant.svg'></img>
                    <h1>Hello</h1>
                </div>
                <Menu theme='dark'>
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        )
    }
}
