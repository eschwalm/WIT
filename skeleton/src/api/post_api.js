import axios from 'axios';

// Dunno if this is necessary for our case:
// if (Platform.OS !== 'ios') {
//   url = 'http://10.0.3.2:3000/api'; //put a real url here
// } else {
//   url = 'http://localhost:3000/api';
// }

axios.defaults.baseURL = 'http://localhost:3000/api'; //or 'url' if we have the above

class PostsApi {
  // constructor() {
  //   this.path = '/posts';
  // }

  async fetchAllPosts() {
    try {
      const { data } = await axios.get('/posts');
      return data.posts;
    } catch (e) {
      throw e;
    }
  }

  async fetchSinglePost(id) {
    try {
      const { data } = await axios.get(`/posts/${id}`);
      return data.post;
    } catch (e) {
      throw e;
    }
  }

  // this is assuming that post is a js object with keys and values
  // like so { title: "something", img_url: "someurl.png" }
  async createPost(post) {
    try {
      const res = await axios.post('/posts', post );
      return res;
    } catch (e) {
      throw e;
    }
  }

  async deletePost(id) {
    try {
      const res = await axios.post(`/posts/${id}`);
      return res;
    } catch (e) {
      throw e;
    }
  }

}

export { MeetupApi };
