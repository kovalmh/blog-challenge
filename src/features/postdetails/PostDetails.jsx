import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostDetails(props) {
  const [post, setPost] = useState(undefined);
  const { postId } = props.match.params;

  useEffect(() => {
    axios(`https://bloggy-api.herokuapp.com/posts/${postId}`)
      .then((res) => setPost(res.data));
  }, []);

  return (
        <div>
            <div>Title: {post.title}</div>
            <div>Body: {post.body}</div>
        </div>
  );
}

export default PostDetails;
