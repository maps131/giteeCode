import React from 'react';
import {Card,Table,Modal} from 'antd';
import axios from 'axios';
import '../index.less'
class TableBasic extends React.Component{
    state={}

    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Maps',
                sex:'1',
                state:'1',
                hobe:'写代码',
                birthday:'1997-1-7',
                address:'江西省赣州市龙南县',
                timeUp:'8:00',
                key:1
            },
            {
                id:'1',
                userName:'Maps1',
                sex:'1',
                state:'1',
                hobe:'写代码',
                birthday:'1997-1-7',
                address:'江西省赣州市龙南县',
                timeUp:'8:00',
                key:2
            },
            {
                id:'2',
                userName:'Maps131',
                sex:'1',
                state:'1',
                hobe:'写代码',
                birthday:'1997-1-7',
                address:'江西省赣州市龙南县',
                timeUp:'8:00',
                key:3
            }
        ]
        this.setState({
            dataSource:data
        });
        this.request();
    }

    request = ()=>{
        axios.get('https://www.easy-mock.com/mock/5e368df462df594593286185/Maps131/table/list')
        .then((res)=>{
            console.log(res)
        })
    }

    render(){
        const columns = [
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户名',
                dataIndex:'userName'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                    return sex==1?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    let config = {
                        "1":"咸鱼",
                        "2":"沙雕"
                    };

                    return config[state]
                }
            },
            {
                title:'爱好',
                dataIndex:'hobe'
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'地址',
                dataIndex:'address'
            },
            {
                title:'早起时间',
                dataIndex:'timeUp'
            },
        ]
        const selectedRowKeys = this.state.selectedRowKeys;
        const rowSelection = {
            type:'radio',
            selectedRowKeys
        }
        return(
            <div className="box">
                <Card title="基础表格" className="card">
                    <Table 
                        bordered
                        dataSource={this.state.dataSource}
                        columns = {columns}
                        pagination={false}
                    />
                </Card>
                <Card title="动态表格" className="card">
                    <Table 
                        bordered
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick: ()=>{
                                    let selectKey = [index];
                                    let select = JSON.stringify(Number(selectKey)+1);
                                    this.setState({
                                        selectedRowKeys:select,
                                        selectedItem:record
                                    });
                                    Modal.info({
                                        title:'信息',
                                        content:`用户名${record.userName},爱好${record.hobe}`
                                    })
                                }
                            }
                        }}
                        dataSource={this.state.dataSource}
                        columns = {columns}
                        pagination={false}
                    />
                </Card>
                <Card title="分页表格" className="card">
                    <Table 
                        bordered
                        dataSource={this.state.dataSource}
                        columns = {columns}
                    />
                </Card>
            </div>
        )
    }
}

export default TableBasic;
