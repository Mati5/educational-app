import styled from 'styled-components';

import { em } from '../../../helpers/heleprs';

const Button = styled.button`
    background-color: transparent;
    width: ${props => props.width || "auto"};
    color: ${props => props.buttonColor || "#000"};
    font-size: ${em(16)};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis';
    letter-spacing: ${em(1)};
    display: block;
    transition: 0.2s linear;
    border: ${em(1)} solid ${props => props.buttonColor || "#000"};
    border-radius: ${em(30)};
    padding: ${em(15)} ${em(20)};
`;

export { Button };