import TaskCard from "@/components/task-card";
import { title } from "@/components/primitives";
import EmptyContainer from "@/components/empty-container";

function TasksSection() {
  return (
    <div className="flex flex-col gap-4 px-8 w-2/3 h-full">
      <h2
        className={title({
          class: "text-xl md:text-2xl lg:text-2xl text-gray-700 mb-4",
        })}
      >
        Your Tasks
      </h2>
      <EmptyContainer />
      <div className="flex flex-col  gap-4 overflow-y-auto px-5 py-3">
        <TaskCard />
      </div>
    </div>
  );
}

export default TasksSection;
