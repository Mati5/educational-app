import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const NewsItemLayout = styled.div`
    width: 100%;
    border-bottom: ${em(2)} solid #db4a37;
    padding-bottom: ${em(40)};
    margin: ${em(40)} 0;

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export { NewsItemLayout };