import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const H2 = styled.h2`
    font-size: ${em(32)};
    text-transform: uppercase;
    font-weight: normal;
    font-family: 'Dosis', sans-serif;
    border-bottom: ${em(1)} solid #e5e5e5;
    padding-bottom: ${em(10)};
`;

export { H2 };