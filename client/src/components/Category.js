```javascript
import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/categories';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div id="category-list">
      {categories.map(category => (
        <div key={category.id}>
          <h2>{category.name}</h2>
          <p>{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
```