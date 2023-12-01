```javascript
import React, { useState, useEffect } from 'react';
import { updateProfile } from '../services/users';

const Profile = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Fetch user data from local storage or API
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProfile(user);
  };

  return (
    <div id="profile">
      <h2>Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={user.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        </label>
        <input type="submit" value="Update Profile" />
      </form>
    </div>
  );
};

export default Profile;
```