const express = require("express");
const mongoose = require("mongoose");
const todoRouter = require("./routes/todoRoutes");
const userRouter = require("./routes/userRoutes");
const authRouter = require("./routes/authRoutes");
const User = require("./models/User");

mongoose.connect("mongodb://127.0.0.1:27017/todo_test", {
  useNewUrlParser: true,
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/todo", todoRouter);
app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
