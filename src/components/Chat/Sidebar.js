import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

import { Avatar } from '../Shoutbox/Avatar';

const Sidebar = styled.div`
    background-color: #ecebf9;
    /* width: ${rem(400)}; */
    height: 100%;
  
    /* position: fixed;
    top: 0;
    left: 0;
    z-index: 998; */
`;

const ListUsers = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const User = styled.li`
    color: #222;
    font-size: ${rem(13)};
    text-align: center;
    border-bottom: ${rem(1)} solid #f1f1f1;
    /* display: flex;
    align-items: center; */
    padding: ${rem(25)};
`;

const SidebarAvatar = styled(Avatar)`
    width: ${rem(60)};
    height: ${rem(60)};
`;

const Text = styled.p`
    font-size: ${rem(11)};
    font-weight: 600;
`;

Sidebar.ListUsers = ListUsers;
Sidebar.ListUsers.User = User;
Sidebar.ListUsers.User.Avatar = SidebarAvatar;
Sidebar.ListUsers.User.Text = Text;

export { Sidebar };