import Link from "next/link";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
   <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="relative pt-32 pb-16 lg:pt-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight">
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

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl border border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold mb-2">AI Generated</h3>
              <p className="text-gray-600 text-sm">পাওয়ারফুল এআই দিয়ে আপনার জন্য একদম কাস্টম প্ল্যান।</p>
            </div>
            <div className="p-6 rounded-3xl border border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Smart Tracking</h3>
              <p className="text-gray-600 text-sm">প্রতিদিনের অগ্রগতি চেক করুন রিয়েল-টাইমে।</p>
            </div>
            <div className="p-6 rounded-3xl border border-gray-100 bg-gray-50">
              <h3 className="text-xl font-bold mb-2">Expert Logic</h3>
              <p className="text-gray-600 text-sm">প্রফেশনাল ফিটনেস কোচদের লজিক এবং এআই-এর সমন্বয়।</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
