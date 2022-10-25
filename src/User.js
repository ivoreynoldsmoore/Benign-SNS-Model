import React from 'react'

class User extends React.Component {
    constructor(props, Name, Picture, ID) {
        super(props);
        this.state = {
            name: this.props.name,
            picture: this.props.picture,
            posts: this.props.posts,
            friends: this.props.friends,
        }
    }

    getFriends () {
        return this.state.friends;
    }

    render() { return null }
}

User.defaultProps = {
    picture: "",
    posts: [],
    friends: [],
};

export default User;