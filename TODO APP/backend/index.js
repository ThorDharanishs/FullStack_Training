require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Todo = require("./models/Todo");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("DB Error:", err));


app.post("/todo", async (req, res) => {
  const { title } = req.body;

  try {
    const todo = new Todo({ title });
    await todo.save();
    res.status(201).json({ message: "Todo created", todo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/todo/:id", async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updated = await Todo.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true }
    );
    res.json({ message: "Todo updated", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/todo/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
