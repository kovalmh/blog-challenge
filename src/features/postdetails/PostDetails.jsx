import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from '../comment/Comment.jsx';
import {
  HeaderWrapper,
  Header,
  BodyWrapper,
  ButtonWrapper,
  CommentsWrapper,
  DeleteBtn,
  UpdateBtn,
  CommentsBlock,
  AddCommBtn,
} from './postdetails.style';

function PostDetails(props) {
  const [post, setPost] = useState('');
  const [comments, setComments] = useState([]);
  const { postId } = props.match.params;

  useEffect(async () => {
    await axios(`https://bloggy-api.herokuapp.com/posts/${postId}`)
      .then((res) => setPost(res.data));
  });

  const updatePost = () => {
    axios.put(`https://bloggy-api.herokuapp.com/posts/${postId}`, {
      title: prompt('Введите новый заголовок или оставьте пустым') || post.title,
      body: prompt('Введите новый текст поста или оставьте пустым') || post.body,
    });
  };

  const goToPosts = () => {
    props.history.push('/posts');
  };

  const deletePost = () => {
    axios.delete(`https://bloggy-api.herokuapp.com/posts/${postId}`);
    goToPosts();
  };

  return (
        <>
            <HeaderWrapper>
              <Header>{post.title}</Header>
            </HeaderWrapper>
            <BodyWrapper>
              {post.body}
            </BodyWrapper>
            <hr/>
            <CommentsWrapper>Комментарии:</CommentsWrapper>
            <CommentsBlock></CommentsBlock>
            <ButtonWrapper>
              <UpdateBtn onClick={updatePost} children='Обновить пост' />
              <DeleteBtn onClick={deletePost} children='Удалить пост' />
              <AddCommBtn children='Добавить комментарий' />
            </ButtonWrapper>
        </>
  );
}

export default PostDetails;
