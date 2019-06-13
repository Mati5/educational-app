
import styled from 'styled-components'

import { em } from '../../../helpers/heleprs';

const SidebarLayout = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e4e5e5;
  overflow-y: scroll;
  opacity: 1;
  padding: ${em(20)} ${em(20)} ${em(100)};
  box-sizing: border-box;
  position: fixed;
  top: ${em(70)};
  left: 0;
  z-index: 1;
  transition: 0.5s ease-in-out;
  display: ${props => props.opened ? "block" : "none" };

  @media(min-width: 768px) {
    width: 35%
  }

  @media(min-width: 1192px) {
    width: ${em(400)};
  }

  ::-webkit-scrollbar {
    width: ${em(8)};
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