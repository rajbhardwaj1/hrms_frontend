import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

export default function AttendanceForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Select label="Employee" options={["E001", "E002"]} />
      <Input type="date" label="Date" />
      <Select label="Status" options={["Present", "Absent"]} />

      <div className="md:col-span-3">
        <Button>Mark Attendance</Button>
      </div>
    </form>
  );
}
