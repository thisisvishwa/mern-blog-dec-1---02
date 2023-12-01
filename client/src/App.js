```javascript
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import Post from './components/Post';
import CommentList from './components/CommentList';
import Category from './components/Category';
import Tag from './components/Tag';
import Editor from './components/Editor';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import ContentManagement from './components/ContentManagement';
import Authentication from './components/Authentication';
import Authorization from './components/Authorization';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={PostList} />
        <Route path="/post/:id" component={Post} />
        <Route path="/comments/:postId" component={CommentList} />
        <Route path="/category/:id" component={Category} />
        <Route path="/tag/:id" component={Tag} />
        <Route path="/editor" component={Editor} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/user-management" component={UserManagement} />
        <Route path="/content-management" component={ContentManagement} />
        <Route path="/authentication" component={Authentication} />
        <Route path="/authorization" component={Authorization} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
}

export default App;
```