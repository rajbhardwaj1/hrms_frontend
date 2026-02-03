export default function Select({
  label,
  name,
  options = [],
  required = false,
  defaultValue = "",
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        name={name}
        required={required}
        defaultValue={defaultValue}
        className="rounded-md border px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none bg-white"
      >
        <option value="" disabled>
          Select {label}
        </option>

        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
