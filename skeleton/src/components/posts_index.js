import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import PostShow from './post_show';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }
  componentWillMount() {
    Axios.get('http://localhost:3000/api/posts')
    .then(response => this.setState({ posts: response.data }));
  }

  renderPosts() {
    return this.state.posts.map(post =>
      <PostShow key={post._id} post={post} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderPosts()}
      </ScrollView>
    );
  }
}

export default PostsIndex;
