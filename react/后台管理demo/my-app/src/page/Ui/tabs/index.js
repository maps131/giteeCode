import React from 'react'
import {Card , Button , message ,Tabs ,Icon} from 'antd'

const { TabPane } = Tabs;

class tab extends React.Component{
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
          { title: 'Tab 1', content: 'Content of Tab 1', key: '1' ,closable: false},
          { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
          {
            title: 'Tab 3',
            content: 'Content of Tab 3',
            key: '3',          
          },
        ];
        this.state = {
          activeKey: panes[0].key,
          panes,
        };
      }
    
      onChange = activeKey => {
        this.setState({ activeKey });
      };
    
      onEdit = (targetKey, action) => {
        this[action](targetKey);
      };
    
      add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab'+activeKey, content: 'Content of new Tab', key: activeKey });
        this.setState({ panes, activeKey });
      };
    
      remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
    };
    callback = (num)=>{
        message.info('This is'+num);
    }
    render(){
        return(
            <div className='box'>
                <Card title='标签页'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>,
                </Card>
                <Card title='带图标标签页'>
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={
                                <span>
                                <Icon type="apple" />
                                Tab 1
                                </span>
                            }
                                key="1" >
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab={
                                <span>
                                <Icon type="android" />
                                Tab 2
                                </span>
                            }
                            key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>,
                </Card>
                <Card title='可编辑标签页'>
                    <Tabs
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {this.state.panes.map(pane => (
                        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
                            {pane.content}
                        </TabPane>
                        ))}
                    </Tabs>
                </Card>

            </div>
        )
    }
}

export default tab;