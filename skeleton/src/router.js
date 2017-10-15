import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import PostsIndexContainer from './containers/posts_index_container';
import NewPostFormContainer from './containers/new_post_form_container';
import PostView from './components/post_view';

import CategoriesIndex from './components/categoriesIndex';
import CategoryFeed from './components/categoryFeed';

const Routing = () => {
  return (
    <Router>
      <Scene key="main" >
        <Scene key='postIndex'
          onLeft={() => Actions.categoriesIndex()}
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
          onRight={() => Actions.categoriesIndex()}
          rightTitle='Categories'/>

        <Scene key='postView'
          component={PostView}
          title='Identify Me' />
        <Scene key='postForm'
          component={NewPostFormContainer}
          title='Create Post' />
      </Scene>
    </Router>
  );
};

export default Routing;
