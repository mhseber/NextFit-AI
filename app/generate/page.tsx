// "use client";
// import { useState } from "react";
// import Navbar from "../components/Navbar";
// import { useRouter } from "next/navigation";

// export default function GenerateRoutine() {
//   const router = useRouter();
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     goal: "",
//     level: "",
//     location: "",
//     age: "",
//     weight: "",
//     height: "",
//     daysPerWeek: "",
//   });

//   const updateDataAndNext = (key: string, value: string) => {
//     setFormData({ ...formData, [key]: value });
//     setStep(step + 1);
//   };

//   // এই ফাংশনটি ফর্ম সাবমিট হলে AI API-কে কল করবে
//   const generateWorkout = async () => {
//     setLoading(true);
//     setStep(7); // "Loading" স্ক্রিনে যাওয়ার জন্য
    
//     try {
//       const response = await fetch("/api/generate-routine", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         // ডাটা পেয়ে গেলে ড্যাশবোর্ডে বা রেজাল্ট পেজে রিডাইরেক্ট করতে পারেন 
//         // আপাতত আমরা লোকাল স্টোরেজে সেভ করে নিচ্ছি
//         localStorage.setItem("workoutRoutine", JSON.stringify(data.routine));
//         router.push("/dashboard");
//       }
//     } catch (error) {
//       console.error("Failed to generate routine", error);
//     } finally {
//       setLoading(false);
//     }
//   };

  

//   return (
//     <div className="min-h-screen bg-black text-white">
//       <Navbar />
      
//       <main className="max-w-md mx-auto pt-32 px-6">
//         {/* Progress Bar */}
//         <div className="w-full bg-gray-800 h-1.5 rounded-full mb-12">
//           <div 
//             className="bg-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out" 
//             style={{ width: `${(step / 6) * 100}%` }}
//           ></div>
//         </div>

//         {/* Step 1: Goal */}
//         {step === 1 && (
//           <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
//             <h2 className="text-3xl font-bold mb-2">আপনার মূল লক্ষ্য কী?</h2>
//             <p className="text-gray-400 mb-8">AI আপনার জন্য বেস্ট প্ল্যানটি বেছে নিবে।</p>
//             <div className="space-y-4">
//               {["Weight Loss (ওজন কমানো)", "Muscle Gain (মাসল তৈরি)", "Stamina & Endurance", "Stay Healthy"].map((goal) => (
//                 <button
//                   key={goal}
//                   onClick={() => updateDataAndNext("goal", goal)}
//                   className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 hover:bg-gray-800 transition-all text-lg font-medium"
//                 >
//                   {goal}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 2: Level */}
//         {step === 2 && (
//           <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//             <h2 className="text-3xl font-bold mb-8">আপনার বর্তমান ফিটনেস লেভেল?</h2>
//             <div className="space-y-4">
//               {["Beginner (নতুন)", "Intermediate (মাঝামাঝি)", "Advanced (প্রো)"].map((level) => (
//                 <button
//                   key={level}
//                   onClick={() => updateDataAndNext("level", level)}
//                   className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 transition-all text-lg font-medium"
//                 >
//                   {level}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 3: Location */}
//         {step === 3 && (
//           <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//             <h2 className="text-3xl font-bold mb-8">কোথায় ব্যায়াম করতে চান?</h2>
//             <div className="space-y-4">
//               {["Home (No Equipment)", "Home (Dumbbells Only)", "Gym (Full Equipment)"].map((loc) => (
//                 <button
//                   key={loc}
//                   onClick={() => updateDataAndNext("location", loc)}
//                   className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 transition-all text-lg font-medium"
//                 >
//                   {loc}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 4: Days per week */}
//         {step === 4 && (
//           <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//             <h2 className="text-3xl font-bold mb-8">সপ্তাহে কয়দিন সময় দিতে পারবেন?</h2>
//             <div className="space-y-4">
//               {["3 Days", "4 Days", "5 Days", "6 Days"].map((days) => (
//                 <button
//                   key={days}
//                   onClick={() => updateDataAndNext("daysPerWeek", days)}
//                   className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 transition-all text-lg font-medium"
//                 >
//                   {days}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Step 5: Physical Stats (Age, Weight, Height) */}
//         {step === 5 && (
//           <div className="animate-in fade-in slide-in-from-right-4 duration-500">
//             <h2 className="text-3xl font-bold mb-8">আপনার সম্পর্কে কিছু তথ্য দিন</h2>
//             <div className="space-y-6">
//               <div>
//                 <label className="block text-gray-400 mb-2">বয়স</label>
//                 <input 
//                   type="number" 
//                   placeholder="e.g. 24" 
//                   className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-600 focus:outline-none"
//                   onChange={(e) => setFormData({...formData, age: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-400 mb-2">ওজন (KG)</label>
//                 <input 
//                   type="number" 
//                   placeholder="e.g. 70" 
//                   className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-600 focus:outline-none"
//                   onChange={(e) => setFormData({...formData, weight: e.target.value})}
//                 />
//               </div>
//               <div>
//                 <label className="block text-gray-400 mb-2">উচ্চতা (CM)</label>
//                 <input 
//                   type="number" 
//                   placeholder="e.g. 175" 
//                   className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-600 focus:outline-none"
//                   onChange={(e) => setFormData({...formData, height: e.target.value})}
//                 />
//               </div>
//               <button 
//                 onClick={generateWorkout}
//                 className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all"
//               >
//                 Generate My Plan
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Step 6: Loading State */}
//         {step === 7 && (
//           <div className="text-center mt-20 animate-in fade-in duration-500">
//             <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
//             <h2 className="text-3xl font-bold mb-4 text-white">AI Plan তৈরি করছে...</h2>
//             <p className="text-gray-400 text-lg">আপনার প্রফেশনাল স্পোর্টস এবং ফিটনেস এক্সপেরিয়েন্সের কথা মাথায় রেখে লজিক সাজানো হচ্ছে।</p>
//           </div>
//         )}

