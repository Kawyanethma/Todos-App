import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { Form } from "@heroui/form";
import { button as buttonStyles } from "@heroui/theme";
import { addToast } from "@heroui/toast";
import { useForm } from "react-hook-form";

import { subtitle } from "@/components/primitives";
import { useAddTodoMutation } from "@/services/todos.api";
import { Spinner } from "@heroui/spinner";

type FormData = {
  title: string;
  description: string;
};

function FormSection() {
  const [addTodo, { isLoading }] = useAddTodoMutation();

  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    if (!data.title || !data.description) {
      return;
    }
    try {
      await addTodo(data).unwrap();
      addToast({
        title: "Todo created successfully",
        description: "Your todo has been added.",
        color: "success",
      });
    } catch (error) {
      addToast({
        title: "Failed to create todo",
        description:
          error instanceof Error
            ? error.message
            : "An error occurred while creating the todo.",
        color: "danger",
      });
    }
    reset(); // Reset the form after submission
  };

  return (
    <div className="flex flex-col items-start justify-start gap-5 px-8 w-1/3">
      <h1 className={subtitle({ class: "text-2xl md:text-3xl" })}>
        Create a Task
      </h1>
      <p className="text-gray-500">
        To create a new task, fill in the details below.
      </p>
      <Form className="w-full gap-8" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title", { required: true })}
          isRequired
          errorMessage={"Title is required"}
          label="Title"
          name="title"
          type="text"
        />
        <Textarea
          {...register("description", { required: true })}
          isRequired
          errorMessage={"Description is required"}
          label="Description"
          name="description"
          placeholder="Enter task description here"
          rows={6}
          type="text"
        />

        <Button
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          style={{
            alignSelf: "flex-end",
          }}
          type="submit"
        >
          {isLoading ? <Spinner color="white" size="sm" /> : "Create Task"}
        </Button>
      </Form>
    </div>
  );
}

export default FormSection;
