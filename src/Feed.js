import React from 'react'
import PostMaker from "./PostMaker.js";
import post from "./Post";

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    getPosts() {

    }

    render () {
        let postMaker = null;
        if (this.props.postEnabled) {
            postMaker = <PostMaker user={this.props.getUser} addPost={this.props.addPost}/>;
        }

        let PostList = this.props.getPosts(this.props.id);

        return (
            <div className="feed">
                {postMaker}
                {PostList}
            </div>
        );
    }
}

export default Feed;

