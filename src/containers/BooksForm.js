import React from 'react'

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
let i;
function BooksForm() {
    const options = [];
    for(i = 0; i < categories.length; i++) {
        options.push(<Option value={categories[i]}>{categories[i]}</Option>)
    }
    return (
        <form>
            <input type="text" className="input"></input>
            <select>
                {options}
           </select>
           <button className="btn">Add Book</button>
        </form>
    )
}

export default BooksForm;
