export default function AttendanceTable({ records }) {
  if (records.length === 0) {
    return (
      <p className="text-center text-gray-500 py-6">
        No attendance records found
      </p>
    );
  }

  // Calculate total present days per employee
  const presentCount = {};
  records.forEach((r) => {
    if (r.status === "Present") {
      presentCount[r.employeeId] =
        (presentCount[r.employeeId] || 0) + 1;
    }
  });

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3 border">Employee ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Date</th>
            <th className="p-3 border">Status</th>
            <th className="p-3 border">Total Present Days</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border">{r.employeeId}</td>
              <td className="p-3 border">{r.employeeName}</td>
              <td className="p-3 border">{r.date}</td>
              <td
                className={`p-3 border font-medium ${
                  r.status === "Present"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {r.status}
              </td>
              <td className="p-3 border text-center">
                {presentCount[r.employeeId] || 0}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
