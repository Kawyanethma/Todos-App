const pool = require("../db");

exports.getAllTodosController = async (req, res) => {
  try {
    const todos = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    res.status(200).json(todos.rows);
  } catch (err) {
    console.error("Error fetching all todos:", err);
    res.status(500).send("Internal Server Error");
  }
};

exports.getTodosController = async (req, res) => {
  try {
    const todos = await pool.query(
      "SELECT * FROM todos WHERE completed = FALSE ORDER BY id DESC LIMIT 5"
    );
    res.status(200).json(todos.rows);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).send("Internal Server Error");
  }
};
exports.addTodoController = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = await pool.query(
      "INSERT INTO todos (title, completed, description) VALUES ($1, $2, $3) RETURNING *",
      [title, false, description]
    );
    res.status(201).json(newTodo.rows[0]);
  } catch (err) {
    console.error("Error adding todo:", err);
    res.status(500).send("Internal Server Error");
  }
};

exports.markAsDoneController = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTodo = await pool.query(
      "UPDATE todos SET completed = TRUE WHERE id = $1 RETURNING *",
      [id]
    );
    if (updatedTodo.rows.length === 0) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json(updatedTodo.rows[0]);
  } catch (err) {
    console.error("Error marking todo as done:", err);
    res.status(500).send("Internal Server Error");
  }
};
exports.deleteTodoController = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await pool.query(
      "DELETE FROM todos WHERE id = $1 RETURNING *",
      [id]
    );
    if (deletedTodo.rows.length === 0) {
      return res.status(404).send("Todo not found");
    }
    res.status(200).json(deletedTodo.rows[0]);
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).send("Internal Server Error");
  }
};
