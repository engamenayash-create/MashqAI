const steps = [
    {
      number: "01",
      title: "Describe Your Brand",
      description:
        "Tell MashqAI about your business, industry, and preferred style.",
    },
    {
      number: "02",
      title: "AI Creates Your Identity",
      description:
        "Our AI generates logos, colors, typography, and branding concepts.",
    },
    {
      number: "03",
      title: "Download & Launch",
      description:
        "Export your complete brand kit and start using it immediately.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-gray-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="mb-16 text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              How It Works
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Create Your Brand
              <br />
              In Three Simple Steps
            </h2>
          </div>
  
          <div className="grid gap-8 md:grid-cols-3">
  
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 text-5xl font-extrabold text-indigo-600">
                  {step.number}
                </div>
  
                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>
  
                <p className="mt-4 leading-8 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }