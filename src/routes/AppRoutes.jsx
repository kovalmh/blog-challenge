import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PostsList from '../features/postslist/PostsList.jsx';
import PostDetails from '../features/postdetails/PostDetails.jsx';

function AppRoutes() {
  return (
        <>
            <Redirect exact from='/' to='/posts' />
            <Route exact path='/posts' component={PostsList} />
            <Route exact path='/posts/:postId' component={PostDetails} />
        </>
  );
}

export default AppRoutes;
