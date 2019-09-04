import styled from 'styled-components';
import { Field } from 'redux-form'
import { rem } from '../../../helpers/heleprs';

const MessageFormStyle = styled.div``;

const Input = styled(Field)`
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

const Button = styled.button`
    background-color: transparent;
    color: #00405d;
    font-size: ${rem(24)};
    border: 0;
    padding: ${rem(15)};
    position: absolute;
    right: ${rem(8)};
    top: 50%;
    transform: translateY(-50%);
`;

MessageFormStyle.Input = Input;
MessageFormStyle.Button = Button;

export { MessageFormStyle };