import { CloudSun, Sun, Moon } from "lucide-react";

import { subtitle } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";

function GreetingHeader() {
  const greetings = () => {
    const hour = new Date().getHours();

    if (hour < 12) {
      return (
        <div className="flex flex-row items-center gap-2">
          <span className={subtitle({ class: "text-lg" })}>Good Morning</span>
          <CloudSun color="Orange" />
        </div>
      );
    } else if (hour < 18) {
      return (
        <div className="flex flex-row items-center gap-2">
          <span className={subtitle({ class: "text-lg" })}>Good Afternoon</span>
          <Sun color="Orange" />
        </div>
      );
    } else {
      return (
        <div className="flex flex-row items-center gap-2">
          <span className={subtitle({ class: "text-lg" })}>Good Evening</span>
          <Moon color="Orange" />
        </div>
      );
    }
  };

  return (
    <header className="flex items-center justify-between px-6 py-4">
      {greetings()}
      <ThemeSwitch />
    </header>
  );
}

export default GreetingHeader;
