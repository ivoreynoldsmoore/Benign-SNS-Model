import Tooltip from '../node_modules/@mui/material/Tooltip';
import Profile from "./Profile.js";
import ErrorBoundary from "./ErrorBoundary.js";
import ToggleButton from "./ToggleButton.js";
import TextBox from "./TextBox.js";
import React from 'react'
import Image from './Image';

export class Comment extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <article className="commentFrame">
                <Profile user = { this.props.author } timeCreated = { this.props.timeCreated } frameWidth = {550} iconSize = {25}/>
                <div><p>{this.props.text}</p></div>
            </article>
        );
    }
}

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: this.props.likes,
        };
        this.handleComment = this.handleComment.bind(this);
        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.props.onChange(this.props.id);
    }


    handleComment(text) {
        if (text !== "") {
            // const comment = <Comment key={this.state.newID} author = { this.props.user } timeCreated = { new Date()} message = { text }/>;
            // this.setState({comments: [...this.state.comments, comment]})
            this.props.addComment(this.props.user, text, new Date(), this.props.id);
            this.forceUpdate();
        }
    }

    render() {
        let image = null;
        if (this.props.img !== "") {
            image = <Image src={`user/${this.props.img}`} alt={this.props.author.state.name}/>;
        }

        let tab = null;
        if (this.props.recommended) {
            tab = <b>Recommended for You</b>;

        }

        let commentsList = this.props.getComments(this.props.id);

        let likes = this.props.getLikes(this.props.id);
        return (
            <ErrorBoundary>
                <article className="tertiary postFrame">
                    {tab}
                    <div style={{paddingLeft: 10, paddingRight: 10, width: 580}}>
                        <Profile user = { this.props.author } timeCreated = { this.props.timeCreated } frameWidth = {600} iconSize = {30} />
                        <div><p>{this.props.text}</p></div>
                    </div>
                    {image}
                    <hr/>
                    <div className="shelf">
                        <Tooltip title={`${likes.length} Likes`} enterDelay={500}>
                            <div className="information">
                                <Image className = "informationIcon" src="util/information.png" atl="Information"/>
                            </div>
                        </Tooltip>
                        <ToggleButton on={likes.includes(this.props.getUser().props.id)} onText = {String.fromCodePoint(0x1F49A)} offText = {String.fromCodePoint(0x1F49A)} onClick={this.handleLike}/>
                    </div>
                    <hr/>
                    <div className="shelf">
                        <TextBox onSubmit={this.handleComment}/>
                    </div>
                    <hr/>
                    <div className="list">
                        {commentsList}
                    </div>
                </article>
            </ErrorBoundary>
        );
    }
}

Post.defaultProps = {
    likes: 0,
    comments: [],
    timeCreated: new Date(),
    img: "",
    recommended: false,
}

export default Post;