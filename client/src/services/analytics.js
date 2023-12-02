```javascript
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchAnalytics = async () => {
  try {
    const response = await axios.get(`${API_URL}/analytics`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchPostAnalytics = async (postId) => {
  try {
    const response = await axios.get(`${API_URL}/analytics/posts/${postId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchUserAnalytics = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/analytics/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```