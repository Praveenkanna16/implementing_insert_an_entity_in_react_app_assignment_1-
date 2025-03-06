import React from 'react';
import { Link } from 'react-router-dom';
import './AddBook.css';
const AddBook = () => {
    return (
        <div>
            <h1>Add Book</h1>
            <form>
                <div>
                    <label>Title:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea></textarea>
                </div>
                <div>
                    <label>Cover Image URL:</label>
                    <input type="url" />
                </div>
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Go back to Home</Link>
        </div>
    );
};

export default AddBook;