const request = require("supertest");
const app = require("../index");
const pool = require("../db");

beforeAll(async () => {
  await pool.query("DELETE FROM todos");
});

afterAll(async () => {
  await pool.end();
});

describe("Todos API", () => {
  let todoId;

  it("should get all todos", async () => {
    const response = await request(app).get("/todos");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it("should add a new todo", async () => {
    const response = await request(app).post("/todos").send({
      title: "Test Todo",
      description: "Test Description",
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.title).toBe("Test Todo");
    todoId = response.body.id;
  });

  it("should mark a todo as done", async () => {
    const response = await request(app).put(`/todos/${todoId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.completed).toBe(true);
  });

  it("should return 404 when marking a non-existent todo as done", async () => {
    const response = await request(app).put("/todos/999");
    expect(response.statusCode).toBe(404);
  });

  it("should delete a todo", async () => {
    const response = await request(app).delete(`/todos/${todoId}`);
    expect(response.statusCode).toBe(200);
  });

  it("should return 404 when deleting a non-existent todo", async () => {
    const response = await request(app).delete("/todos/999");
    expect(response.statusCode).toBe(404);
  });
});
