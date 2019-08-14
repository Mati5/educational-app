import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Icon = styled.div`
    background-color: #00405d;
    width: ${rem(45)};
    height: ${rem(45)};
    color: #fff;
    font-size: ${rem(16)};
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${rem(8)}; 
`;

export { Icon };