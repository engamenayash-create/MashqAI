export default function Topbar() {
    return (
      <header className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm">
  
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard
          </h1>
  
          <p className="mt-1 text-gray-500">
            Welcome back to MashqAI 👋
          </p>
        </div>
  
        <div className="flex items-center gap-4">
  
          <button className="rounded-xl border border-gray-300 px-5 py-3 transition hover:bg-gray-100">
            Notifications
          </button>
  
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-lg font-bold text-white">
            A
          </div>
  
        </div>
  
      </header>
    );
  }