import styled from 'styled-components';

import { rem } from '../.././../helpers/heleprs';
import { Container } from './Container';
import { Link } from 'react-router-dom';

const ToolbarStyle = styled.header`
    background-color: #00405d;
    width: 100%;
    min-height: ${rem(72)};
    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    align-self: stretch;
    display: flex;
`;

const ListLink = styled(Link)`
    height: 100%;
    color: #fff;
    text-decoration: none;
    padding: 0 ${rem(20)};
    display: flex;
    align-items: center;
`;

const ListElement = styled.li`
    margin-left: ${rem(-4)};
    position: relative;
    transition: background 0.35s ease; 

    :hover {
        background-color: #fff; 

        ${ListLink} {
            color: #00405d;;
        }
    }
`;

ToolbarStyle.Container = Container;
ToolbarStyle.List = List;
ToolbarStyle.Link = ListLink;
ToolbarStyle.Element = ListElement;


export { ToolbarStyle };
