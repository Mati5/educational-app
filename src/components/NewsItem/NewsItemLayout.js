import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const NewsItemLayout = styled.div`
    width: 100%;
    border-bottom: ${rem(2)} solid #db4a37;
    padding-bottom: ${rem(40)};
    margin: ${rem(40)} 0;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export { NewsItemLayout };