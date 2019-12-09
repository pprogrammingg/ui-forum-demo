import React, { Component } from 'react'
import PostItem from './PostItem'
import PropTypes from 'prop-types'

class Posts extends Component {
  render() {
    return (
      this.props.posts.map((post) => (
          <PostItem key={ post.id } post={ post } reply={this.props.reply} />
      ))
    );
  }
}

// PropTypes
Posts.propTypes = {
    posts : PropTypes.array.isRequired,
    reply : PropTypes.func.isRequired
}

export default Posts;
