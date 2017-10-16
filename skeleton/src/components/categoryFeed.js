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
    this.props.fetchCategoryPosts(this.props.category)
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

  const mapStateToProps = (state) => {
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
