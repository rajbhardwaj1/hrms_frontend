import { useEffect, useState } from "react";
import api from "../api/axios";
import Card from "../components/ui/Card";
import EmployeeForm from "../components/employees/EmployeeForm";
import EmployeeTable from "../components/employees/EmployeeTable";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formErrors, setFormErrors] = useState({});

  // ---------------------------
  // Fetch Employees
  // ---------------------------
  async function fetchEmployees() {
    setLoading(true);
    setError("");
    try {
      const response = await api.get("/employees/");
      setEmployees(response.data);
    } catch (err) {
      setError("Failed to load employees",);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEmployees();
  }, []);

  // ---------------------------
  // Add Employee
  // ---------------------------
  async function addEmployee(e) {
    e.preventDefault();
    const form = e.target;

    const payload = {
      employee_id: form.id.value.trim(),
      full_name: form.name.value.trim(),
      email: form.email.value.trim(),
      department: form.department.value,
    };

    setFormErrors({});
    setError("");

    try {
      setLoading(true);
      const response = await api.post("/employees/", payload);
      setEmployees(prev => [...prev, response.data]);
      form.reset();
    } catch (err) {
      if (err.response?.status === 400) {
        setFormErrors(err.response.data);
      } else {
        setError("Unable to add employee");
      }
    } finally {
      setLoading(false);
    }
  }

  // ---------------------------
  // Delete Employee
  // ---------------------------
  async function deleteEmployee(employeeId) {
  if (!window.confirm("Are you sure you want to delete this employee?")) {
    return;
  }

  try {
    setLoading(true);
    setError("");

    await api.delete(`/employees/${employeeId}/`);

    setEmployees(prev =>
      prev.filter(emp => emp.employee_id !== employeeId)
    );
  } catch (err) {
    setError("Failed to delete employee");
  } finally {
    setLoading(false);
  }
}


  // ---------------------------
  // UI
  // ---------------------------
  return (
    <div className="space-y-6">
      <Card title="Add Employee">
        <EmployeeForm onAdd={addEmployee} errors={formErrors} />
      </Card>

      <Card title="Employee List">
        {loading && (
          <p className="text-sm text-gray-500">Loading...</p>
        )}

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        {!loading && employees.length === 0 && (
          <p className="text-sm text-gray-500">
            No employees found.
          </p>
        )}

        {!loading && employees.length > 0 && (
          <EmployeeTable
            employees={employees}
            onDelete={deleteEmployee}
          />
        )}
      </Card>
    </div>
  );
}
