export default function TrustedBy() {
    return (
      <section className="border-y border-gray-200 bg-gray-50 py-14">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
            Trusted by creators worldwide
          </p>
  
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-5">
  
            {[
              "Canva",
              "Adobe",
              "Figma",
              "Notion",
              "OpenAI",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl bg-white py-6 text-lg font-bold text-gray-400 shadow-sm"
              >
                {item}
              </div>
            ))}
  
          </div>
  
        </div>
  
      </section>
    );
  }