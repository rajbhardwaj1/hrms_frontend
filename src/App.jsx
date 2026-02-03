import { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";

export default function App() {
  const [active, setActive] = useState("employees");

  return (
    <div className="flex">
      <Sidebar active={active} setActive={setActive} />

      <div className="flex-1 bg-gray-50 min-h-screen">
        <Header
          title={
            active === "employees"
              ? "Employee Management"
              : "Attendance Management"
          }
        />

        <main className="p-6">
          {active === "employees" && <Employees />}
          {active === "attendance" && <Attendance />}
        </main>
      </div>
    </div>
  );
}
