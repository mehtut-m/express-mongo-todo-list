const Todo = require("../models/Todo");

exports.getAllTodo = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.send({ todos });
  } catch (error) {
    next(error);
  }
};

exports.createTodo = async (req, res, next) => {
  try {
    const { title } = req.body;
    const todos = await Todo.create({ title });

    res.status(201).send({ todos });
  } catch (error) {
    next(error);
  }
};

exports.deleteTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.deleteOne({ id });

    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

exports.updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { title },
      {
        new: true,
      }
    );
    res.send(todo);
  } catch (error) {
    next(error);
  }
};
