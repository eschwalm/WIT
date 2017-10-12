import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import PostShow from './post_show';


class PostsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: [] };
  }
  componentWillMount() {
    Axios.get('http://localhost:3000/api/posts')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <PostShow key={album.description} album={album} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default PostsIndex;
