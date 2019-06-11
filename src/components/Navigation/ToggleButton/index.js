import styled from 'styled-components';

import { em } from '../../../helpers/heleprs';

const ToggleButton = styled.button`
    background-color: ${props => props.sidebarOpened ? "transparent" : "#29303b"};
    width: ${em(40)};
    height: ${em(40)};
    color: ${props => props.sidebarOpened ? "#222" : "#fff"};
    font-size: ${em(20)};
    border: 0;

    position: fixed;
    top: ${em(70)};
    left: 0;
    z-index: 999;
    transition: 0.2s ease-in-out;

    :hover {
        background-color: ${props => props.sidebarOpened ? null : "#3a414c" };
        color: ${props => props.sidebarOpened ? "#999" : null };
        cursor: pointer;
    }
`;

export { ToggleButton };