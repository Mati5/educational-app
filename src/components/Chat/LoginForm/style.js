import styled from 'styled-components';
import { Field } from 'redux-form'
import { rem } from '../../../helpers/heleprs';

const LoginFormStyle = styled.div``;

const Input = styled(Field)`
    width: 100%;
    color: #222;
    border: ${rem(2)} solid #ecebf9;
    border-radius: ${rem(6)};
    padding: ${rem(10)};
    margin-bottom: ${rem(10)};
`;

const Button = styled.button`
    background-color: ${props => props.bgColor};
    width: 100%;
    color: #fff;
    font-size: ${rem(13)};
    font-weight: 600;
    border: 0;
    border-radius: ${rem(10)};
    padding: ${rem(10)};
    transition: 0.2s opacity ease-in-out;

    :hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

LoginFormStyle.Input = Input;
LoginFormStyle.Button = Button;

export { LoginFormStyle }