```javascript
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../services/posts';
import CommentList from './CommentList';

const Post = ({ match }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await fetchPosts(match.params.id);
      setPost(fetchedPost);
    };

    fetchPost();
  }, [match.params.id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <h3>Comments</h3>
        <CommentList postId={post.id} />
      </div>
    </div>
  );
};

export default Post;
```