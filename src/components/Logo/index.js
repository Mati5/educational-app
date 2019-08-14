import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Logo = styled.div`
    width: ${rem(45)};
    height: ${rem(45)};
    color: #fff;
    font-size: ${rem(24)};
    border-radius: 50%;
    border: ${rem(1)} solid #fff;
    padding: ${rem(9)};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.35s linear;
`;

export { Logo };