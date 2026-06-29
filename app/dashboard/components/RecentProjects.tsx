const projects = [
    {
      name: "Al Noor Coffee",
      status: "Completed",
      date: "Today",
    },
    {
      name: "Baghdad Tech",
      status: "In Progress",
      date: "Yesterday",
    },
    {
      name: "Al Rafidain Store",
      status: "Completed",
      date: "2 days ago",
    },
  ];
  
  export default function RecentProjects() {
    return (
      <section className="mt-8 rounded-2xl bg-white p-8 shadow-sm">
  
        <div className="mb-6 flex items-center justify-between">
  
          <h2 className="text-2xl font-bold">
            Recent Projects
          </h2>
  
          <button className="rounded-xl bg-indigo-600 px-5 py-2 text-white hover:bg-indigo-700 transition">
            View All
          </button>
  
        </div>
  
        <div className="space-y-4">
  
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-5 hover:bg-gray-50 transition"
            >
              <div>
  
                <h3 className="font-semibold text-lg">
                  {project.name}
                </h3>
  
                <p className="text-gray-500">
                  {project.date}
                </p>
  
              </div>
  
              <span
                className={`rounded-full px-4 py-2 text-sm font-medium ${
                  project.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {project.status}
              </span>
  
            </div>
          ))}
  
        </div>
  
      </section>
    );
  }