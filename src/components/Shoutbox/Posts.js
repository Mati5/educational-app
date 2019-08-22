import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Posts = styled.div`
    width: 100%;
    height: calc(100% - 105px);
    /* height: ${rem(350)}; */
    padding: ${rem(10)} ${rem(50)};
    overflow: auto;
    word-wrap: break-word;
`;

export { Posts };