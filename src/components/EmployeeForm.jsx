import { useForm } from "react-hook-form";
import api from "../api/axios";

export default function EmployeeForm({ onSuccess }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await api.post("/employees/", data);
      reset();
      onSuccess();
    } catch {
      alert("Failed to register employee");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Name" required />
      <input {...register("email")} placeholder="Email" required />
      <input {...register("department")} placeholder="Department" required />
      <input {...register("designation")} placeholder="Designation" required />
      <button type="submit">Register</button>
    </form>
  );
}
