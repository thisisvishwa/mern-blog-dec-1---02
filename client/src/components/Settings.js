```javascript
import React, { useState } from 'react';
import { updateSettings } from '../services/users';

const Settings = () => {
  const [settings, setSettings] = useState({
    theme: '',
    layout: '',
    notifications: false,
  });

  const handleInputChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateSettings(settings);
  };

  return (
    <div id="settings">
      <form onSubmit={handleSubmit}>
        <label>
          Theme:
          <select name="theme" value={settings.theme} onChange={handleInputChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
        <label>
          Layout:
          <select name="layout" value={settings.layout} onChange={handleInputChange}>
            <option value="grid">Grid</option>
            <option value="list">List</option>
          </select>
        </label>
        <label>
          Notifications:
          <input
            name="notifications"
            type="checkbox"
            checked={settings.notifications}
            onChange={handleCheckboxChange}
          />
        </label>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
};

export default Settings;
```