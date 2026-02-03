export default function Button({ children, loading = false, ...props }) {
  return (
    <button
      disabled={loading}
      className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
      {...props}
    >
      {loading ? "Processing..." : children}
    </button>
  );
}
