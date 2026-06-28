const features = [
    {
      title: "AI Logo Generator",
      description:
        "Generate unique Arabic logos tailored to your brand identity in seconds.",
      icon: "🎨",
    },
    {
      title: "Brand Colors",
      description:
        "Receive professional color palettes that match your industry and audience.",
      icon: "🎯",
    },
    {
      title: "Arabic Typography",
      description:
        "Discover modern Arabic font pairings that elevate your visual identity.",
      icon: "✍️",
    },
    {
      title: "Complete Brand Kit",
      description:
        "Export logos, typography, colors, and branding assets in one place.",
      icon: "📦",
    },
  ];
  
  export default function Features() {
    return (
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-16 text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              Features
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Everything You Need To Build
              <br />
              Your Arabic Brand
            </h2>
  
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              MashqAI combines branding, typography, logo creation,
              and AI into one seamless experience.
            </p>
          </div>
  
          <div className="grid gap-8 md:grid-cols-2">
  
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-gray-200 p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 text-5xl">
                  {feature.icon}
                </div>
  
                <h3 className="text-2xl font-bold">
                  {feature.title}
                </h3>
  
                <p className="mt-4 leading-8 text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }