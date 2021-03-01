import React from 'react';


const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <ul className='pagination'>
            {pageNumbers.map(number => (
                <li key={number} className='page_item'>
                    <button className='page_button' onClick={() => paginate(number)}>
                        {number}
                    </button>
                </li>
            ))}
        </ul>

    )
}

export default Pagination;