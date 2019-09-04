import styled from 'styled-components';

import { rem } from '../../../helpers/heleprs';

const ShoutboxStyle = styled.div`
    width: 100%;
    height: 100%;
    /* border: ${rem(1)} solid #ccc; */
    /* border-radius: ${rem(8)}; */
    /* margin: ${rem(70)} 0; */
    overflow: hidden;
`;

const Header = styled.div`
    background-color: #fff;
    border-bottom: ${rem(1)} solid #ccc;
    padding: ${rem(15)};
`;

const Title= styled.div`
  color: #222;
  font-weight: 600;
  text-align: center;
`;

const Posts = styled.div`
    width: 100%;
    height: calc(100% - 105px);
    /* height: ${rem(350)}; */
    padding: ${rem(10)} ${rem(50)};
    overflow: auto;
    word-wrap: break-word;
`;

const Post = styled.div`
    padding: ${rem(15)} 0;
    display: flex;
    align-items: flex-start;
`;

const UserInfo = styled.div`
    color: #222;
    font-size: ${rem(12)};
    display: flex;
    align-items: center;
`;

const Avatar = styled.div`
    width: ${rem(50)};
    height: ${rem(50)};
    border-radius: 50%;
    overflow: hidden;
    margin-right: ${rem(5)};
`;

const Content = styled.div`
    background-color: ${props => props.odd};
    max-width: 100%;
    color: #fff;
    font-size: ${rem(14)};
    border-radius: ${rem(20)};
    border-top-left-radius: 0;
    padding: ${rem(10)};
    margin-left: ${rem(10)};
    margin-top: ${rem(25)};
`;

const Bottom = styled.div`
    position: relative;
`;



UserInfo.Avatar = Avatar;

ShoutboxStyle.Header = Header;
ShoutboxStyle.Title = Title;
ShoutboxStyle.Posts = Posts;
ShoutboxStyle.Post = Post;
ShoutboxStyle.UserInfo = UserInfo;
ShoutboxStyle.Content = Content;
ShoutboxStyle.Bottom = Bottom;

// To shared folder
export { Avatar }

export { ShoutboxStyle };