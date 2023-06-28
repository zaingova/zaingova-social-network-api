const { User, Thought } = require('../models');

module.exports = {
  // gets all users
  async getUsers(req, res) {
    try {
      // find method applied to the User model
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // gets a single user by ID
  async getSingleUser(req, res) {
    try {
      // findOne method applied to the user model; where _id = req.params.userId
      const user = await User.findOne({ _id: req.params.userId })
        .select('-__v');

      // if no user found
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // creates a new user
  async createUser(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // updates a single user by ID
  async updateUser(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // removes a single user by ID
  async removeUser(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // adds a new friend to a user by userId and friendId
  async addNewFriend(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // removes a friend from a user by userId and friendId
  async removeFriend(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
};