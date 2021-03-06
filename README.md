# Wit - What is this?
Wit is an all purpose identify app for iPhone. Users upload pictures of things they want to have identified or know the name of, and other users answer. Everyone is an expert on something!

- <img alt="main feed view" src="./docs/images/feed.png" height="540px"/><img alt="answer view" src="./docs/images/answer.png" height="540px"/>

- __Wit prioritizes accessibility:__ Making user accounts and passwords for every little web service is one of the most annoying things about the internet. Instead of User Authentication Wit makes use of iOS' `identifierForVendor` property to keep track of a user's settings and posts. In addition React Native's `AsyncStorage` is utilized to store session info in the devices local storage. No logins. If a user changes their device, they'll lose their data, but that's okay, because post get recycled after a while anyway.

- __Fast turnaround:__ Old posts are recycled as the app doesn't serve as a
searchable archive. What would you search for anyway? Users come here to
post a picture of something they want to identify because googling for it
proved difficult.

## Technologies
Wit uses the MERN stack (MongoDB, Express.js, React Native, Node.js),
allowing for both client-side and server-side JavaScript and JSON. Mongoose helped with easy schema setup for the NoSQL database, and Node.js with
Express provides a light weight backend.

On the front-end we use React Native for modularity and Redux for its
reliable state handling and uni-directional data flow.

## Features and Implementation
* __Feed:__ Wit's home screen is a `Feed` of all identify-asks, which
consist of a screen-wide picture, a brief description, and a category.

    <img alt="feed view" src="./docs/images/feed.gif"/>

* __Answers:__ If you see something you know or are also curious about, leave your answer in the popup modal and submit. `Answers` are just that (and hopefully helpful).
Combined knowledge is endless.

    <img alt="answer view" src="./docs/images/answer.gif"/>

* __Categories:__ `Categories` like Nature, People, Fashion, Design, or
Objects give context to an ask, and provide a way for Fashion experts
(or interested amateurs) to browse only what's in the Fashion feed.

* __Image Uploads and New Posts:__ When you add your own ask, the main focus of it is
an image. Since the user most likely snapped the item in question with their
phone camera anyway, Wit provides them with easy-access photo uploads from their
phone's camera roll. Pictures are safely stored with Cloudinary web storage and will
be deleted along with their posts after about a week.

    <img alt="new post view" src="./docs/images/new_post.gif"/>

## Technical Details
### Image Uploads
- Images are uploaded and hosted on Cloudinary. This allowed our backend to be light by storing only the necessary information.
```javascript
export const uploadImage = async (uri) => {
    const form = new FormData();
    form.append('file', {uri: uri, type: 'image/png', name: 'upload.png'});
    form.append('upload_preset', 'wit-app');
    form.append('api_key', cl.api_key);
    form.append('timestamp', (Date.now() / 1000) | 0);

    const request = await axios.post(
      'https://api.cloudinary.com/v1_1/' + cl.cloud_name + '/image/upload/',
      form, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    });

    const response = await request.data;
    return response;
};
```

### Redux Cycle
- `Axios` handles asynchronous `XMLHttpRequests` to the backend API using JSON as the format, like the `createPost` request below:
```javascript
const createPost = async (post) => {
    try {
      const res = await axios.post('/posts', post );
      return res.data;
    } catch (e) {
      throw e;
    }
}
```

- `Redux Actions` dispatch the `Axios` requests to the backend, and pass the response to the respective Redux `Reducers` that select and return the app's state with the information needed.
```javascript
const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_SINGLE_POST:
      return merge({}, state, {[action.post._id]: action.post});
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post._id];
      return newState;
    default:
      return state;
  }
};
```

- Wit utilizes the full Redux cycle to connect the backend to the React Native Presentational Components in a predictable, uni-directional fashion. The state for each presentational component is managed by its container, i.e. it's smart connector component, like the `NewPostFormContainer` below.

```javascript
const mapDispatchToProps = (dispatch) => {
  return ({
      createPost: (post) => dispatch(createPost(post))
  });
};
export default connect(null, mapDispatchToProps)(NewPostForm);
```

### React Native
- React Native makes navigation a seamless, intuitive experience for developer and user alike.  With the `react-native-router-flux` library, navigation happens on a drop of a simple function call. The below redirects the user to different 'scenes' in the application while also building out navigational pathing to the previous scene.

```javascript
postSelect() {
  Actions.postView({
    post: this.props.post,
  });
}


<Scene key='postView'
  component={PostViewContainer}
  title='Identify Me' />
```

## Future Development
* Wit should be on the app store as a full-fledged mobile application.
* As the user base grows, Wit will need to upgrade its image storage
solution, and possibly migrate to AWS.
* Android version of the Wit. More users, more answers.
* With a larger user base, we can see wanting a way to distinguish good
answers from bad ones. We'd develop a user clout system. Answers would be
sorted by upvotes, and users would receive clout for high-vote answers
in general and specific categories. Users would then have a user account,
so they wouldn't lose their clout when switching devices.
