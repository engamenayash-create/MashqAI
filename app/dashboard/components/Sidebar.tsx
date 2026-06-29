const menu = [
    {
      title: "Dashboard",
      icon: "📊",
    },
    {
      title: "Projects",
      icon: "📁",
    },
    {
      title: "New Project",
      icon: "➕",
    },
    {
      title: "Settings",
      icon: "⚙️",
    },
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-72 min-h-screen bg-white border-r border-gray-200 flex flex-col">
  
        <div className="px-8 py-8 border-b">
  
          <h1 className="text-3xl font-bold text-indigo-600">
            MashqAI
          </h1>
  
          <p className="text-gray-500 mt-2">
            Arabic Brand Identity AI
          </p>
  
        </div>
  
        <nav className="flex-1 p-6 space-y-3">
  
          {menu.map((item) => (
            <button
              key={item.title}
              className="w-full flex items-center gap-4 rounded-xl px-5 py-4 text-left hover:bg-indigo-50 hover:text-indigo-600 transition"
            >
              <span className="text-xl">
                {item.icon}
              </span>
  
              <span className="font-medium">
                {item.title}
              </span>
            </button>
          ))}
  
        </nav>
  
        <div className="border-t p-6">
  
          <button className="w-full rounded-xl bg-indigo-600 py-3 text-white font-semibold hover:bg-indigo-700 transition">
            Upgrade
          </button>
  
        </div>
  
      </aside>
    );
  }