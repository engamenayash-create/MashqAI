const stats = [
    {
      title: "Projects",
      value: "12",
      icon: "📁",
    },
    {
      title: "Generated Logos",
      value: "48",
      icon: "🎨",
    },
    {
      title: "Brand Kits",
      value: "15",
      icon: "📦",
    },
    {
      title: "Downloads",
      value: "103",
      icon: "⬇️",
    },
  ];
  
  export default function StatsCards() {
    return (
      <section className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <span className="text-4xl">{stat.icon}</span>
  
              <span className="text-4xl font-bold text-gray-900">
                {stat.value}
              </span>
            </div>
  
            <p className="mt-6 text-lg font-medium text-gray-600">
              {stat.title}
            </p>
          </div>
        ))}
      </section>
    );
  }