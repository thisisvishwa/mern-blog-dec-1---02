```javascript
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const uploadMedia = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const config = {
    headers: {
      'content-type': 'multipart/form-data'
    }
  };

  try {
    const response = await axios.post(`${API_URL}/media/upload`, formData, config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteMedia = async (mediaId) => {
  try {
    const response = await axios.delete(`${API_URL}/media/${mediaId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```