import React from 'react';
import { PaginationStyle } from './style';
import history from '../../../history';

const Pagination = ({ postsPerPage, totalPosts, currentPage, onPageChanged }) => {
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

    const handlemoveRight = () => {
        const nextPage = currentPage + 1;
        history.push({ pathname: `/lessons`, search: `?page=${nextPage}` });
    }

    const handlemoveLeft = () => {
        const nextPage = currentPage - 1;
        history.push({ pathname: `/lessons`, search: `?page=${nextPage}` });
    }

    return (
        <PaginationStyle>
            <PaginationStyle.List>
                <PaginationStyle.Element>
                     <PaginationStyle.Link
                        type="button"
                        as="button" 
                        onClick={() => handlemoveLeft()}
                        disabled={currentPage<=1}>Poprzednia</PaginationStyle.Link>
                </PaginationStyle.Element>
                {rangeWithDots.map((number, index) => (
                    number === '...' ?
                    <PaginationStyle.Element.Dots key={index}>
                        {number}
                    </PaginationStyle.Element.Dots> :
                    <PaginationStyle.Element key={index}>
                        <PaginationStyle.Link 
                            to={`?page=${number}`} 
                            onClick={() => onPageChanged(number)} 
                            active={(currentPage===number ? 1 : 0)}>{number}</PaginationStyle.Link>
                    </PaginationStyle.Element> 
                ))}
                <PaginationStyle.Element>
                     <PaginationStyle.Link
                        type="button"
                        as="button" 
                        onClick={() => handlemoveRight()}
                        disabled={(currentPage >= Math.ceil(totalPosts/postsPerPage))}>Następna</PaginationStyle.Link>
                </PaginationStyle.Element>
            </PaginationStyle.List>
        </PaginationStyle>
    )
};

export default Pagination;
