export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <h1 className="text-2xl font-bold">MashqAI</h1>

      <button className="rounded-xl bg-black px-5 py-2 text-white hover:bg-gray-800 transition">
        Join Waitlist
      </button>
    </nav>
  );
}