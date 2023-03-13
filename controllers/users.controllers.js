let users = require("../modals/users.models");
const { v4: uuidv4 } = require("uuid");

const getAllusers = (req, res) => {
  res.status(201).json(users);
};

const createUsers = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(200).json(users);
};

const updateUsers = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userId)
    .map((selectedUser) => {
      selectedUser.username = username;
      selectedUser.email = email;
    });
  res.status(200).json(users);
};

const deleteUsers = (req, res) => {
  const userId = req.params.id;
  users = users.filter((user) => user.id !== userId);
  res.status(200).json(users);
};

module.exports = { getAllusers, createUsers, updateUsers, deleteUsers };
