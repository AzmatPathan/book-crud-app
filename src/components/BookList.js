import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_BASE_URL } from '../constants';

const BookContainer = styled.div`
  margin-top: 20px;
`;

const BookItem = styled.li`
  list-style: none;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      setBooks(response.data);
      console.log(response)
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <BookContainer>
      <h2>Book List</h2>
      <ul>
        {books.map((book) => (
          <BookItem key={book.ID}>
            <h3>{book.Title}</h3>
            <p>Authors: {book.Authors}</p>
            <p>Publisher: {book.Publisher}</p>
            <p>Year: {book.Year}</p>
          </BookItem>
        ))}
      </ul>
    </BookContainer>
  );
};

export default BookList;
