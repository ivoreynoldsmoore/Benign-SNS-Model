import React from 'react';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            boxHeight: 14,
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
        if (event.target.scrollHeight > event.target.clientHeight) {
            event.target.rows++;
        }
    }

    onSubmit () {
        this.props.onSubmit(this.state.text)
        this.setState({text: ""});
    }

    render () {
        return (
            <div className="textBox" style={{paddingTop: 20}}>
                <textarea placeholder="What do you want to say?" className="textBox" style={{margin: 5}} wrap="hard" value={this.state.text} onChange={this.handleChange}/>
                <div className="shelf">
                    <button className="toggleButtonOff" onClick={this.onSubmit}>
                        <b>Post</b>
                    </button>
                </div>
            </div>
        );
    }
}

export default TextBox;