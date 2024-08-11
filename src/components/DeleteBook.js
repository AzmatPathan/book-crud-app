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

const DeleteBook = () => {
  const [bookId, setBookId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();  // Prevent the form from submitting

    try {
      await axios.delete(`${API_BASE_URL}/${bookId}`); // Added '/books/' to API_BASE_URL
      alert('Book deleted successfully!');
      setBookId('');
    } catch (error) {
      console.error('Error deleting book:', error);
      alert('Failed to delete book.');
    }
  };

  return (
    <div>
      <h2>Delete a Book</h2>
      <Form onSubmit={handleDelete}>
        <Input
          type="text"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          placeholder="Enter Book ID"
          required
        />
        <Button type="submit">Delete Book</Button>
      </Form>
    </div>
  );
};

export default DeleteBook;
