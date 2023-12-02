```javascript
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchComments = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/comments/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addComment = async (postId, commentData) => {
  try {
    const response = await axios.post(`${API_URL}/comments/${postId}`, commentData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateComment = async (commentId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/comments/${commentId}`, updatedData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteComment = async (commentId) => {
  try {
    const response = await axios.delete(`${API_URL}/comments/${commentId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```