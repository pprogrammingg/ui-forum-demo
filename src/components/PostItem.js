import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AddComment from './AddComment';
import axios from 'axios';

export class PostItem extends Component {
    
    state = {
        replyMode : false,
        expanded : false,
        comments : [],
        messageBody : '',
        userFirstName : '',
        userLastName : ''
    }

    fetchCommentsForPosting = (id) => {
        axios
			.get(`/postings/${id}/comments`)
			.then((res) => this.setState({ 
                replyMode : this.state.replyMode,
                expanded : this.state.expanded,
                comments : res.data,
                messageBody : '',
                userFirstName : '',
                userLastName : '' }));
    }

    toggleReplyInputForm = (e) => {
        // no need to climb up any ladder, as working with component level state
        this.setState( {
            replyMode : !this.state.replyMode,
            expanded : this.state.expanded,
            comments : this.state.comments,
            messageBody : '',
            userFirstName : '',
            userLastName : ''
        });
    };

    toggleExpand = (e) => {
        this.setState( {
            replyMode : this.state.replyMode,
            expanded : !this.state.expanded,
            comments : this.state.comments,
            messageBody : '',
            userFirstName : '',
            userLastName : ''
        });

        this.fetchCommentsForPosting(this.props.post.id);
    };

    getPostingStyle = () => {
        return {
            backgroundColor : this.props.post.originalPostingId? '#494949' : '#f4f4f4',
            color : this.props.post.originalPostingId? '#fff' : '#000',
            padding : '10px',
            marginTop : '5px',
            marginBottom : '5px',
            borderBottom : '1px red dotted',
            display : 'flex',
            flexFlow: 'row wrap'
        }
    }

    getCommentStyle = ( commentIndex, marginLeft ) => {
        return {
            backgroundColor : '#494949',
            color : '#fff',
            marginLeft : `calc(100% + 10px)`,
            width : '100%',
            border : 'solid #fff'
        }
    };
    
    render() {
        const { id, messageBody, userFirstName, userLastName } = this.props.post;
        
        return (
            <div style={ this.getPostingStyle() }>
                <pre style={{ flex : '1 auto', float: 'left', marginRight: '10px' }}>
                    from: { userFirstName } { userLastName } <br />
                    Location: Toronto
                </pre>
                <p style={{ flex: '8' }}> 
                    { messageBody } 
                </p>
                <button onClick={ this.toggleReplyInputForm } style={btnStyle}>{ this.state.replyMode ? "cancel" : "reply"}</button>
                { this.state.replyMode ? <AddComment originalPostingId={ id } addComment={ this.props.addComment } />  : null}
                <button onClick={ this.toggleExpand } style={btnStyle}>{ this.state.expanded ? "collapse" : "expand"}</button>
                { (this.state.expanded && this.state.comments.length > 0) ? 
                        this.state.comments.map((comment, commentIndex) => (
                            <div id={ "comment_" + commentIndex } style={ this.getCommentStyle(commentIndex, commentIndex+10) }>
                                <pre style={{ flex : '1 auto', float: 'left', marginRight: '10px' }}>
                                    from: { comment.userFirstName } { comment.userLastName } <br />
                                    Location: Toronto
                                </pre>
                                <p style={{ flex: '8' }}> 
                                    { comment.messageBody } 
                                </p>
                            </div>
                            ))  : null}
            </div>
        )
    }
}

// PropTypes, <className>.propTypes = { prop: validation_rule}
PostItem.propTypes = {
    post : PropTypes.object.isRequired,
    addComment : PropTypes.func.isRequired
}

const btnStyle = {
    background: 'teal',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
  }

export default PostItem;
