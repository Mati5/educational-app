import React from 'react';
import { Link }  from 'react-router-dom';
import styled from 'styled-components';
import history from '../../../history';

import { em } from '../../../helpers/heleprs';

const Pagination = ({ postsPerPage, totalPosts, currentPage, onPageChanged }) => {
    const Pagination = styled.nav`
        display: flex;
        justify-content: flex-end;
        margin: ${em(35)} 0;
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
        font-size: ${em(12)};
        border: 0;
        padding: ${em(15)} ${em(20)};
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
        padding: 0 ${em(20)};
        padding-top: ${em(15)};
    `;

    Pagination.List = List;
    Pagination.Element = Element;
    Pagination.Link = ListLink;
    Pagination.Element.Dots = Dots;

    const numbers = [];
    const last = totalPosts;
    const right = currentPage + 3;
    const left = currentPage - 2;
    let l;
    const rangeWithDots = [];

    for(let i=1; i<=Math.ceil(totalPosts/postsPerPage); i++) {
        if (i === 1 || i === last || (i >= left && i < right)) {
            numbers.push(i);
        }
    }

    // if(currentPage < Math.ceil(totalPosts/postsPerPage))
    //     numbers.push(Math.ceil(totalPosts/postsPerPage));

    for (let i of numbers) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    const handleMoveRight = () => {
        const nextPage = currentPage + 1;
        history.push({ pathname: `/lessons`, search: `?page=${nextPage}` });
    }

    const handleMoveLeft = () => {
        const nextPage = currentPage - 1;
        history.push({ pathname: `/lessons`, search: `?page=${nextPage}` });
    }

    return (
        <Pagination>
            <Pagination.List>
                <Pagination.Element>
                     <Pagination.Link
                        type="button"
                        as="button" 
                        onClick={() => handleMoveLeft()}
                        disabled={currentPage<=1}>Poprzednia</Pagination.Link>
                </Pagination.Element>
                {rangeWithDots.map((number, index) => (
                    number === '...' ?
                    <Pagination.Element.Dots key={index}>
                        {number}
                    </Pagination.Element.Dots> :
                    <Pagination.Element key={index}>
                        <Pagination.Link 
                            to={`?page=${number}`} 
                            onClick={() => onPageChanged(number)} 
                            active={(currentPage===number ? 1 : 0)}>{number}</Pagination.Link>
                    </Pagination.Element> 
                ))}
                <Pagination.Element>
                     <Pagination.Link
                        type="button"
                        as="button" 
                        onClick={() => handleMoveRight()}
                        disabled={(currentPage >= Math.ceil(totalPosts/postsPerPage))}>Następna</Pagination.Link>
                </Pagination.Element>
            </Pagination.List>
        </Pagination>
    )
}

export default Pagination;
