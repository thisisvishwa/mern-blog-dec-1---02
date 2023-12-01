```javascript
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authenticateUser } from '../services/auth';

const Authentication = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await authenticateUser(username, password);
      if (response.status === 200) {
        localStorage.setItem(TOKEN_KEY, response.data.token);
        history.push('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during authentication', error);
    }
  };

  return (
    <div id="authentication">
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Authentication;
```