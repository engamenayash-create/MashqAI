export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white pt-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <span className="mb-6 inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
            ✨ AI Powered Branding
          </span>

          <h1 className="mt-4 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 lg:text-7xl">
            Create Beautiful Arabic Brand Identities with AI
          </h1>

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
            Generate professional Arabic logos, color palettes,
            typography, and complete brand identities in minutes using AI.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white transition hover:bg-indigo-700">
              Start Creating
            </button>

            <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100">
              See Demo
            </button>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <div className="rounded-3xl bg-gradient-to-br from-indigo-100 to-sky-100 p-8 shadow-2xl">

            <div className="w-[420px] rounded-2xl bg-white p-6 shadow-lg">

              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">
                  Brand Preview
                </h2>

                <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                  AI Ready
                </span>
              </div>

              <div className="mb-6 flex h-28 items-center justify-center rounded-2xl bg-indigo-600 text-5xl font-bold text-white">
                مشق
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                Mashq Studio
              </h3>

              <p className="mt-2 text-gray-500">
                Arabic Brand Identity
              </p>

              <div className="mt-6 flex gap-3">

                <div className="h-10 w-10 rounded-full bg-indigo-600"></div>

                <div className="h-10 w-10 rounded-full bg-sky-500"></div>

                <div className="h-10 w-10 rounded-full bg-gray-900"></div>

                <div className="h-10 w-10 rounded-full bg-gray-200"></div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}