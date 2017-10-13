import axios from 'axios';

url = 'http://localhost:3000/api';

axios.defaults.baseURL = url;

const fetchAnswers = async (id) => {
  try {
    const { data } = await axios.get(`/posts/${id}/answers`);
    return data;
  } catch (e) {
    throw e;
  }
}

const createAnswer = async (id) => {
  try {
    const res = await axios.post(`/posts/${id}/answers`, answer );
    return res;
  } catch (e) {
    throw e;
  }
}

const updateAnswer = async (path) => {
  try {
    const res = await axios.post(`/posts/${path.postId}/answers/${path.answerId}`, answer);
    return res;
  } catch (e) {
    throw e;
  }
}

export { fetchAnswers, createAnswer, updateAnswer }
