import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Avatar = styled.div`
    width: ${rem(50)};
    height: ${rem(50)};
    border-radius: 50%;
    overflow: hidden;
    margin-right: ${rem(5)};
`;

export { Avatar };