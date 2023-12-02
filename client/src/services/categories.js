```javascript
import axios from 'axios';
import { API_URL } from '../utils/constants';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addCategory = async (category) => {
  try {
    const response = await axios.post(`${API_URL}/categories`, category);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCategory = async (id, updatedCategory) => {
  try {
    const response = await axios.put(`${API_URL}/categories/${id}`, updatedCategory);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteCategory = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/categories/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
```