"use client";
import Navbar from '@/components/Navbar'
import { BsFillCheckCircleFill,BsCircleFill} from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {  toast } from 'sonner';
const page = () => {
  const quiz = [
    {
      id: "1",
      que: " 1. How much sleep do you always get at night?",
      answer: [
        { no: "1", ans: "6 hours or less", point: "1" },
        { no: "2", ans: "6 - 8 hours", point: "3" },
        { no: "3", ans: "8 - 10 hours", point: "2" },
        { no: "4", ans: "More than 10 hours", point: "1" }
      ]
    },
    {
      id: "2",
      que: " 2. How satisfied are you with your sleep?",
      answer: [
        { no: "1", ans: "Very satisfied", point: "3" },
        { no: "2", ans: "Neutral", point: "2" },
        { no: "3", ans: "Not satisfied", point: "1" },
        { no: "4", ans: "Very unsatisfied", point: "1" }
      ]
    },
    {
      id: "3",
      que: " 3. How long after getting to bed do you fall asleep?",
      answer: [
        { no: "1", ans: "Immediately", point: "1" },
        { no: "2", ans: "10-15 minutes", point: "3" },
        { no: "3", ans: "20-40 minutes", point: "2" },
        { no: "4", ans: "Hard to fall asleep", point: "1" }
      ]
    }
  ];

  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState([]);
  const router = useRouter();
 

  const handleAnswer = (questionId , point) => {
    setSelectedAnswer((prev) => ({
      ...prev,
      [questionId]:point
    }))
  }

  const calculateScore = () => {
    const totalScore = Object.values(selectedAnswer).reduce((sum, point) => sum + Number(point), 0);
    const maxScore = 10;
    const percentage = ((totalScore / maxScore) * 100).toFixed(2);
    setResult((totalScore, percentage));
    console.log(result);
  }
   const getAdvice = (score) => {
     if (score >= 7)
       return "Great! Your sleep quality seems good. Keep up the healthy sleep habits!";
     if (score >= 4)
       return "Your sleep could be improved. Try maintaining a consistent schedule and reducing screen time before bed.";
     return "Your sleep quality is poor. Consider seeking professional advice or improving your sleep hygiene.";
   };


  const handleNext = () => {
     if (currentQuestion < quiz.length - 1) {
       setCurrentQuestion(currentQuestion + 1);
       setSelectedAnswer(null)
     } else {
       const score = calculateScore();
       const advice = getAdvice(score);
       toast.success("Quiz completed! Your results are ready.");
       router.push(
         `/results?score=${score}&advice=${encodeURIComponent(advice)}`
       );
       console.log(score, advice);
     }
   
  }

  return (
    <div className="flex justify-center flex-col mx-">
      <Navbar />
      <div className="bg-[#2a303c] w-[576px] h-[430px] max-w-4xl mx-auto mt-24 rounded-2xl">
        <div className="flex items-center justify-between px-8 text-[#A6ADBA]">
          <IoMdArrowRoundBack
            style={{ fontSize: "30px" }}
            className="cursor-pointer"
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))} 
          />
          <h1 className=" text-2xl font-bold text-[#A6ADBA] mt-4 mb-4">
            Question {currentQuestion + 1} / {quiz.length}
          </h1>
        </div>
        <div
          key={quiz[currentQuestion].id}
          className="flex flex-col justify-center px-8"
        >
        <h1 className="text-2xl text-[#A6ADBA]">
          {quiz[currentQuestion].que}
        </h1>

          {quiz[currentQuestion].answer.map((option) => {
            return (
              <div key={option.no} className="flex items-center mt-8 px-6">
                {selectedAnswer === option.no ? (
                  <BsFillCheckCircleFill
                    style={{ fontSize: "30px", color: "green" }}
                  ></BsFillCheckCircleFill>
                ) : (
                  <BsCircleFill
                    className="cursor-pointer"
                    style={{ fontSize: "30px", color: "grey" }}
                    onClick={() => setSelectedAnswer(option.no)}
                    onChange={() => handleAnswer(quiz[currentQuestion].id, option.point)}
                  ></BsCircleFill>
                )}
                <span
                  className={
                    selectedAnswer === option.no
                      ? "text-green-500 ml-4 text-2xl  cursor-pointer"
                      : "text-[#A6ADBA] ml-4 text-2xl cursor-pointer "
                  }
                  onClick={() => setSelectedAnswer(option.no)}
                >
                  {option.ans}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <button
        className={
          selectedAnswer
            ? "bg-[#05B462] flex justify-center items-center rounded-full  py-4 cursor-pointer text-white w-[576px]  font-semibold hover:bg-[#05b43feb] max-w-full mx-auto mt-4"
            : "bg-[#656565c6]  flex justify-center items-center rounded-full  py-4 cursor-pointer text-white w-[576px]  font-semibold max-w-full mx-auto mt-4"
        }
        onClick={() => {
          handleNext();
        }}
      
      >
        {currentQuestion < quiz.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
}

export default page