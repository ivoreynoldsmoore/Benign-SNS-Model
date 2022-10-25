import React from 'react';

class TabPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        if (this.props.value === this.props.index) {
            return <div >{this.props.children}</div>
        }
        else {
            return null;
        }
    }
}

export default TabPanel;