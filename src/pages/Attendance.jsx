import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import AttendanceForm from "../components/attendance/AttendanceForm";
import AttendanceTable from "../components/attendance/AttendanceTable";
import api from "../api/axios";

export default function Attendance() {
  const [records, setRecords] = useState([]);
  const [filterDate, setFilterDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ---------------------------
  // Fetch Attendance
  // ---------------------------
  async function fetchAttendance(date = "") {
    try {
      setLoading(true);
      setError("");

      const res = await api.get("/attendance/", {
        params: date ? { date } : {},
      });

      // ✅ SAFETY: always an array
      setRecords(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      setError("Failed to load attendance records");
      setRecords([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAttendance();
  }, []);

  // ---------------------------
  // Mark Attendance
  // ---------------------------
  async function addAttendance(payload) {
    try {
      setLoading(true);
      setError("");

      await api.post("/attendance/", payload);
      await fetchAttendance(filterDate);
    } catch (err) {
      setError(
        err.response?.data?.detail ||
          "Attendance already marked for this employee and date"
      );
    } finally {
      setLoading(false);
    }
  }

  // ---------------------------
  // Count Present Days (✅ FIXED)
  // ---------------------------
  const presentCount = records.reduce((acc, r) => {
    if (
      r.status === "Present" &&
      r.employee?.employee_id
    ) {
      const empId = r.employee.employee_id;
      acc[empId] = (acc[empId] || 0) + 1;
    }
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <Card title="Mark Attendance">
        <AttendanceForm onAdd={addAttendance} loading={loading} />
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </Card>

      <Card title="Attendance Records">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Filter by Date
          </label>
          <input
            type="date"
            value={filterDate}
            onChange={(e) => {
              const date = e.target.value;
              setFilterDate(date);
              fetchAttendance(date);
            }}
            className="mt-1 w-60 rounded-lg border px-3 py-2"
          />
        </div>

        {loading && (
          <p className="text-gray-500">Loading attendance...</p>
        )}

        {!loading && records.length === 0 && (
          <p className="text-gray-500">
            No attendance records found
          </p>
        )}

        {!loading && records.length > 0 && (
          <AttendanceTable
            records={records}
            presentCount={presentCount}
          />
        )}
      </Card>
    </div>
  );
}
