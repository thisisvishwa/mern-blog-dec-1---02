```javascript
import axios from 'axios';
import { API_URL, TOKEN_KEY } from '../utils/constants';

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/users/login`, credentials);
  localStorage.setItem(TOKEN_KEY, response.data.token);
  return response.data.user;
};

export const logoutUser = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getAuthenticatedUser = async () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) return null;

  const response = await axios.get(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateProfile = async (userData) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const response = await axios.put(`${API_URL}/users/me`, userData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateSettings = async (settingsData) => {
  const token = localStorage.getItem(TOKEN_KEY);
  const response = await axios.put(`${API_URL}/users/settings`, settingsData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
```