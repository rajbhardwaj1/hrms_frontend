import RegisterEmployee from "./pages/RegisterEmployee";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-indigo-600 text-white py-4 shadow">
        <h1 className="text-center text-2xl font-semibold">
          HRMS – Employee Registration
        </h1>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <RegisterEmployee />
      </main>
    </div>
  );
}

export default App;
