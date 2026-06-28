export default function Hero() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-4 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium">
        🚀 AI for Arabic Branding
      </p>

      <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
        Create Stunning
        <br />
        Arabic Brand Identity
        <br />
        in Minutes
      </h1>

      <p className="mt-8 max-w-2xl text-xl text-gray-600">
        Generate logos, colors, typography, and complete branding powered by AI.
      </p>

      <button className="mt-10 rounded-xl bg-black px-8 py-4 text-lg text-white hover:bg-gray-800 transition">
        Get Started
      </button>
    </section>
  );
}