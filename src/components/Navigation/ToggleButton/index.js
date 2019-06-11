import styled from 'styled-components';

const ToggleButton = styled.button`
    background-color: ${props => props.sidebarOpened ? "transparent" : "#29303b"};
    width: 40px;
    height: 40px;
    color: ${props => props.sidebarOpened ? "#222" : "#fff"};
    font-size: 20px;
    border: 0;

    position: fixed;
    top: 90px;
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