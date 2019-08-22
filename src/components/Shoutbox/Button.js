import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Button = styled.button`
    background-color: transparent;
    color: #00405d;
    font-size: ${rem(24)};
    border: 0;
    padding: ${rem(15)};
    position: absolute;
    right: ${rem(8)};
    top: 50%;
    transform: translateY(-50%);
`;

export { Button };