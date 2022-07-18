import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        savedBooks {
          _id,
          bookId
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
      token
      user {
        _id
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation AddBook($book: AddBookInput) {
    addBook(book: $book) {
      _id
      username
      email
      password
      savedBooks {
        _id
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      password
      savedBooks {
        _id
        bookId
        authors
        description
        image
        link
        title
      }
    }
  }
`;
