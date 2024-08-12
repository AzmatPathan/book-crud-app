import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import UpdateBook from './components/UpdateBook';
import DeleteBook from './components/DeleteBook';
import styled from 'styled-components';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  margin-bottom: 20px;

  a {
    margin: 0 10px;
    text-decoration: none;
    color: #61dafb;
    font-weight: bold;
  }

  a:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <Router>
      <Container>
        <h1>Book CRUD Application</h1>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/add">Add Book</Link>
          <Link to="/update">Update Book</Link>
          <Link to="/delete">Delete Book</Link>
        </Nav>
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/update" element={<UpdateBook />} />
          <Route path="/delete" element={<DeleteBook />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default withAuthenticator(App);
