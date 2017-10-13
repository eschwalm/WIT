import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import Axios from 'axios';
import PostIndexItem from './post_index_item';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   Axios.get('http://localhost:3000/api/posts')
  //     .then(response => this.setState({ posts: response.data }));
  // }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.fetchAllPosts());
  }

  renderPosts() {
    return this.props.posts.reverse().map(post =>
      <PostIndexItem key={post._id} post={post} />
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
