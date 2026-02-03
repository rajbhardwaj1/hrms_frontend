import Card from "../components/ui/Card";
import AttendanceForm from "../components/attendance/AttendanceForm";
import AttendanceTable from "../components/attendance/AttendanceTable";

export default function Attendance() {
  const records = [];

  return (
    <div className="space-y-6">
      <Card title="Mark Attendance">
        <AttendanceForm />
      </Card>

      <Card title="Attendance Records">
        <AttendanceTable records={records} />
      </Card>
    </div>
  );
}
