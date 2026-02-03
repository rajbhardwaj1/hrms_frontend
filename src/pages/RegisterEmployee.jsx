import { useState } from "react";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function RegisterEmployee() {
  const [employees, setEmployees] = useState([]);

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Register Employee</h2>
      <EmployeeForm
        onSuccess={() =>
          setEmployees((prev) => [
            ...prev,
            { name: "Demo", email: "demo@mail.com", department: "IT", designation: "Dev" },
          ])
        }
      />

      <h2 className="text-xl font-semibold mt-10">Registered Employees</h2>
      <EmployeeTable employees={employees} />
    </>
  );
}
