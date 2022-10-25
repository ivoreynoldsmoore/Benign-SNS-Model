import React from 'react'
import Post from "./Post.js";
import TextBox from "./TextBox.js";

class PostMaker extends React.Component {
    constructor(props) {
        super(props);
        this.handlePost = this.handlePost.bind(this);
    }

    handlePost(text) {
        if (text !== "") {
            // let post = <Post key={this.state.postIndex} user={ this.props.user } author={ this.props.user } text={ text } img="" timeCreated={new Date()}/>;
            // this.setState({postIndex: this.state.postIndex++});
            this.props.addPost(text, "", new Date());
        }
    }

    render () {
        return (
            <article className="tertiary postFrame">
                <TextBox onSubmit={this.handlePost}/>
            </article>
    );
    // {/*<form id="postBox" onSubmit={this.handlePost}>*/}
    // {/*    <label>*/}
    // {/*        <input className="postBox textBox" type="text" value={this.state.postBox} onChange={this.handleChange}/>*/}
    // {/*    </label>*/}
    // {/*    <input type="submit" value="Post" className="tertiary submit"/>*/}
    // {/*</form>*/}

    }
    }

    export default PostMaker;