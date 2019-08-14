import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const H2 = styled.h2`
    font-size: ${rem(32)};
    text-transform: uppercase;
    font-weight: normal;
    font-family: 'Dosis', sans-serif;
    border-bottom: ${rem(1)} solid #e5e5e5;
    padding-bottom: ${rem(10)};
`;

export { H2 };