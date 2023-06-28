const {User, Thought} = require('../models');

module.exports = {
  // gets all thoughts
  async getThoughts(req, res) {
    try {
      
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // gets a single thought by ID
  async getSingleThought(req, res) {
    try {
      
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // creates a new thought
  async createThought(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // updates a single thought by ID
  async updateThought(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // removes a single thought by ID
  async removeThought(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // adds a new reaction to a thought by ID
  async createReaction(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  },
  // removes a reaction from a thought by ID
  async removeReaction(req, res) {
    try {

    } catch (err) {
      res.status(500).json(err);
    }
  }, 
};