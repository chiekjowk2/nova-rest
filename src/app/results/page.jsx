"use client";
import { useRouter , useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ResultPage = () => {
  const router = useRouter();
  const SearchParams = useSearchParams();
  const score = SearchParams.get("score") || 0;

  const getAdvice = (score) => {
    if (score >= 7) {
      return "Great! Your sleep quality seems good. Keep up the healthy sleep habits!";
    }
    if (score >= 4) {
      return "Your sleep could be improved. Try maintaining a consistent schedule and reducing screen time before bed.";
    }
    return "Your sleep quality is poor. Consider seeking professional advice or improving your sleep hygiene.";
  };

  if (score === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center flex-col items-center mx-auto mt-24">
      <h1 className="text-3xl font-bold text-[#A6ADBA]">
        Your Sleep Quality Result
      </h1>
      <div className="bg-[#2a303c] w-[576px] h-[430px] max-w-4xl mx-auto mt-8 rounded-2xl flex flex-col justify-center items-center">
        <h2 className="text-4xl font-semibold text-white mt-4">
          Your Score: {score}
        </h2>
        <p className="text-xl text-[#A6ADBA] mt-4 px-4">{getAdvice(score)}</p>
      </div>
      <button
        className="bg-[#05B462] text-white rounded-full py-4 mt-8 w-[576px] font-semibold hover:bg-[#05b43feb]"
        onClick={() => router.push("/")} 
      >
        Take the Quiz Again
      </button>
    </div>
  );
};

export default ResultPage;
