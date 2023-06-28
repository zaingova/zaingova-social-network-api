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
      // create method applied to User model; passing in req.body
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // updates a single user by ID
  async updateUser(req, res) {
    try {
      // findOneAndUpdate method applied to User model: where _id = req.parama.userId; sets the content to req.body
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      // if no user with that ID exists
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID found' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // removes a single user by ID
  async removeUser(req, res) {
    try {
      // findOneAndDelete method applied to User: where _id = req.parans.userId
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      // if no user with that ID exists
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID found' });
      }

      res.json({ message: 'User deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // adds a new friend to a user by userId and friendId
  async addNewFriend(req, res) {
    try {
      // findOneAndUpdate method applied to User model; adds friend where their ID equals req.params.friendId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      res.json(user)
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // removes a friend from a user by userId and friendId
  async removeFriend(req, res) {
    try {
      // findOneAndUpdate method applied to User model; removes friend from friends array where _id = req.params.friendId
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true },
      );

      // if no user with that ID exists or friendId doesn't exist
      if (!user) {
        return res.status(404).json({ message: 'No user with that ID found or friend does not exist' });
      }

      res.json({ message: 'Friend deleted!' })
    } catch (err) {
      res.status(500).json(err);
    }
  },
};