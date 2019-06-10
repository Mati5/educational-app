import styled from 'styled-components';

const Button = styled.button`
    background-color: transparent;
    color: ${props => props.buttonColor || "#000"};
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Dosis';
    letter-spacing: 1px;
    display: block;
    transition: 0.2s linear;
    border: 1px solid ${props => props.buttonColor || "#000"};
    border-radius: 30px;
    padding: 15px 20px;
`;

export { Button };