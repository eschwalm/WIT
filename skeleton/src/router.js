import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PostsIndexContainer from './containers/posts_index_container';
import NewPostFormContainer from './containers/new_post_form_container';
import PostView from './components/post_view';

const Routing = () => {
  return (
    <Router>
      <Scene key="main" >
        <Scene key='postIndex'
          initial='true'
          onRight={() => Actions.postForm()}
          rightTitle='Add'
          component={PostsIndexContainer}
          title='Home' />
        <Scene key='postView'
          component={PostView}
          title='Identify Me' />
        <Scene key='postForm'
          onLeft={() => Actions.postIndex()}
          leftTitle='Home'
          component={NewPostFormContainer}
          title='Create Post' />
      </Scene>
    </Router>
  );
};

export default Routing;
