import styled from 'styled-components';

import { rem } from '../../helpers/heleprs';

const Input = styled.textarea`
    background-color: transparent;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    height: ${rem(80)};
    color: #222;
    border: 0;
    border-top: ${rem(1)} solid #ccc;
    padding: ${rem(10)};
    padding-right: ${rem(35)};
`;

export { Input };