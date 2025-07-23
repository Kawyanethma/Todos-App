const express = require("express");
const pool = require("./db");
const port = 3000;

const app = express();
app.use(express.json());

const todosRouter = require("./router/todos.router");
app.use("/todos", todosRouter);

const setupDatabase = async () => {
  try {
    await pool.query(
      "CREATE TABLE IF NOT EXISTS todos( id SERIAL PRIMARY KEY, title VARCHAR(100), completed BOOLEAN, description TEXT)"
    );
    console.log("Database setup complete");
  } catch (err) {
    console.error("Error setting up database:", err);
  }
};

setupDatabase();

app.listen(port, () => console.log(`Server has started on port: ${port}`));
