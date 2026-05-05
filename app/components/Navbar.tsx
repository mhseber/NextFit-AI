import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              {/* AI লেখাটি এখন সাদা (white) হবে যাতে কালো ব্যাকগ্রাউন্ডে ফুটে ওঠে */}
              NextFit <span className="text-white">AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-400 hover:text-white px-3 py-2 font-medium transition-colors">
                Home
              </Link>
              <Link href="/dashboard" className="text-gray-400 hover:text-white px-3 py-2 font-medium transition-colors">
                Dashboard
              </Link>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 hover:scale-105 transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}