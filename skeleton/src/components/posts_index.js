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
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <PostShow key={album.title} album={album} />
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
