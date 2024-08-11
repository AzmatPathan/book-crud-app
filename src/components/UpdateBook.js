import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_BASE_URL } from '../constants';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  width: 300px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #61dafb;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  font-size: 16px;

  &:hover {
    background-color: #21a1f1;
  }
`;

const UpdateBook = () => {
  const [bookId, setBookId] = useState('');
  const [title, setTitle] = useState('');
  const [authors, setAuthors] = useState('');
  const [publisher, setPublisher] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedBook = {
      Title: title,
      Authors: authors,
      Publisher: publisher,
      Year: year,
    };

    try {
      await axios.put(`${API_BASE_URL}/${bookId}`, updatedBook);
      alert('Book updated successfully!');
      setBookId('');
      setTitle('');
      setAuthors('');
      setPublisher('');
      setYear('');
    } catch (error) {
      console.error('Error updating book:', error);
      alert('Failed to update book.');
    }
  };

  return (
    <div>
      <h2>Update a Book</h2>
      <Form onSubmit={handleSubmit}>
        <Input type="text" value={bookId} onChange={(e) => setBookId(e.target.value)} placeholder="Book ID" required />
        <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <Input type="text" value={authors} onChange={(e) => setAuthors(e.target.value)} placeholder="Authors" required />
        <Input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} placeholder="Publisher" required />
        <Input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required />
        <Button type="submit">Update Book</Button>
      </Form>
    </div>
  );
};

export default UpdateBook;
