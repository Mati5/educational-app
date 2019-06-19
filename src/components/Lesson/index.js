import styled from 'styled-components';

import { em } from '../../helpers/heleprs';

const Lesson = styled.div`
    width: ${props => props.sidebarOpened ? "65%" : "80%"};
    float: ${props => props.sidebarOpened ? "right" : "none"};
    padding: ${em(20)};
    margin: 0 auto;

    @media(min-width: 1192px) {
        width: auto;
        float: none;
        margin-left: ${props => props.sidebarOpened ? em(400) : em(80)};
    }
`;

export { Lesson };