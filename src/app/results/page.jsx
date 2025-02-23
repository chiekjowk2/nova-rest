"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResultsPage() {
  const router = useRouter();
  const [sleepScore, setSleepScore] = useState(0);
  const [recommendations, setRecommendations] = useState([]);

  // Simulate fetching sleep score & recommendations based on user's answers
  useEffect(() => {
    const userScore = 75; // Example: Fetch this from state or API
    const advice = [
      "Reduce screen time 1 hour before bed.",
      "Try to sleep at the same time daily.",
      "Avoid caffeine after 4 PM."
    ];

    setSleepScore(userScore);
    setRecommendations(advice);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#242933] p-6">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-center">
        <h1 className="text-2xl font-bold text-gray-900">Your Sleep Report</h1>

        <div className="mt-4 p-4 bg-blue-100 rounded-xl">
          <p className="text-lg font-semibold">
            Sleep Score: <span className="text-blue-600">{sleepScore}%</span>
          </p>
        </div>

        <h2 className="text-lg font-medium mt-6">Recommendations:</h2>
        <ul className="text-gray-700 mt-2 space-y-2">
          {recommendations.map((tip, index) => (
            <li key={index} className="bg-gray-200 p-3 rounded-lg">
              {tip}
            </li>
          ))}
        </ul>

        <button
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          onClick={() => router.push("/sleep-plan")}
        >
          Get Your Sleep Plan
        </button>
      </div>
    </div>
  );
}
