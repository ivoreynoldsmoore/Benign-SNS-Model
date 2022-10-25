import React from 'react'
import Image from './Image.js'
import Avatar from "@mui/material/Avatar";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        let image = null;
        if (this.props.user.state.picture !== "") {
            image = <Avatar src={`images/profile/${this.props.user.state.picture}`} alt="User Picture"/>;
        }
        else{
            image = <Avatar>{this.props.user.state.name.substring(0,1)}</Avatar>
        }
        return (
            <div className="profile" style={{width: this.props.frameWidth}}>
                {image}
                <div style={{paddingLeft: 10}}>
                    <div><b>{this.props.user.state.name}</b></div>
                    <div style={{fontSize: 13}}>{this.props.timeCreated.getHours().toString().padStart(2,"0")}:{this.props.timeCreated.getMinutes().toString().padStart(2,"0")} {this.props.timeCreated.getDate()}/{this.props.timeCreated.getMonth()+1}/{this.props.timeCreated.getFullYear()}</div>
                </div>
            </div>
        );
    }
}

export default Profile;