
import styled from 'styled-components'
import { Link }  from 'react-router-dom';

import { rem } from '../../../helpers/heleprs';

const SidebarStyle = styled.nav`
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

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-top: ${rem(50)};
`;

const ListElement = styled.li`
    width: 100%;
    border-bottom: ${rem(1)} solid rgba(190, 197, 200, 0.74);
    transition: 0.35s background ease;

    :hover {
        background-color: #fdfdfd;
    }
`;

const ListLink = styled(Link)`
    width: 100%;
    height: 100%;
    color: #222;
    text-transform: uppercase;
    text-decoration: none;
    padding: ${rem(20)} 0;
    display: block;
`;

SidebarStyle.List = List;
SidebarStyle.Link = ListLink;
SidebarStyle.Element = ListElement;

export { SidebarStyle };
