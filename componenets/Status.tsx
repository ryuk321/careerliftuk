// app/page.tsx
function Status() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 flex flex-col items-center justify-center">
      <section className="max-w-3xl w-full text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Career Lift UK</h1>
        <p className="text-lg text-gray-600">Connecting skilled workers with exciting opportunities across London.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border-l-8 border-green-500 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-green-600 mb-2">15 Workers Ready to Go</h2>
          <p className="text-gray-700">Skilled, verified, and available immediately to meet staffing needs.</p>
        </div>

        <div className="bg-white border-l-8 border-yellow-500 shadow-lg p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">5 Part-Time Roles Recruiting</h2>
          <p className="text-gray-700">Flexible opportunities available for motivated candidates.</p>
        </div>
      </section>
    </main>
  );
}
export default Status;
