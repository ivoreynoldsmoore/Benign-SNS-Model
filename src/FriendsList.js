import React from 'react'
import Image from "./Image";
import Avatar from "@mui/material/Avatar";

export class FriendsList extends React.Component {
    constructor(props) {
        super(props);
    }

    // generateFriends () {
    //     for (const user in this.props.friends) {
    //         this.setState({friends:[
    //             ...this.state.friends,
    //                 <Friend key={this.state.friends.length} user={user}/>]});
    //     }
    // }



    // componentDidMount () {
    //     this.generateFriends()
    // }

    render () {
        let friends = this.props.getFriends();
        const friendList = friends.map((friend) =>
            <Friend key={`${friend.props.id}`} name={friend.state.name} img={friend.state.image} />
        );
        return (
            <div className="friendsFrame primary">
                <h2 className="" >Friends</h2>
                <div>
                    {friendList}
                </div>
            </div>
        );
    }
}

export class Friend extends React.Component {
    constructor(props) {
        super(props);
    }
    render () {
        let image = null;
        if (this.props.picture !== "") {
            image = <Avatar src={`images/profile/${this.props.picture}`} alt={this.props.name}/>;
        }
        else{
            image = <Avatar>{this.props.name.substring(0,1)}</Avatar>
        }
        return (
            <div className="friendsItem">
                {image}
                <b style={{paddingLeft: 10,fontSize: 18}}>{this.props.name}</b>
            </div>
        );
    }
}