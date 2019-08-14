import { Link }  from 'react-router-dom';
import styled from 'styled-components'

import { rem } from '../../../helpers/heleprs';

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

export {
    List,
    ListElement,
    ListLink
};