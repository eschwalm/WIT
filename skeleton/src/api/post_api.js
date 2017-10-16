import axios from 'axios';
import { uploadImage } from './image_api';

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
    return res.data;
  } catch (e) {
    throw e;
  }
}

const fetchSinglePost = async (id) => {
  try {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
  } catch (e) {
    throw e;
  }
}

const createPost = async (post) => {
  try {
    const res = await axios.post('/posts', post );
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
