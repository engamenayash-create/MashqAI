const faqs = [
    {
      question: "What is MashqAI?",
      answer:
        "MashqAI is an AI-powered platform that helps you create complete Arabic brand identities in minutes.",
    },
    {
      question: "Do I need design experience?",
      answer:
        "No. MashqAI is built for entrepreneurs, startups, and creators with no design background.",
    },
    {
      question: "Can I download my branding files?",
      answer:
        "Yes. You can export your logo, colors, typography, and brand assets.",
    },
    {
      question: "Will Arabic typography be supported?",
      answer:
        "Yes. Arabic-first branding is the core focus of MashqAI.",
    },
  ];
  
  export default function FAQ() {
    return (
      <section className="bg-white py-28">
        <div className="mx-auto max-w-5xl px-6">
  
          <div className="mb-16 text-center">
            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
              FAQ
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
  
          <div className="space-y-6">
  
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {faq.question}
                </h3>
  
                <p className="mt-3 leading-8 text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }