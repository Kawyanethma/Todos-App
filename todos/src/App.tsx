import { Divider } from "@heroui/divider";

import GreetingHeader from "@/components/greeting-header";
import FormSection from "@/components/form-section";
import TasksSection from "@/components/tasks-section";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <GreetingHeader />
      <div className="flex px-4 py-2 gap-4 h-[calc(100vh-80px)]">
        <FormSection />
        <Divider className="h-full" orientation="vertical" />
        <TasksSection />
      </div>
    </div>
  );
}

export default App;
