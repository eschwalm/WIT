import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import Axios from 'axios';
import PostIndexItemContainer from '../containers/post_index_item_container';

class PostsIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.fetchAllPosts());
  }

  renderPosts() {
    return this.props.posts.map(post =>
      <PostIndexItemContainer key={post._id} post={post} />
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
