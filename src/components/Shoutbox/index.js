import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';
import { Header } from './Header';
import { Title } from './Title';
import { Posts } from './Posts';
import { Post } from './Post';
import { Input } from './Input';
import { UserInfo } from './UserInfo'; 
import { Content } from './Content';
import { Bottom } from './Bottom';
import { Button } from './Button';

const Shoutbox = styled.div`
    width: 100%;
    height: 100%;
    /* border: ${rem(1)} solid #ccc; */
    /* border-radius: ${rem(8)}; */
    /* margin: ${rem(70)} 0; */
    overflow: hidden;
`;

Shoutbox.Header = Header;
Shoutbox.Title = Title;
Shoutbox.Posts = Posts;
Shoutbox.Post = Post;
Shoutbox.Input = Input;
Shoutbox.UserInfo = UserInfo;
Shoutbox.Content = Content;
Shoutbox.Bottom = Bottom;
Shoutbox.Button = Button;

export { Shoutbox };