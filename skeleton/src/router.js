import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import PostsIndexContainer from './containers/posts_index_container';
import PostView from './components/post_view';

const Routing = () => {
  return (
    <Router>
      <Scene key="root" >
        <Scene key='postIndex' component={PostsIndexContainer} title='Posts' />
      </Scene>
    </Router>
  );
};

export default Routing;
