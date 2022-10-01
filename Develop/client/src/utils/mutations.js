import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation userLogin($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        token
        user {
            _id
        }
    }
}`;

export const ADD_USER = gql`
mutation addUser($username: String!, $password: String!, $email: String!) {
    addUser(username: $username, password: $password, email: $email) {
        user {
            _id
            username
            email
            savedBooks {
                authors
                bookId
                image
                link
                description
                title
            }
        }
        token
    }
}`;

export const SAVE_BOOK = gql`
mutation saveBook($input: savedBook!) {
    saveBook (input: $input)
    {
        _id
        username
        email
        savedBooks {
            # _id
            bookId
            description
            authors
            image
            link
            title
        }
    }
}`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
        _id
        username
        email
        savedBooks {
            # _id
            bookId
            authors
            description
            title
            image
            link
        }
    }
}`