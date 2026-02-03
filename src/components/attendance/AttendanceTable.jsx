export default function AttendanceTable({ records }) {
  if (!records.length) {
    return (
      <p className="text-center text-gray-500 py-6">
        No attendance records found.
      </p>
    );
  }

  return (
    <table className="w-full border rounded-lg">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left">Date</th>
          <th className="px-4 py-2 text-left">Status</th>
        </tr>
      </thead>
      <tbody>
        {records.map((r, i) => (
          <tr key={i} className="border-t">
            <td className="px-4 py-2">{r.date}</td>
            <td className="px-4 py-2">{r.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
