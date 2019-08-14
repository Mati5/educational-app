import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';
import { Icon } from './Icon';

const Header = styled.h3`
    background-color: #f7f8fa;
    font-size: ${rem(18)};
    margin: 0;
    display: flex;
    align-items: center;
`;

Header.Icon = Icon;

export { Header};