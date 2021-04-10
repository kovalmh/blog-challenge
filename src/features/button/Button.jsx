import React from 'react';
import axios from 'axios';
import CreateBtn from './button.style';

function Button(props) {
  const { onClick } = props;
  return (
    <CreateBtn onClick={onClick} children={props.children} />
  );
}

export default Button;
