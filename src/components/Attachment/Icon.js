import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const Icon = styled.div`
    background-color: #00405d;
    width: ${em(45)};
    height: ${em(45)};
    color: #fff;
    font-size: ${em(16)};
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: ${em(8)}; 
`;

export { Icon };