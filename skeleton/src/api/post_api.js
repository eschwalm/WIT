import axios from 'axios';
import { uploadImage } from './image_api';

// This is related to something called Genymotion, possibly for android.
// if (Platform.OS !== 'ios') {
//   url = 'http://10.0.3.2:3000/api';
// } else {
//   url = 'http://localhost:3000/api';
// }

url = 'http://localhost:3000/api';

axios.defaults.baseURL = url;

const fetchAllPosts = async () => {
  try {
    const { data } = await axios.get('/posts');
    return data;
  } catch (e) {
    throw e;
  }
}

const fetchCategoryPosts = async category => {
  try {
    const res = await axios.get(`/${category}`);
    console.log("API fetchCategoryPosts data: ", res);
    return res.data;
  } catch (e) {
    throw e;
  }
}

const fetchSinglePost = async (id) => {
  try {
    const { data } = await axios.get(`/posts/${id}`);
    console.log("API fetchSinglePost data: ", data);
    return data;
  } catch (e) {
    throw e;
  }
}

// this is assuming that post is a js object with keys and values
// like so { title: "something", img: "someurl.png" }
const createPost = async (post) => {
  try {
    const res = await axios.post('/posts', post );
    console.log("API Create data response: ", res.data);
    return res.data;
  } catch (e) {
    throw e;
  }
}

const deletePost = async (id) => {
  try {
    const res = await axios.post(`/posts/${id}`);
    return res;
  } catch (e) {
    throw e;
  }
}

export { fetchAllPosts, fetchSinglePost, fetchCategoryPosts, createPost, deletePost }
