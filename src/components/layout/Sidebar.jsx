export default function Sidebar({ active, setActive }) {
  return (
    <aside className="w-64 border-r bg-white min-h-screen">
      <div className="p-4 text-xl font-bold border-b">
        HRMS Lite
      </div>

      <nav className="p-2 space-y-1">
        <button
          onClick={() => setActive("employees")}
          className={`w-full rounded-md px-4 py-2 text-left ${
            active === "employees"
              ? "bg-indigo-50 text-indigo-600 font-medium"
              : "hover:bg-gray-100"
          }`}
        >
          Employees
        </button>

        <button
          onClick={() => setActive("attendance")}
          className={`w-full rounded-md px-4 py-2 text-left ${
            active === "attendance"
              ? "bg-indigo-50 text-indigo-600 font-medium"
              : "hover:bg-gray-100"
          }`}
        >
          Attendance
        </button>
      </nav>
    </aside>
  );
}
