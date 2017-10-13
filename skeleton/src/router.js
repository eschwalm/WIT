import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PostsIndexContainer from './containers/posts_index_container';
import NewPostForm from './components/new_post_form';
import PostView from './components/post_view';

const Routing = () => {
  return (
    <Router>
      <Scene key="main" >
        <Scene key='postIndex'
          onRight={() => Actions.postForm()}
          rightTitle='Add'
          component={PostsIndexContainer}
          title='Posts' />
        <Scene key='postForm'
          component={NewPostForm}
          title='createPost'/>
      </Scene>
    </Router>
  );
};

export default Routing;
