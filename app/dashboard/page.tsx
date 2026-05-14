"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

// ১. 'any' এর বদলে একটি ইন্টারফেস তৈরি করুন (টাইপ সেফটি)
interface Exercise {
  name: string;
  sets: string;
  reps: string;
  notes?: string;
}

interface PlanItem {
  day: string;
  type: string;
  exercises: Exercise[] | string;
}

interface Routine {
  routineName: string;
  summary: string;
  plan: PlanItem[];
}

export default function Dashboard() {
  // ২. টাইপ ডিফাইন করে দিন
  const [routine, setRoutine] = useState<Routine | null>(null);
  const router = useRouter();

 useEffect(() => {
    const savedRoutine = localStorage.getItem("userRoutine");
    
    if (savedRoutine) {
      try {
        const parsedData: Routine = JSON.parse(savedRoutine);
        
        // ১. সরাসরি সেট না করে একটি মাইক্রো-টাস্ক হিসেবে কল করা
        // এতে Cascading Render এর ওয়ার্নিং চলে যাবে।
        setTimeout(() => {
          setRoutine(parsedData);
        }, 0);

      } catch (e) {
        console.error("Error parsing routine", e);
      }
    }
  }, []);

  if (!routine) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl font-medium">আপনার রুটিন লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <Navbar />
      
      <div className="max-w-4xl mx-auto pt-24 px-6 pb-20">
        {/* Header */}
        <header className="mb-10 border-b border-gray-800 pb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-500 tracking-tight">
              {routine.routineName || "My Workout Plan"}
            </h1>
            <p className="text-gray-400 mt-2 text-lg italic leading-relaxed">
              {routine.summary}
            </p>
          </div>
          <button 
            onClick={() => router.push("/generate")}
            className="bg-gray-900 hover:bg-gray-800 border border-gray-700 px-6 py-2 rounded-full text-sm font-medium transition-all shrink-0"
          >
            নতুন রুটিন
          </button>
        </header>

        {/* Routine Cards */}
<div className="grid gap-8">
  {routine.plan && routine.plan.map((item: PlanItem, index: number) => (
    <div key={index} className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl shadow-xl hover:border-blue-500/30 transition-all group">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-blue-300 group-hover:text-blue-400 transition-colors">
          {item.day || `Day ${index + 1}`}
        </h3>
        <span className="bg-blue-600/10 text-blue-400 text-xs uppercase tracking-widest font-black px-3 py-1 rounded-full border border-blue-600/20">
          {item.type || "Training"}
        </span>
      </div>

      <div className="space-y-4">
        {/* 'any' এর বদলে সরাসরি চেক করা হচ্ছে এটি Exercise array কি না */}
        {Array.isArray(item.exercises) ? (
          item.exercises.map((ex: Exercise, i: number) => (
            <div key={i} className="bg-black/40 p-4 rounded-xl border border-gray-800/50 flex justify-between items-start">
              <div>
                <p className="font-bold text-gray-100 text-lg">{ex.name}</p>
                {ex.notes && <p className="text-gray-500 text-sm mt-1">{ex.notes}</p>}
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="bg-blue-900/20 text-blue-400 font-mono px-2 py-1 rounded text-sm border border-blue-500/10">
                  {ex.sets} Sets × {ex.reps}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-300 leading-relaxed text-lg italic bg-black/20 p-4 rounded-xl border border-gray-800/30">
            {/* এখানে টাইপ সেফ উপায়ে চেক করা হচ্ছে */}
            {typeof item.exercises === 'string' ? item.exercises : "Rest or Activity"}
          </p>
        )}
      </div>
    </div>
  ))}
</div>

        {/* Coach Advice */}
        <div className="mt-12 p-8 `bg-gradient-to-br` from-blue-900/10 to-transparent rounded-3xl border border-blue-500/10">
          <h4 className="text-xl font-bold mb-3 text-white flex items-center gap-2">
            <span>💡</span> Coach Advice
          </h4>
          <p className="text-gray-400 leading-relaxed">
            আপনার স্পোর্টস ব্যাকগ্রাউন্ড অনুযায়ী রুটিনটি সাজানো হয়েছে। শরীরের সিগন্যাল বুঝুন, পর্যাপ্ত বিশ্রাম নিন এবং হাইড্রেটেড থাকুন।
          </p>
        </div>
      </div>
    </div>
  );
}