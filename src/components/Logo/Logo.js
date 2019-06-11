import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const Logo = styled.div`
    width: ${em(35)};
    height: ${em(35)};
    color: #fff;
    font-size: ${em(24)};
    border-radius: 50%;
    border: ${em(1)} solid #fff;
    padding: ${em(9)};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.35s linear;
`;

export { Logo };