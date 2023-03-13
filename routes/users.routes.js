const {
  getAllusers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require("../controllers/users.controllers");

const router = require("express").Router();

router.get("/users", getAllusers);
router.post("/users", createUsers);
router.put("/users/:id", updateUsers);
router.delete("/users/:id", deleteUsers);

module.exports = router;
