import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Post from '../post/Post.jsx';
import Button from '../button/Button.jsx';

function PostsList(props) {
  const { history } = props;
  const [posts, setPosts] = useState([]);

  const createPost = () => {
    const title = prompt('Введите заголовок');
    const body = prompt('Введите текст поста');
    if (title && body) {
      axios.post('https://bloggy-api.herokuapp.com/posts', { title, body });
    }
  };

  useEffect(async () => {
    await axios('https://bloggy-api.herokuapp.com/posts')
      .then((res) => setPosts(res.data));
  });

  const postItems = posts.map((post) => <Post key={post.id} post={post} history={history} />);

  return (
        <div>
            <ol>
                {postItems}
            </ol>
            <Button onClick={createPost} children='Создать пост' />
        </div>
  );
}

export default PostsList;
