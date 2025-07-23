import { Button } from "@heroui/button";
import { Input, Textarea } from "@heroui/input";
import { button as buttonStyles } from "@heroui/theme";

import { subtitle } from "@/components/primitives";

function FormSection() {
  return (
    <div className="flex flex-col items-start justify-start gap-5 px-8 w-1/3">
      <h1 className={subtitle({ class: "text-2xl md:text-3xl" })}>
        Create a Task
      </h1>
      <p className="text-gray-500">
        To create a new task, fill in the details below.
      </p>
      <Input label="Title" type="text" />
      <Textarea
        label="Description"
        placeholder="Enter task description here..."
        rows={6}
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
      >
        Create Task
      </Button>
    </div>
  );
}

export default FormSection;
