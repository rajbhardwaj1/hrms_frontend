import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

export default function AttendanceForm({ onAdd, loading }) {
  function handleSubmit(e) {
    e.preventDefault(); // ✅ ABSOLUTELY REQUIRED

    const form = e.target;

    const payload = {
      employee_id: form.employee_id.value.trim(),
      date: form.date.value,
      status: form.status.value,
    };

    onAdd(payload);
    form.reset();
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <Input
        label="Employee ID"
        name="employee_id"
        placeholder="E001"
        required
      />

      <Input
        label="Date"
        name="date"
        type="date"
        required
      />

      <Select
        label="Status"
        name="status"
        options={["Present", "Absent"]}
        required
      />

      <div className="md:col-span-2">
        {/* IMPORTANT FIX */}
        <Button type="submit" disabled={loading}>
          {loading ? "Marking..." : "Mark Attendance"}
        </Button>
      </div>
    </form>
  );
}
