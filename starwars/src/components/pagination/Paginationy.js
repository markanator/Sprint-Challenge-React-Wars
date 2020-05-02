import React from 'react';
import {Pagination, PaginationItem, PaginationLink} from 'reactstrap';

const Paginationy = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalChars / props.CharPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <Pagination size='lg' aria-label='Page Nav'>
                {pageNumbers.map((index) => {
                    return (
                        <PaginationItem key={index}>
                            <PaginationLink href='!#' onClick={() => props.paginate(index)} key={index}>{index}</PaginationLink>
                        </PaginationItem>
                    );
                })}
            </Pagination>
        </div>
    )
}

export default Paginationy;