import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const H1 = styled.h1`
    color: #fff;
    font-size: ${em(30)};
    font-family: 'Dosis', sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-weight: normal;
    line-height: 1.1;
`;

const H2 = styled.h2`
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Dosis';
    color: #333;
    font-size: ${em(25)};
    padding: ${em(30)} 0;
    transition: 0.35s color linear;
`;

const H3 = styled.h3`
    width: ${props => props.width};
    font-weight: 400;
    text-transform: uppercase;
    font-family: 'Dosis';
    color: #333;
    font-size: ${em(25)};
    margin-top: ${em(3)};
    margin-bottom: ${em(20)};
    transition: 0.35s color linear;
`;

export { H1, H2, H3 }