
import styled from 'styled-components'

const SidebarLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e4e5e5;
  overflow-y: scroll;
  opacity: 1;
  padding: 20px 20px 100px;
  box-sizing: border-box;
  position: fixed;
  top: 70px;
  left: 0;
  z-index: 1;
  transition: 0.5s ease-in-out;
  display: ${props => props.opened ? "block" : "none" };

  @media(min-width: 768px) {
    width: 35%
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export {SidebarLayout};