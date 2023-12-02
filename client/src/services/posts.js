```javascript
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, post);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    const response = await axios.put(`${API_URL}/posts/${id}`, updatedPost);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/posts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```