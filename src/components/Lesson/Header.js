import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Header = styled.header`
    background-color: #f7f8fa;
    border-bottom: ${rem(0.5)} solid #dedfe0;
    /* padding-bottom: ${rem(15)};
    margin-top: ${rem(10)};
    margin-bottom: ${rem(20)}; */
    padding: ${rem(20)};
`;

export { Header };  
