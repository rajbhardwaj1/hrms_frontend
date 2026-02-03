export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="rounded-md border px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none"
        {...props}
      />
    </div>
  );
}
