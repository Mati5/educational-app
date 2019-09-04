import styled from 'styled-components';

import { rem } from '../../../helpers/heleprs';

import { Avatar } from '../Shoutbox/style';

const SidebarStyle = styled.div`
    background-color: #ecebf9;
    width: ${rem(150)};
    height: 100%;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: ${rem(8)};
    }

    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    }

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
  
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

const SidebarStyleAvatar = styled(Avatar)`
    width: ${rem(60)};
    height: ${rem(60)};
    margin: 0 auto;
`;

const Text = styled.p`
    font-size: ${rem(11)};
    font-weight: 600;
`;

SidebarStyle.ListUsers = ListUsers;
SidebarStyle.ListUsers.User = User;
SidebarStyle.ListUsers.User.Avatar = SidebarStyleAvatar;
SidebarStyle.ListUsers.User.Text = Text;

export { SidebarStyle };