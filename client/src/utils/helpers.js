```javascript
export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

export function sortPostsByDate(posts) {
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function filterPostsByCategory(posts, category) {
  return posts.filter(post => post.category === category);
}

export function searchPosts(posts, term) {
  return posts.filter(post => post.title.toLowerCase().includes(term.toLowerCase()));
}

export function getPostById(posts, id) {
  return posts.find(post => post.id === id);
}

export function getCommentsByPostId(comments, postId) {
  return comments.filter(comment => comment.postId === postId);
}

export function getUserById(users, id) {
  return users.find(user => user.id === id);
}

export function getCategories(posts) {
  const categories = posts.map(post => post.category);
  return [...new Set(categories)];
}

export function getTags(posts) {
  const tags = posts.reduce((acc, post) => acc.concat(post.tags), []);
  return [...new Set(tags)];
}
```