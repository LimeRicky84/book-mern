const { User } = require('../models')

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id).populate({
                    path: 'user',
                    populate: 'book'
                })
                user.books.map()
                return user;
            }
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
        },
        saveBook: async (parent, args) => {

        },
        removeBook: async (parent, { bookId }) => {
            return User.findOneAndUpdate(
                { _id: bookId},
            );
        },
    },
};

module.exports = resolvers