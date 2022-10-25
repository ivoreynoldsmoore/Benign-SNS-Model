import React from 'react'
import Feed from './Feed.js';
import {FriendsList} from './FriendsList.js';
import ErrorBoundary from "./ErrorBoundary.js";
import Post from "./Post.js";
import {Comment} from "./Post.js";
import {Tab, Tabs, Badge} from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

class PostState {
    constructor(key, author, timeCreated, text, img, recommended, likes) {
        this.state = {
            key: key,
            author: author,
            timeCreated: timeCreated,
            text: text,
            img: img,
            recommended: recommended,
            likes: likes,
        };
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            currentUser: 3,
            tab: 0,
            comments: [],
            postStates: [new PostState(`${this.props.users[0].state.name}_Cute Cat Pic_${new Date().getTime()}`, this.props.users[0], new Date(),"Cute Cat Pic", "Cat in Bowl.jpg", false, []),
                new PostState(`${this.props.users[1].state.name}_I love slow lorises._${new Date().getTime()}`, this.props.users[1], new Date(),"I love slow lorises.", "Slow Loris.jpg", false, []),
                new PostState(`${this.props.users[4].state.name}_I think dogs should be able to vote._${new Date().getTime()}`, this.props.users[4], new Date(), "I think dogs should be able to vote.", "", true, []),
                new PostState(`${this.props.users[5].state.name}_Here is my hot take on ducks._${new Date().getTime()}`, this.props.users[5], new Date(), "Here is my hot take on ducks.", "", true, []),
                new PostState(`${this.props.users[6].state.name}_You'll never guess what happened to me today._${new Date().getTime()}`, this.props.users[6], new Date(), "You'll never guess what happened to me today.", "", true, [])
            ],
            // posts: [
            //     <Post key={`${this.props.users[0].state.name}_Cute Cat Pic_${new Date().getTime()}`} id={`${this.props.users[0].state.name}_Cute Cat Pic_${new Date().getTime()}`} author={this.props.users[0]} text={"Cute Cat Pic"} img={"Cat in Bowl.jpg"} timeCreated={new Date()} addComment={this.addComment} getComments={this.passComments} recommended={false} getUser={this.passUser()} onChange={this.updateLikes}/>,
            //     <Post key={`${this.props.users[1].state.name}_I love slow lorises_${new Date().getTime()}`} id={`${this.props.users[1].state.name}_I love slow lorises_${new Date().getTime()}`} author={this.props.users[1]} text={"I love slow lorises"} img={"Slow Loris.jpg"} timeCreated={new Date()} addComment={this.addComment} getComments={this.passComments} recommended={false} getUser={this.passUser()}  onChange={this.updateLikes}/>,
            //     <Post key={`${this.props.users[4].state.name}_I think dogs should be able to vote._${new Date().getTime()}`} id={`${this.props.users[4].state.name}_I think dogs should be able to vote._${new Date().getTime()}`} author={this.props.users[4]} text={"I think dogs should be able to vote."} img={""} timeCreated={new Date()} addComment={this.addComment} getComments={this.passComments} recommended={true} getUser={this.passUser()} onChange={this.updateLikes}/>,
            //     <Post key={`${this.props.users[5].state.name}_Here is my hot take on ducks._${new Date().getTime()}`} id={`${this.props.users[5].state.name}_Here is my hot take on ducks._${new Date().getTime()}`} author={this.props.users[5]} text={"Here is my hot take on ducks"} img={""} timeCreated={new Date()} addComment={this.addComment} getComments={this.passComments} recommended={true} getUser={this.passUser()} onChange={this.updateLikes}/>,
            //     <Post key={`${this.props.users[6].state.name}_You'll never guess what happened to me today_${new Date().getTime()}`} id={`${this.props.users[6].state.name}_You'll never guess what happened to me today_${new Date().getTime()}`} author={this.props.users[6]} text={"You'll never guess what happened to me today"} img={""} timeCreated={new Date()} addComment={this.addComment} getComments={this.passComments} recommended={true} getUser={this.passUser()} onChange={this.updateLikes}/>
            // ],
        };
        this.handleTabs = this.handleTabs.bind(this);
        this.addComment = this.addComment.bind(this);
        this.passComments = this.passComments.bind(this);
        this.passUser = this.passUser.bind(this);
        this.passFriends = this.passFriends.bind(this);
        this.addPost = this.addPost.bind(this);
        this.updateLikes = this.updateLikes.bind(this);
        this.passLikes = this.passLikes.bind(this);
        this.passPosts = this.passPosts.bind(this);
        // console.log("Constructor Finished");
    }

    handleTabs (event, value) {
        this.setState({tab: value});
        // console.log("Tab changed");
    }

    addComment (author, text, timeCreated, postID) {
        if (this.state?.comments){
            let comment = <Comment key={`${this.state.users[this.state.currentUser]}_${text}_${timeCreated}`} author={this.state.users[this.state.currentUser]} text={text} timeCreated={timeCreated} postID={postID}/>;
            this.setState({comments: [
                    ...this.state.comments,
                    comment]});
            // console.log("A comment was added!");
        }
    }

    passComments (postID) {
        let postComments = this.state?.comments.filter((comment) => postID === comment.props.postID);
        return postComments;
    }

    passUser () {
        // console.log("User was passed!");
        return this.state?.users[this.state.currentUser];
    }

    passFriends () {
        let friendsList = this.state?.users.filter((user) => user.state.friends.includes(this.state.currentUser));
        // console.log("Friends were passed");
        return friendsList;
    }

    addPost (text, img, timeCreated) {
        let post = new PostState(`${this.state.users[this.state.currentUser].state.name}_${text}_${timeCreated.getTime()}`, this.state.users[this.state.currentUser], timeCreated, text, img, false, []);
        // let post = <Post key={`${this.state.users[this.state.currentUser].state.name}_${text}_${timeCreated.getTime()}`} id={`${this.state.users[this.state.currentUser].state.name}_${text}_${timeCreated.getTime()}`} author={this.state.users[this.state.currentUser]} text={text} img={img} timeCreated={timeCreated} addComment={this.addComment} getComments={this.passComments} recommended={false} getUser={this.passUser} onChange={this.updateLikes}/>
        this.setState({postStates: [
                ...this.state.postStates,
                post]});
        // console.log("A post was added!");
    }

    updateLikes (id) {
        if (this.state?.postStates) {
            let postIndex = this.state.postStates.findIndex(postState => id === postState.state.key);
            let postState = this.state.postStates[postIndex];

            let likeIndex = postState.state.likes.findIndex(id => id === this.state.currentUser)
            let newLikes = postState.state.likes;
            if (likeIndex >= 0) {
                newLikes.splice(likeIndex,1);
            }
            else {
                newLikes = [...newLikes, this.state.currentUser];
            }

            let newPostState = new PostState(postState.state.key, postState.state.author, postState.state.timeCreated, postState.state.text, postState.state.img, postState.state.recommended, newLikes);
            let newPostStates = this.state?.postStates;
            newPostStates[postIndex] = newPostState;
            this.setState({postStates: newPostStates});
            // console.log("A post's likes was updated!");
        }
    }

    passLikes (id) {
        if (this.state?.postStates) {
            return this.state?.postStates.find(postState => postState.state.key === id).state?.likes;
        }
        return [];
    }

    passPosts (feedID){
        let feedPostStates = [];
        if (feedID === "personal") {
            feedPostStates = this.state?.postStates.filter((postState) => !postState.state.recommended);
        }
        else {
            feedPostStates = this.state?.postStates.filter((postState) => postState.state.recommended);
        }
        let feedPosts = feedPostStates.map((postState) =>
            <Post key={postState.state.key} id={postState.state.key} author={postState.state.author} timeCreated={postState.state.timeCreated} text={postState.state.text} img={postState.state.img} addComment={this.addComment} getComments={this.passComments} getUser={this.passUser} onChange={this.updateLikes} getLikes={this.passLikes}/>
        );
        // console.log("Posts were passed!");
        return feedPosts;
    }

    render () {
        return (
            <ErrorBoundary>
                <header className="primary" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <h1 style={{width: 600}}>Benign Social Media Platform</h1>
                    <Badge badgeContent={4} color="primary">
                        <MailIcon color="action" />
                    </Badge>
                </header>
                <section className="secondary vertSplit">
                    <FriendsList getFriends={this.passFriends}/>
                    <div style={{flexGrow: 1, flexDirection: "column"}}>
                        <Tabs value={this.state.tab} onChange={this.handleTabs} className="primary" variant="fullWidth" centered>
                            <Tab label={<b>Your Feed</b>} id={0}/>
                            <Tab label={<b>Recommended for You</b>} id={1} wrapped/>
                        </Tabs>
                        <h2>Feed</h2>
                        <div className="vertSplit">
                            <div className="divider"/>
                            {this.state.tab === 0 && <Feed key="personal" id = "personal" addPost={this.addPost} postEnabled={true} getPosts={this.passPosts} getUser={this.passUser()}/>}
                            {this.state.tab === 1 && <Feed key="recommended" id = "recommended" addPost={this.addPost} postEnabled={false} getPosts={this.passPosts} getUser={this.passUser()}/>}
                            <div className="divider"/>
                        </div>
                    </div>
                </section>
            </ErrorBoundary>
        );
    }
}

export default App;