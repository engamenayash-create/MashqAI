export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white shadow-lg">
            م
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              MashqAI
            </h1>

            <p className="text-xs text-gray-500">
              Arabic Brand Identity
            </p>
          </div>
        </a>

        {/* Menu */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-gray-600 lg:flex">

          <a href="#" className="transition hover:text-indigo-600">
            Features
          </a>

          <a href="#" className="transition hover:text-indigo-600">
            How It Works
          </a>

          <a href="#" className="transition hover:text-indigo-600">
            Pricing
          </a>

          <a href="#" className="transition hover:text-indigo-600">
            FAQ
          </a>

        </nav>

        {/* Right Buttons */}
        <div className="flex items-center gap-4">

          <button className="hidden rounded-xl px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100 lg:block">
            Login
          </button>

          <button className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700">
            Get Started
          </button>

        </div>

      </div>
    </header>
  );
}