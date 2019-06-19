import styled from 'styled-components';

import { em } from '../.././../helpers/heleprs';
import { Container } from './Container';
import { List, ListLink, ListElement } from './List';

const Toolbar = styled.header`
    background-color: #00405d;
    width: 100%;
    min-height: ${em(72)};
    display: flex;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
`;

Toolbar.Container = Container;
Toolbar.List = List;
Toolbar.Link = ListLink;
Toolbar.Element = ListElement;


export { Toolbar };
