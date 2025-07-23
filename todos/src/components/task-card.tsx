import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { Trash } from "lucide-react";

function TaskCard() {
  return (
    <Card className="max-w-[400px] min-h-[200px] p-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-row items-center justify-between">
        <h4 className="font-bold text-large">Frontend Radio</h4>
        <Button isIconOnly color="danger" size={"sm"}>
          <Trash size={20} />
        </Button>
      </CardHeader>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          className="w-full"
          color="primary"
          radius="full"
          variant="ghost"
        >
          Mark as Completed
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TaskCard;
