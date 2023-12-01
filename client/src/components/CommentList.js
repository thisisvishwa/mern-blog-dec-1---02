```javascript
import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import { fetchComments } from '../services/comments';

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments(postId)
      .then(fetchedComments => setComments(fetchedComments))
      .catch(error => console.error(error));
  }, [postId]);

  return (
    <div id="comment-list">
      {comments.map(comment => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
```