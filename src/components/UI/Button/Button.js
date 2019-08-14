import styled from 'styled-components';

import { rem } from '../../../helpers/heleprs';

const Button = styled.button`
    background-color: transparent;
    width: ${props => props.width || "auto"};
    color: ${props => props.buttonColor || "#000"};
    font-size: ${rem(16)};
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis';
    letter-spacing: ${rem(1)};
    display: block;
    transition: 0.2s linear;
    border: ${rem(1)} solid ${props => props.buttonColor || "#000"};
    border-radius: ${rem(30)};
    padding: ${rem(15)} ${rem(20)};

    :hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export { Button };