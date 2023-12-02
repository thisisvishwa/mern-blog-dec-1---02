```javascript
import React from 'react';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-user">{comment.user}</div>
      <div className="comment-content">{comment.content}</div>
      <div className="comment-date">{new Date(comment.date).toLocaleDateString()}</div>
    </div>
  );
};

export default Comment;
```