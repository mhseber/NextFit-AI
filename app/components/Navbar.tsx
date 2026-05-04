import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              NextFit <span className="text-gray-900">AI</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Home</Link>
              <Link href="/dashboard" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Dashboard</Link>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition-all">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}