//       </main>
//     </div>
//   );
// }


"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useRouter } from "next/navigation";

export default function GenerateRoutine() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    goal: "",
    level: "",
    location: "",
    age: "",
    weight: "",
    height: "",
    daysPerWeek: "",
  });

  const updateDataAndNext = (key: string, value: string) => {
    setFormData({ ...formData, [key]: value });
    setStep(step + 1);
  };

  const generateWorkout = async () => {
    // ইনপুট ভ্যালিডেশন চেক (ঐচ্ছিক কিন্তু জরুরি)
    if(!formData.age || !formData.weight || !formData.height) {
        alert("দয়া করে আপনার বয়স, ওজন এবং উচ্চতা সঠিকভাবে দিন।");
        return;
    }

    setLoading(true);
    setStep(7); // Loading স্ক্রিনে নিয়ে যাওয়া
    
    try {
      const response = await fetch("/api/generate-routine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.routine) {
        // ড্যাশবোর্ড পেজ যে নামে ডাটা খুঁজছে সেই নামেই সেভ করা হলো
        localStorage.setItem("userRoutine", JSON.stringify(data.routine));
        
        // ড্যাশবোর্ডে রিডাইরেক্ট
        router.push("/dashboard");
      } else {
        throw new Error(data.error || "Failed to generate");
      }
    } catch (error) {
      console.error("Failed to generate routine", error);
      alert("দুঃখিত, রুটিন তৈরি করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      setStep(5); // এরর হলে আবার ইনপুট স্টেপে ফেরত আনা
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="max-w-md mx-auto pt-32 px-6 pb-20">
        {/* Progress Bar */}
        {step <= 5 && (
          <div className="w-full bg-gray-800 h-1.5 rounded-full mb-12">
            <div 
              className="bg-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        )}

        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h2 className="text-3xl font-bold mb-2">আপনার মূল লক্ষ্য কী?</h2>
            <p className="text-gray-400 mb-8">AI আপনার জন্য বেস্ট প্ল্যানটি বেছে নিবে।</p>
            <div className="space-y-4">
              {["Weight Loss", "Muscle Gain", "Stamina & Endurance", "Stay Healthy"].map((goal) => (
                <button
                  key={goal}
                  onClick={() => updateDataAndNext("goal", goal)}
                  className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 hover:bg-gray-800 transition-all text-lg font-medium"
                >
                  {goal}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Level */}
        {step === 2 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold mb-8">আপনার বর্তমান ফিটনেস লেভেল?</h2>
            <div className="space-y-4">
              {["Beginner", "Intermediate", "Advanced"].map((level) => (
                <button
                  key={level}
                  onClick={() => updateDataAndNext("level", level)}
                  className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 transition-all text-lg font-medium"
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Location */}
        {step === 3 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold mb-8">কোথায় ব্যায়াম করতে চান?</h2>
            <div className="space-y-4">
              {["Home (No Equipment)", "Home (Dumbbells)", "Gym (Full Equipment)"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => updateDataAndNext("location", loc)}
                  className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 transition-all text-lg font-medium"
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Days per week */}
        {step === 4 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold mb-8">সপ্তাহে কয়দিন সময় দিতে পারবেন?</h2>
            <div className="space-y-4">
              {["3 Days", "4 Days", "5 Days", "6 Days"].map((days) => (
                <button
                  key={days}
                  onClick={() => updateDataAndNext("daysPerWeek", days)}
                  className="w-full p-5 rounded-2xl bg-gray-900 border border-gray-800 text-left hover:border-blue-600 transition-all text-lg font-medium"
                >
                  {days}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Physical Stats */}
        {step === 5 && (
          <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-3xl font-bold mb-8">আপনার সম্পর্কে কিছু তথ্য দিন</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-gray-400 mb-2 font-medium">বয়স</label>
                <input 
                  type="number" 
                  placeholder="যেমন: ২৪" 
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-600 focus:outline-none transition-all"
                  value={formData.age}
                  onChange={(e) => setFormData({...formData, age: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 font-medium">ওজন (KG)</label>
                <input 
                  type="number" 
                  placeholder="যেমন: ৭০" 
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-600 focus:outline-none transition-all"
                  value={formData.weight}
                  onChange={(e) => setFormData({...formData, weight: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-2 font-medium">উচ্চতা (CM)</label>
                <input 
                  type="number" 
                  placeholder="যেমন: ১৭৫" 
                  className="w-full p-4 rounded-xl bg-gray-900 border border-gray-800 focus:border-blue-600 focus:outline-none transition-all"
                  value={formData.height}
                  onChange={(e) => setFormData({...formData, height: e.target.value})}
                />
              </div>
              <button 
                onClick={generateWorkout}
                disabled={loading}
                className="w-full py-4 mt-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50"
              >
                {loading ? "Processing..." : "Generate My Plan"}
              </button>
            </div>
          </div>
        )}

        {/* Step 7: Loading State */}
        {step === 7 && (
          <div className="text-center mt-20 animate-in fade-in duration-500">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-8"></div>
            <h2 className="text-3xl font-bold mb-4 text-white">AI Plan তৈরি করছে...</h2>
            <p className="text-gray-400 text-lg">আপনার এনার্জি এবং লক্ষ্যের ওপর ভিত্তি করে সেরা রুটিন সাজানো হচ্ছে।</p>
          </div>
        )}

      </main>
    </div>
  );
}