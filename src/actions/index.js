const newBookAction = (book) => {
    type: "CREATE_BOOK",
    book
}

const deleteBookAction = (book) => {
    type: "REMOVE_BOOK",
    book
}

export {newBookAction, deleteBookAction}