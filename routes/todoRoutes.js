const express = require("express");
const {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");
const router = express.Router();

// Get All Post
router.get("/", getAllTodo);
// Get Post by ID
router.get("/:id", getAllTodo);

router.post("/", createTodo);

router.put("/:id", updateTodo);

router.delete("/:id", deleteTodo);

module.exports = router;
