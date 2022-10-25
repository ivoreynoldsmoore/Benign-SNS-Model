import React from "react";

class Image extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div {...this.props} >
                <img style={this.props.style} src={require(`./images/${this.props.src}`)} alt={this.props.alt}/>
            </div>
        )
    }
}

export default Image;