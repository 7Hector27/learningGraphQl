const User = require('./userSchema');

const resolvers = {
  Query: {},
  Mutation: {
    RegisterUser: async (parent, args, context, info) => {
      const { name, password, email } = args.post;
      const user = await new User({ name, password, email }).save();
      return user;
    },
  },
};

module.exports = resolvers;
