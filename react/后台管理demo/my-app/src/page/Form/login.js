import React from 'react';
import '../index.less'
import {Card,Form,Input,Button,message,Icon,Checkbox} from 'antd';
const FormItem = Form.Item
class Login extends React.Component{

    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName}恭喜你，成功登入，密码是${userInfo.passWord}`)
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='box'>
                <Card title="登入行內表单" className="card">
                    <Form layout='inline'>
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登入</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登入水平表单" className="card">
                    <Form style={{width:300}}>
                        <FormItem>
                            {
                                getFieldDecorator('userName',{
                                    initialValue:'',
                                    rules:[
                                        {
                                            required:true,
                                            message:"用户名不能为空"
                                        },
                                        {
                                            min:2,max:7,
                                            message:"长度不在范围内"
                                        },
                                        {
                                            pattern:new RegExp(/^\w+$/g),
                                            message:"用户名只能为英文字母"
                                        }
                                ]
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>)
                            }
                            
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('passWord',{
                                    initialValue:'',
                                    rules:[{
                                        required:true,
                                        message:"密码不能为空"
                                    }]
                                })(<Input prefix={<Icon type="lock" />} placeholder="请输入密码"/>)
                            }
                           
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remenber',{
                                    valuePropName:'checked',
                                    initialValue:true,
                                 
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                           <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登入</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(Login);
