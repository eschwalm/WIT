import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PostsIndexContainer from './containers/posts_index_container';
import NewPostFormContainer from './containers/new_post_form_container';
import PostViewContainer from './containers/post_view_container';

import CategoriesIndex from './components/categoriesIndex';
import CategoryFeed from './components/categoryFeed';
import Main from './main';

const Routing = (props) => {
  return (
    <Router>
      <Scene key="main"
        >
        <Scene key='postIndex'
          onLeft={() => props.toggle.call(Main)}
          leftTitle='Categories'
          onRight={() => Actions.postForm()}
          rightTitle='Add'
          component={PostsIndexContainer}
          title='Home'
          initial />

        <Scene key='categoriesIndex'
          component={CategoriesIndex}
          title="Categories"
          onLeft={() => Actions.postIndex()}
          leftTitle='Home' />

        <Scene key='categoryFeed'
          component={CategoryFeed}
          title="Category Feed"
          onLeft={() => Actions.postIndex()}
          leftTitle='Home'
          onRight={() => Actions.postForm()}
          rightTitle='Add'
          />

        <Scene key='postView'
          component={PostViewContainer}
          title='Identify Me' />
        <Scene key='postForm'
          component={NewPostFormContainer}
          title='Create Post' />

      </Scene>
    </Router>
  );
};

export default Routing;
