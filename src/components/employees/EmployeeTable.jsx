export default function EmployeeTable({ employees, onDelete }) {
  if (!employees.length) {
    return (
      <p className="text-center text-gray-500 py-6">
        No employees added yet.
      </p>
    );
  }

  return (
    <table className="w-full border rounded-lg">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-4 py-2 text-left">Employee ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Department</th>
          <th className="px-4 py-2 text-right">Action</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((e) => (
          <tr key={e.employee_id} className="border-t">
            <td className="px-4 py-2">{e.employee_id}</td>
            <td className="px-4 py-2">{e.full_name}</td>
            <td className="px-4 py-2">{e.email}</td>
            <td className="px-4 py-2">{e.department}</td>
            <td className="px-4 py-2 text-right">
              <button
                onClick={() => onDelete(e.employee_id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
