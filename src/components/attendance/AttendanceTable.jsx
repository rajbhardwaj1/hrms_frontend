export default function AttendanceTable({ records, presentCount }) {
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
          {records.map((r) => {
            const employee = r.employee;

            const employeeId = employee?.employee_id || "—";
            const name = employee?.full_name || "Deleted Employee";

            return (
              <tr key={r.id} className="hover:bg-gray-50">
                <td className="p-3 border">{employeeId}</td>

                <td className="p-3 border">{name}</td>

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
                  {employeeId !== "—"
                    ? presentCount[employeeId] || 0
                    : "—"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
