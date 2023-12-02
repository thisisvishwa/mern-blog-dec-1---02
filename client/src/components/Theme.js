```javascript
import React, { useState } from 'react';

const Theme = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.classList.add('dark-theme');
    } else {
      setTheme('light');
      document.body.classList.remove('dark-theme');
    }
  };

  return (
    <div id="theme">
      <h2>Theme Settings</h2>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Theme;
```