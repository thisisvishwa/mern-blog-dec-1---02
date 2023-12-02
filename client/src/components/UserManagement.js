```javascript
import React, { useState, useEffect } from 'react';
import { fetchUsers, registerUser } from '../services/users';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const handleInputChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(newUser).then((user) => {
      setUsers([...users, user]);
      setNewUser({});
    });
  };

  return (
    <div id="user-management">
      <h2>User Management</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={newUser.username || ''}
          onChange={handleInputChange}
          placeholder="Username"
          required
        />
        <input
          name="password"
          type="password"
          value={newUser.password || ''}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
```