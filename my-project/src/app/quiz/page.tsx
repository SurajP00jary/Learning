"use client";
import Image from "next/image";
import { useState } from "react";

export default function Quiz() {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin"],
      answer: "Paris",
    },
    { question: "2 + 2 = ?", options: ["2", "4", "5"], answer: "4" },
    { question: "4 + 2 = ?", options: ["2", "4", "6"], answer: "6" },
    { question: "5 + 2 = ?", options: ["2", "4", "7"], answer: "7" },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [score, setScore] = useState(0);
  const handleSubmitAnswer = (e: any) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestion + 1);
    if (
      questions[currentQuestion].answer.toLowerCase() == userInput.toLowerCase()
    ) {
      console.log("right answer");
      setScore(score + 1);
    } else {
      console.log("wrong answer");
    }
    setUserInput("");
  };
  const handleInputChange = (e: any) => {
    setUserInput(e.target.value);
  };
  return (
    <div className="container mx-auto px-4 py-8 w-[600px] gap-y-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center my-3">Quiz Time!</h1>
      {currentQuestion < questions.length ? (
        <div>
          <p className="text-xl font-medium mb-2">
            Question {currentQuestion + 1}:{" "}
            {questions[currentQuestion].question}
          </p>
          <form
            onSubmit={handleSubmitAnswer}
            className="flex flex-col space-y-2"
          >
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
              className="text-black rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 py-2 text-center text-white hover:bg-blue-700"
            >
              Submit Answer
            </button>
          </form>
        </div>
      ) : (
        <div className="mx-auto flex flex-col justify-center items-center">
          <p className="text-xl font-medium mb-2 ">Quiz Completed!</p>
          <p>
            Your score:{" "}
            {score} {" "}
            out of {questions.length}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="text-black bg-blue-400 rounded-md p-3 my-3"
          >
            Retake quiz
          </button>
        </div>
      )}
    </div>
  );
}
