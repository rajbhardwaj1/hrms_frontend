export default function Header({ title }) {
  return (
    <header className="border-b bg-white px-6 py-4">
      <h1 className="text-xl font-semibold">{title}</h1>
    </header>
  );
}
