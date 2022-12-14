const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Book {
        _id: ID!
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: ID
        user: User
    }

    input savedBook {
        description: String
        title: String
        bookId: String
        image: String
        link: String
        authors: [String]
    }

    type Query {
        me: User
        user: User
    }
    
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: savedBook!): User
        removeBook(bookId: String!): User
    }

`;

module.exports = typeDefs;