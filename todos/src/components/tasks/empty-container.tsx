import { SquareCheckBig } from "lucide-react";

function EmptyContainer() {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-10">
      <SquareCheckBig color="green" size={35} />
      <p className="text-gray-500 mt-3">
        No tasks available. Create a new task to get started!
      </p>
    </div>
  );
}

export default EmptyContainer;
