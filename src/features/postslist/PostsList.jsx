import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post.jsx';
import Button from '../button/Button.jsx';

const createPost = () => {
  const title = prompt('Введите заголовок');
  const body = prompt('Введите сообщение');
  axios.post('https://bloggy-api.herokuapp.com/posts', { title, body });
};

function PostsList(props) {
  const { history } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios('https://bloggy-api.herokuapp.com/posts')
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  const postItems = posts.map((post) => <Post key={post.id} post={post} history={history} />);

  return (
        <div>
            <ol>
                {postItems}
            </ol>
            <Button onClick={createPost} />
        </div>
  );
}

export default PostsList;