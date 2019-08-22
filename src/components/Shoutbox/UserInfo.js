import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';
import { Avatar } from './Avatar';

const UserInfo = styled.div`
    color: #222;
    font-size: ${rem(12)};
    display: flex;
    align-items: center;
`;

UserInfo.Avatar = Avatar;

export { UserInfo };