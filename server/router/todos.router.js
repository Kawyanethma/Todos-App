const express = require("express");
const router = express.Router();

router.get("/", require("../controller/todos.controller").getTodosController);
router.post("/", require("../controller/todos.controller").addTodoController);
router.put(
  "/:id",
  require("../controller/todos.controller").markAsDoneController
);
router.delete(
  "/:id",
  require("../controller/todos.controller").deleteTodoController
);

module.exports = router;
