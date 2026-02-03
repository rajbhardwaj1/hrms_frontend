import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

export default function EmployeeForm({ onAdd, errors }) {
  return (
    <form
      onSubmit={onAdd}
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <div>
        <Input label="Employee ID" name="id" required />
        {errors.id && (
          <p className="text-sm text-red-600 mt-1">{errors.id}</p>
        )}
      </div>

      <div>
        <Input label="Full Name" name="name" required />
      </div>

      <div>
        <Input
          label="Email Address"
          name="email"
          type="email"
          required
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <Select
          label="Department"
          name="department"
          options={["IT", "HR", "Marketing", "Other"]}
          required
        />
        {errors.department && (
          <p className="text-sm text-red-600 mt-1">
            {errors.department}
          </p>
        )}
      </div>

      <div className="md:col-span-2">
        <Button type="submit">
          Add Employee
        </Button>
      </div>
    </form>
  );
}
