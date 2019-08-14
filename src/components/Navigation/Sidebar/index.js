
import styled from 'styled-components'

import { rem } from '../../../helpers/heleprs';
import { List, ListElement, ListLink } from './List';

const Sidebar = styled.nav`
  width: 100%;
  height: 100%;
  background-color: #e4e5e5;
  overflow-y: scroll;
  opacity: 1;
  padding: ${rem(20)} ${rem(20)} ${rem(100)};
  box-sizing: border-box;
  position: fixed;
  top: ${rem(70)};
  left: 0;
  z-index: 1;
  transition: 0.5s ease-in-out;
  display: ${props => props.opened ? "block" : "none" };

  @media(min-width: 768px) {
    width: 35%
  }

  @media(min-width: 1192px) {
    width: ${rem(400)};
  }

  ::-webkit-scrollbar {
    width: ${rem(8)};
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

Sidebar.List = List;
Sidebar.Link = ListLink;
Sidebar.Element = ListElement;

export { Sidebar };
