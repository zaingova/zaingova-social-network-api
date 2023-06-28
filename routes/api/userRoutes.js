const router = require('express').Router();

const {
  getUsers,
  getSingleUser,
  postNewUser,
  updateUser,
  deleteUser,
  addNewFriend,
  removeFriend
} = require('../../controllers/userController.js');