import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Details = styled.p`
    color: #999;
    font-size: ${rem(12)};
    margin: 0;
    margin-top: ${rem(10)};
    padding: 0 ${rem(10)};
`;

const Date = styled.span`
    padding-left: ${rem(5)};
`;

Details.Date = Date;

export { Details };  