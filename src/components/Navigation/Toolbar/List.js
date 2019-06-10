import styled from 'styled-components';
import { Link }  from 'react-router-dom';

const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    display: flex;
`;

const ListLink = styled(Link)`
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
`;

const ListElement = styled.li`
    padding: 0 20px;
    margin-left: -4px;
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