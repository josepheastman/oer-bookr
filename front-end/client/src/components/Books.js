import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import Book from './Book';
import styled from 'styled-components';

const StyledBooksContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-left: 240px;
background-color: #F2F1F2;
h2 {
    text-align: left;
    width: 1500px;
    padding-left: 15px;
    color: #4E5053;
}
`

const StyledBook = styled.div`
border: 2px solid #D9D9D9;
width: 250px;
height: 260px;
background-color: #FFFFFF;
margin: 10px;
`


class Books extends Component {
    render() {
        return (
            <StyledBooksContainer>
                <h2>Your Books:</h2>

                {this.props.books.map(book => {
                    return (
                        <NavLink to={`/book/${book._id}`} key={book._id}>
                            <StyledBook>
                                <Book
                                    title={book.title}
                                    textBody={book.textBody}
                                />
                            </StyledBook>
                        </NavLink>
                    );
                })}
            </StyledBooksContainer>
        );
    }
}

Book.defaultProps = {
    books: [],
};

export default Books;