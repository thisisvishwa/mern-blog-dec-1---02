```javascript
import React, { useState, useEffect } from 'react';
import { fetchPosts, fetchCategories, fetchTags, updatePost, deletePost } from '../services/posts';
import { API_URL } from '../utils/constants';

const ContentManagement = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    loadPosts();
    loadCategories();
    loadTags();
  }, []);

  const loadPosts = async () => {
    const response = await fetchPosts(API_URL);
    setPosts(response.data);
  };

  const loadCategories = async () => {
    const response = await fetchCategories(API_URL);
    setCategories(response.data);
  };

  const loadTags = async () => {
    const response = await fetchTags(API_URL);
    setTags(response.data);
  };

  const handleUpdatePost = async (postId, updatedPost) => {
    await updatePost(API_URL, postId, updatedPost);
    loadPosts();
  };

  const handleDeletePost = async (postId) => {
    await deletePost(API_URL, postId);
    loadPosts();
  };

  return (
    <div id="content-management">
      <h2>Content Management</h2>
      <div className="post-list">
        {posts.map((post) => (
          <div key={post._id}>
            <h3>{post.title}</h3>
            <button onClick={() => handleUpdatePost(post._id, post)}>Update</button>
            <button onClick={() => handleDeletePost(post._id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="category-list">
        {categories.map((category) => (
          <div key={category._id}>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
      <div className="tag-list">
        {tags.map((tag) => (
          <div key={tag._id}>
            <h3>{tag.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentManagement;
```