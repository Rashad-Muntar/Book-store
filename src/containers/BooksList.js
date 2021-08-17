import React from 'react'
import PropTypes from 'prop-types'


function BooksList() {
    return (
        <div>
            <h2>Book List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Book ID</th>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody>
                    <Book />
                </tbody>
            </table>
        </div>
    )
}

export default BooksList
