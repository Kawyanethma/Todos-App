import { addToast } from "@heroui/toast";
import { Spinner } from "@heroui/spinner";

import TaskCard from "@/components/tasks/task-card";
import { title } from "@/components/primitives";
import EmptyContainer from "@/components/tasks/empty-container";
import {
  useDeleteTodoMutation,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from "@/services/todos.api";
import { Todo } from "@/types";

function TasksSection() {
  const { data: todos = {}, isLoading } = useGetTodosQuery({});

  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Spinner color="primary" />
      </div>
    );
  }

  const handleDelete = async (id: string) => {
    // Logic to delete the todo
    try {
      await deleteTodo(id).unwrap();
      addToast({
        title: "Todo deleted successfully",
        description: "The todo has been removed.",
        color: "success",
      });
    } catch (error) {
      addToast({
        title: "Failed to delete todo",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while deleting the todo.",
        color: "danger",
      });
    }
  };
  const handleComplete = async (id: string) => {
    // Logic to mark the todo as completed
    try {
      await updateTodo(id).unwrap();
      addToast({
        title: "Todo marked as completed",
        description: "The todo has been marked as completed.",
        color: "success",
      });
    } catch (error) {
      addToast({
        title: "Failed to mark todo as completed",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while marking the todo as completed.",
        color: "danger",
      });
    }
  };

  return (
    <div className="flex flex-col gap-4 px-8 w-2/3 h-full">
      <h2
        className={title({
          class: "text-xl md:text-2xl lg:text-2xl text-gray-700 mb-4",
        })}
      >
        Your Tasks
      </h2>
      <div className="flex flex-col  gap-4 overflow-y-auto px-5 py-3">
        {todos && todos.length > 0 ? (
          todos.map((todo: Todo) => (
            <TaskCard
              key={todo.id}
              description={todo.description}
              isDeleting={isDeleting}
              isUpdating={isUpdating}
              title={todo.title}
              onComplete={() => handleComplete(todo.id)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))
        ) : (
          <EmptyContainer />
        )}
      </div>
    </div>
  );
}

export default TasksSection;
