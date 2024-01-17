import React from 'react';
import { Router, Route,  } from '"react-router-dom"';
import PostList from './PostList.';
import CreatePost from './CreatePost';
import Layout from './Layout';

function App() {
  return (
      <Router>
        <Layout>
          <Route path="/postlist" exact component={PostList} />
          <Route path="/create" component={CreatePost} />
        </Layout>
      </Router>
  );
}

export default App;
