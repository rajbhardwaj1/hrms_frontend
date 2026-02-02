import { useEffect, useState } from "react";
import api from "../api/axios";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

export default function RegisterEmployee() {
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees/");
      setEmployees(res.data);
    } catch {
      console.log("Backend not connected yet");
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <>
      <h2>Register Employee</h2>
      <EmployeeForm onSuccess={fetchEmployees} />

      <h3>Registered Employees</h3>
      <EmployeeTable employees={employees} />
    </>
  );
}
