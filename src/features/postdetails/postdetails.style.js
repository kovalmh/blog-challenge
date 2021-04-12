import styled from 'styled-components';
import CreateBtn from '../button/button.style';

const HeaderWrapper = styled.div`
    text-align: center;
`;

const Header = styled.h1`
    color: blueviolet;
`;

const BodyWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    color: dimgrey;
    font-size: 18px;
`;

const CommentsWrapper = styled(HeaderWrapper)`
    font-weight: 700;
    font-size: 20px;
`;

const CommentsBlock = styled(BodyWrapper)``;

const DeleteBtn = styled(CreateBtn)`
    background-color: red;
`;

const UpdateBtn = styled(CreateBtn)`
    background-color: teal;
`;

const AddCommBtn = styled(CreateBtn)`
    background-color: blueviolet;
`;

const ButtonWrapper = styled(HeaderWrapper)`
    margin-top: 25px;
`;

export {
  HeaderWrapper,
  Header,
  BodyWrapper,
  ButtonWrapper,
  CommentsWrapper,
  DeleteBtn, UpdateBtn,
  CommentsBlock,
  AddCommBtn,
};
