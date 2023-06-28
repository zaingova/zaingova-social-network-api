const router = require('express').Router();

const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  removeThought,
  createReaction,
  removeReaction
} = require('../../controllers/thoughtController.js')