import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

export default function AttendanceForm({ onAdd }) {
  return (
    <form onSubmit={onAdd} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input label="Employee ID" name="employeeId" required />
      <Input label="Employee Name" name="employeeName" required />
      <Input label="Date" name="date" type="date" required />

      <Select
        label="Status"
        name="status"
        options={["Present", "Absent"]}
        required
      />

      <div className="md:col-span-2">
        <Button type="submit">Mark Attendance</Button>
      </div>
    </form>
  );
}
