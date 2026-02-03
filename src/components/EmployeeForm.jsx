import { useState } from "react";

export default function EmployeeForm({ onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // backend later
    onSuccess?.();
    setForm({ name: "", email: "", department: "", designation: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 grid gap-4 md:grid-cols-2"
    >
      <input
        className="input"
        placeholder="Full Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        placeholder="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        className="input"
        placeholder="Department"
        name="department"
        value={form.department}
        onChange={handleChange}
      />
      <input
        className="input"
        placeholder="Designation"
        name="designation"
        value={form.designation}
        onChange={handleChange}
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-medium transition"
        >
          Register Employee
        </button>
      </div>
    </form>
  );
}
