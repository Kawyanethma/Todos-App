const express = require("express");
const router = express.Router();
const {
  getAllTodosController,
  getTodosController,
  addTodoController,
  markAsDoneController,
  deleteTodoController,
} = require("../controller/todos.controller");


router.get("/all", getAllTodosController);
router.get("/", getTodosController);
router.post("/", addTodoController);
router.put("/:id", markAsDoneController);
router.delete("/:id", deleteTodoController);

module.exports = router;
