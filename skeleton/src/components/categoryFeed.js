import React, { Component } from 'react';
import { ScrollView, ListView } from 'react-native';
import { fetchCategoryPosts } from '../actions/post_actions';
import PostIndexItemContainer from '../containers/post_index_item_container';

import { connect } from 'react-redux';


class CategoryFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("categoryFeed did mount state: ", this.state);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.fetchCategoryPosts('Fashion'));
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

  // Hmm what would go into state here, and where does it come from?
  const mapStateToProps = (state) => {
    console.log("CategoryFeed container state", state);
    return ({
      posts: Object.values(state.posts)
    });
  };

  const mapDispatchToProps = (dispatch) => {
    return ({
      fetchCategoryPosts: (category) => dispatch(fetchCategoryPosts(category))
    })
  };

  export default connect(mapStateToProps, mapDispatchToProps)(CategoryFeed)
