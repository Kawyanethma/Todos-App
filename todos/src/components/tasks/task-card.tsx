import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { Trash } from "lucide-react";

interface TaskCardProps {
  title: string;
  description: string;
  onDelete: () => void;
  onComplete: () => void;
  isUpdating?: boolean;
  isDeleting?: boolean;
}

function TaskCard({
  title = "Frontend Radio",
  description = "Make beautiful websites regardless of your design experience.",
  onDelete,
  onComplete,
  isUpdating = false,
  isDeleting = false,
}: TaskCardProps) {
  return (
    <Card className="max-w-[400px] min-h-[200px] p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-row items-center justify-between">
        <h4 className="font-bold text-large">{title}</h4>
        <Button isIconOnly color="danger" size={"sm"} onPress={onDelete}>
          {isDeleting ? (
            <Spinner color="white" size="sm" />
          ) : (
            <Trash className="h-4 w-4" />
          )}
        </Button>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="w-full"
          color="primary"
          radius="full"
          variant="ghost"
          onPress={onComplete}
        >
          {isUpdating ? (
            <Spinner color="primary" size="sm" />
          ) : (
            "Mark as Completed"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
