import React from 'react';

export default function lazyLoad(componentProps) {
    class LazyloadComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                component: null
            }
        }
        async componentWillMount() {
            const {default: component} = await componentProps();
            this.setState({component})
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props}/> : null;
        }
    }
    return LazyloadComponent;
}