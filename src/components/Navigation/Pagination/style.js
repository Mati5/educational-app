import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { rem } from '../../../helpers/heleprs';

const PaginationStyle = styled.nav`
    display: flex;
    justify-content: flex-end;
    margin: ${rem(35)} 0;
`;

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const Element = styled.li`
    align-self: flex-end;
    border-right: 1px solid #ccc;
    transform: skew(-15deg);

    :last-child {
        border-right: 0;
    }
`;

const ListLink = styled(Link)`
    background-color: ${props => props.active ? '#00405d' : 'transparent'};
    color: ${props => props.active ? '#fff' : '#616161'};
    font-size: ${rem(12)};
    border: 0;
    padding: ${rem(15)} ${rem(20)};
    display: block;

    cursor: pointer;
    transition: 0.3s background ease-in-out;

    :hover {
        background-color: #11516e;
        color: #fff;
    }
`;

const Dots = styled(Element)`
    align-self: flex-end;
    padding: 0 ${rem(20)};
    padding-top: ${rem(15)};
`;

PaginationStyle.List = List;
PaginationStyle.Element = Element;
PaginationStyle.Link = ListLink;
PaginationStyle.Element.Dots = Dots;

export { PaginationStyle };