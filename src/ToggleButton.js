import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.onClick();
    }
    render() {
        if (this.props.on) {
            return (
                <button className="toggleButtonOn" onClick={this.onClick}>
                    <b>{this.props.onText}</b>
                </button>
            );
        }

        return (
            <button className="toggleButtonOff" onClick={this.onClick}>
                <b>{this.props.offText}</b>
            </button>
        );
    }
}

export default ToggleButton;