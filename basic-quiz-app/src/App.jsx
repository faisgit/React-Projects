import React from "react";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
export default function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { ansId: 1, answerText: "New York", isCorrect: false },
        { ansId: 2, answerText: "London", isCorrect: false },
        { ansId: 3, answerText: "Paris", isCorrect: true },
        { ansId: 4, answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { ansId: 1, answerText: "Jeff Bezos", isCorrect: false },
        { ansId: 2, answerText: "Elon Musk", isCorrect: true },
        { ansId: 3, answerText: "Bill Gates", isCorrect: false },
        { ansId: 4, answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { ansId: 1, answerText: "Apple", isCorrect: true },
        { ansId: 2, answerText: "Intel", isCorrect: false },
        { ansId: 3, answerText: "Amazon", isCorrect: false },
        { ansId: 4, answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { ansId: 1, answerText: "1", isCorrect: false },
        { ansId: 2, answerText: "4", isCorrect: false },
        { ansId: 3, answerText: "6", isCorrect: false },
        { ansId: 4, answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [changeQuestion, setChangeQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {showScore ? (
        <p className="bg-black/70 h-96 sm:w-64 w-80 sm::w-[30rem] rounded-xl text-white flex justify-center items-center">
          You scored Out Of {score}/{questions.length}
        </p>
      ) : (
        <article className="bg-black/70  h-96 sm:h-64  w-80 sm:w-[30rem] rounded-xl flex flex-col sm:flex-row justify-between px-7 py-5">
          {/* Question Section */}
          <div>
            {/* Ouestion Counting */}
            <h1 className="text-white text-3xl mb-2">
              Question {changeQuestion + 1}/{questions.length}
            </h1>
            {/* Question */}
            <p className="text-white">
              {" "}
              {questions[changeQuestion].questionText}{" "}
            </p>
          </div>
          {/* Answer Section */}
          <div className="flex flex-col justify-between">
            {questions[changeQuestion].answerOptions.map((ansOpt) => (
              <Button
                variant="outlined"
                color="white"
                className="px-10 my-2 sm:my-0"
                key={ansOpt.ansId}
                onClick={() => {
                  const nextQuestion = changeQuestion + 1;
                  if (nextQuestion < questions.length) {
                    setChangeQuestion(nextQuestion);
                  } else {
                    setShowScore(true);
                  }

                  if (ansOpt.isCorrect === true) {
                    setScore(score + 1);
                  }
                }}
              >
                {ansOpt.answerText}
              </Button>
            ))}
          </div>
        </article>
      )}
    </div>
  );
}
