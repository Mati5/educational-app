import styled from 'styled-components';

import { rem } from '../../../helpers/heleprs';
import { Avatar } from '../Shoutbox/style';


const UserPanelStyle = styled.div`
    width: ${rem(400)};
    height: 100%;
    background-color: #fff;
    padding: ${rem(30)};
    position: relative;
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

const ButtonBack = styled.button`
    background-color: transparent;
    width: ${rem(45)};
    height: ${rem(45)};
    border: 0;
    font-size: ${rem(24)};
    cursor: pointer;
    position: absolute;
    top: ${rem(5)};
    left: ${rem(5)};
`;

UserPanelStyle.Avatar = UserPanelAvatar;
UserPanelStyle.Details = Details;
UserPanelStyle.Input = Input;
UserPanelStyle.Button = Button;
UserPanelStyle.ButtonBack = ButtonBack;

export { UserPanelStyle };