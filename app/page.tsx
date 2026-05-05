import Link from "next/link";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
   <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="relative pt-32 pb-16 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-500 tracking-tight">
            Elevate Your <span className="text-blue-600">Fitness</span> <br />
            with Intelligence
          </h1>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            NextFit AI আপনার লক্ষ্য, সময় এবং লাইফস্টাইল বুঝে তৈরি করে দেয় একদম পার্সোনালাইজড ডেইলি রুটিন। কোডিং হোক বা স্পোর্টস—সবখানেই থাকুন ফুললি ফিট!
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <Link 
              href="/generate" 
              className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-2xl hover:bg-blue-700 hover:scale-105 transition-all shadow-lg shadow-blue-200"
            >
              Get My AI Routine
            </Link>
            <button className="px-8 py-4 bg-gray-100 text-gray-700 text-lg font-semibold rounded-2xl hover:bg-gray-200 transition-all">
              Learn More
            </button>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
  {/* Card 1 */}
  <div className="p-8 rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-600 transition-all group">
    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <span className="text-blue-600 group-hover:text-white text-xl font-bold">01</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">AI Generated</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      পাওয়ারফুল এআই দিয়ে আপনার জন্য একদম কাস্টম এবং পার্সোনালাইজড ওয়ার্কআউট প্ল্যান।
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-8 rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-600 transition-all group">
    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <span className="text-blue-600 group-hover:text-white text-xl font-bold">02</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">Smart Tracking</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      প্রতিদিনের অগ্রগতি চেক করুন রিয়েল-টাইমে এবং আপনার লিমিটকে ছাড়িয়ে যান।
    </p>
  </div>

  {/* Card 3 */}
  <div className="p-8 rounded-3xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:border-blue-600 transition-all group">
    <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
      <span className="text-blue-600 group-hover:text-white text-xl font-bold">03</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">Expert Logic</h3>
    <p className="text-gray-400 text-sm leading-relaxed">
      প্রফেশনাল ফিটনেস কোচদের লজিক এবং এআই-এর সমন্বয়ে তৈরি এক নতুন অভিজ্ঞতা।
    </p>
  </div>
</div>
        </div>
      </main>
    </div>
  );
}
