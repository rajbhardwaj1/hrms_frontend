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
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Email</th>
          <th className="px-4 py-2 text-left">Department</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => (
          <tr key={e.id} className="border-t">
            <td className="px-4 py-2">{e.id}</td>
            <td className="px-4 py-2">{e.name}</td>
            <td className="px-4 py-2">{e.email}</td>
            <td className="px-4 py-2">{e.department}</td>
            <td className="px-4 py-2 text-right">
              <button
                onClick={() => onDelete(e.id)}
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
