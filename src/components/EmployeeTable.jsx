export default function EmployeeTable({ employees = [] }) {
  if (!employees.length) {
    return (
      <p className="text-gray-500 mt-6 text-center">
        No employees registered yet.
      </p>
    );
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="w-full bg-white shadow rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            {["Name", "Email", "Department", "Designation"].map((h) => (
              <th key={h} className="px-4 py-2 text-left text-sm font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, i) => (
            <tr key={i} className="border-t">
              <td className="px-4 py-2">{emp.name}</td>
              <td className="px-4 py-2">{emp.email}</td>
              <td className="px-4 py-2">{emp.department}</td>
              <td className="px-4 py-2">{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
