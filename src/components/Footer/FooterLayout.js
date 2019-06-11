import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const FooterLayout = styled.footer`
    background-color: #f0f0f0;
    color: #b0b0b0;
    font-size: ${em(15)};
    width: 100%;
    padding: ${em(40)} 0;
    margin-top: ${em(50)};
`;

export { FooterLayout };