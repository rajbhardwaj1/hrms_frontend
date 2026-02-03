import { useState } from "react";
import Card from "../components/ui/Card";
import AttendanceForm from "../components/attendance/AttendanceForm";
import AttendanceTable from "../components/attendance/AttendanceTable";

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [filterDate, setFilterDate] = useState("");

  function addAttendance(e) {
    e.preventDefault();
    const form = e.target;

    const record = {
      employeeId: form.employeeId.value,
      employeeName: form.employeeName.value,
      date: form.date.value,
      status: form.status.value,
    };

    setRecords([...records, record]);
    form.reset();
  }

  const filteredRecords = filterDate
    ? records.filter((r) => r.date === filterDate)
    : records;

  return (
    <div className="space-y-6">
      <Card title="Mark Attendance">
        <AttendanceForm onAdd={addAttendance} />
      </Card>

      <Card title="Attendance Records">
        <div className="mb-4 flex gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Filter by Date
            </label>
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
              className="mt-1 w-60 rounded-lg border px-3 py-2"
            />
          </div>
        </div>

        <AttendanceTable records={filteredRecords} />
      </Card>
    </div>
  );
}
