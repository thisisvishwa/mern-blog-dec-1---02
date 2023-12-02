```javascript
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchTags = async () => {
  try {
    const response = await axios.get(`${API_URL}/tags`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addTag = async (tag) => {
  try {
    const response = await axios.post(`${API_URL}/tags`, tag);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTag = async (tagId, updatedTag) => {
  try {
    const response = await axios.put(`${API_URL}/tags/${tagId}`, updatedTag);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTag = async (tagId) => {
  try {
    const response = await axios.delete(`${API_URL}/tags/${tagId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```