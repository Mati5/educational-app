import styled from 'styled-components';
import { Link }  from 'react-router-dom';

import { rem } from '../../../helpers/heleprs';

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

export {
    List,
    ListElement,
    ListLink
}