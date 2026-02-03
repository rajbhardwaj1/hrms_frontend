export default function Card({ title, children }) {
  return (
    <div className="rounded-lg border bg-white p-6 shadow-sm">
      {title && (
        <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      )}
      {children}
    </div>
  );
}
