import { useState } from "react";
import Card from "../components/ui/Card";
import EmployeeForm from "../components/employees/EmployeeForm";
import EmployeeTable from "../components/employees/EmployeeTable";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [errors, setErrors] = useState({});

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function addEmployee(e) {
    e.preventDefault();
    const form = e.target;

    const data = {
      id: form.id.value.trim(),
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      department: form.department.value,
    };

    const newErrors = {};

    // Required checks
    if (!data.department) {
      newErrors.department = "Department is required";
    }

    // Email format
    if (!isValidEmail(data.email)) {
      newErrors.email = "Invalid email format";
    }

    // Duplicate Employee ID
    if (employees.some((e) => e.id === data.id)) {
      newErrors.id = "Employee ID already exists";
    }

    // Duplicate Email
    if (employees.some((e) => e.email === data.email)) {
      newErrors.email = "Email already exists";
    }

    // Stop if errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Clear errors & save
    setErrors({});
    setEmployees([...employees, data]);
    form.reset();
  }

  function deleteEmployee(id) {
    setEmployees(employees.filter((e) => e.id !== id));
  }

  return (
    <div className="space-y-6">
      <Card title="Add Employee">
        <EmployeeForm onAdd={addEmployee} errors={errors} />
      </Card>

      <Card title="Employee List">
        <EmployeeTable
          employees={employees}
          onDelete={deleteEmployee}
        />
      </Card>
    </div>
  );
}
