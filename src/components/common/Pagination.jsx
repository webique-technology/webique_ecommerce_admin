import React from 'react'

const Pagination = ({ pagination, onPageChange }) => {
    return (
        <div>
            <p>Current Page: {pagination.current_page}</p>
            <p>Last Page: {pagination.last_page}</p>
            <p>Per Page: {pagination.per_page}</p>
            <p>Total: {pagination.total}</p>
            <button onClick={() => onPageChange(pagination.current_page - 1)}>Previous</button>
            <button onClick={() => onPageChange(pagination.current_page + 1)}>Next</button>
        </div>
    )
}

export default Pagination