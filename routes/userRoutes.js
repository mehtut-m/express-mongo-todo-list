const express = require("express");
const {
  getUserByID,
  createUser,
  getUsers,
} = require("../controllers/userController");
const router = express.Router();

// Get User
router.get("/:id", getUserByID);
router.get("/", getUsers);

router.post("/", createUser);

module.exports = router;
