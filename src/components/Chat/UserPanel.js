import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';
import { Avatar } from '../Shoutbox/Avatar';


const UserPanel = styled.div`
    /* width: ${rem(250)}; */
    height: 100%;
    background-color: #fff;
    padding: ${rem(30)};
`;

const UserPanelAvatar = styled(Avatar)`
    width: ${rem(120)};
    height: ${rem(120)};
    text-align: center;
    border: ${rem(3)} solid #ecebf9;
    margin: 0 auto;
    margin-bottom: ${rem(10)};
`;

const Details = styled.div`
    margin: ${rem(15)} 0;
`;

const Input = styled.input`
    width: 100%;
    color: #222;
    border: ${rem(2)} solid #ecebf9;
    border-radius: ${rem(6)};
    padding: ${rem(10)};
    margin-bottom: ${rem(10)};
`;

const Button = styled.button`
    background-color: ${props => props.bgColor};
    width: 100%;
    color: #fff;
    font-size: ${rem(13)};
    font-weight: 600;
    border: 0;
    border-radius: ${rem(10)};
    padding: ${rem(10)};
    transition: 0.2s opacity ease-in-out;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

UserPanel.Avatar = UserPanelAvatar;
UserPanel.Details = Details;
UserPanel.Input = Input;
UserPanel.Button = Button;

export { UserPanel };