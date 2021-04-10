import React from 'react';
import { Link } from 'react-router-dom';
import { Title, ListItem } from './post.style';

function Post(props) {
  const { post } = props;

  return (
    <ListItem>
        <div>
            <Title>{post.title}</Title> <Link to={`/posts/${post.id}`}>Детальнее</Link>
        </div>
    </ListItem>
  );
}

export default Post;
