import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Content = styled.div`
    background-color: ${props => props.odd};
    max-width: 100%;
    color: #fff;
    font-size: ${rem(14)};
    border-radius: ${rem(20)};
    border-top-left-radius: 0;
    padding: ${rem(10)};
    margin-left: ${rem(10)};
    margin-top: ${rem(25)};
`;

export { Content };