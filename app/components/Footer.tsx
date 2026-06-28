export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
  
          <div>
            <h2 className="text-2xl font-bold text-indigo-600">
              MashqAI
            </h2>
  
            <p className="mt-2 text-sm text-gray-500">
              AI-powered Arabic Brand Identity Platform
            </p>
          </div>
  
          <div className="flex gap-8 text-sm text-gray-600">
  
            <a href="#" className="hover:text-indigo-600 transition">
              Features
            </a>
  
            <a href="#" className="hover:text-indigo-600 transition">
              Pricing
            </a>
  
            <a href="#" className="hover:text-indigo-600 transition">
              FAQ
            </a>
  
            <a href="#" className="hover:text-indigo-600 transition">
              Contact
            </a>
  
          </div>
  
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} MashqAI. All rights reserved.
          </div>
  
        </div>
      </footer>
    );
  }