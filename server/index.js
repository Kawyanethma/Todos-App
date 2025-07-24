const express = require("express");
const pool = require("./db");
const cors = require("cors");
const port = process.env.PORT || 3000;
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

const todosRouter = require("./router/todos.router");
app.use("/api/todos", todosRouter);

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

// Uncomment the following lines to run the server conditionally
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server has started on port: ${port}`);
  });
}

module.exports = app; // Export the app for testing
