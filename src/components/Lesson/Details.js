import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const Details = styled.p`
    color: #999;
    font-size: ${em(14)};
    margin: 0;
    margin-top: ${em(10)};
    padding: 0 ${em(10)};
`;

const Date = styled.span`
    padding-left: ${em(5)};
`;

Details.Date = Date;

export { Details };  