import React from 'react';
import '../index.less';
import {Card,Form,Button,Input,Checkbox,Radio,Switch,DatePicker,Upload,Icon,message,InputNumber,Select} from 'antd';
import moment from "moment";
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;
class FormRegister extends React.Component{
    handleSubmit = ()=>{
        let userInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                console.log(userInfo)
            }
        })
    }

    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout={
            labelCol:{
                xs:24,
                sm:4
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        return (
            <div className='box'>
                <Card title="注册表单" className="card">
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
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
                        <FormItem label="密码" {...formItemLayout}>
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
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex',{
                                    initialValue:'1',
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                           
                        </FormItem>
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age',{
                                    initialValue:16,
                                })(
                                    <InputNumber />
                                ) 
                            }
                           
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state',{
                                    initialValue:'2',
                                })(
                                    <Select>
                                        <Option value="1">咸鱼</Option>
                                        <Option value="2">良子</Option>
                                        <Option value="3">才子</Option>
                                        <Option value="4">码奴</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                           
                        </FormItem>
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('hobe',{
                                    initialValue:['1','2'],
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">咸鱼</Option>
                                        <Option value="2">良子</Option>
                                        <Option value="3">才子</Option>
                                        <Option value="4">码奴</Option>
                                        <Option value="5">创业者</Option>
                                    </Select>
                                )
                            }
                           
                        </FormItem>
                        <FormItem label="是否已婚" {...formItemLayout}>
                            {
                                getFieldDecorator('isMarred',{
                                    valuePropName:"checked",
                                    initialValue:true
                                })(
                                    <Switch />
                                )
                            }
                           
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('birthday',{
                    
                                    initialValue:moment("2020-2-2")
                                })(
                                    <DatePicker />
                                )
                            }
                           
                        </FormItem>
                        <FormItem label="地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address',{
                    
                                    initialValue:''
                                })(
                                    <TextArea 
                                        auotsize={{minRows:4,maxRows:6}}
                                    />
                                )
                            }
                           
                        </FormItem>
                        {/* <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg',{
                    
                                    initialValue:''
                                })(
                                    <Upload
                                        listType="pictrue-card";
                                    >

                                    </Upload>
                                )
                            }
                           
                        </FormItem> */}
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('read',{
                                })(
                                    <Checkbox>我已阅读<a href="#">aps协议</a></Checkbox>
                                    
                                )
                            }
                           
                        </FormItem>
                        <FormItem {...offsetLayout}>
                            {
                                getFieldDecorator('register',{
                                })(
                                    <Button type="primary" onClick={this.handleSubmit}>注册</Button>                                 
                                )
                            }
                           
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormRegister);