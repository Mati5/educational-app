import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';
import { Link } from './Link';

const Element = styled.li`
    background-color: #f6f6f6;
    font-size: ${rem(12)};
    border: ${rem(1)} solid #eaeaea;
    border-radius: ${rem(6)};
    padding: ${rem(2)} ${rem(10)};
    margin-bottom: ${rem(8)};
`;

Element.Link = Link;

export { Element };