import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./componets/Start";
import Timer from "./componets/Timer";
import Trivia from "./componets/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Who is the father of Constitution?",
      answers: [
        {
          text: "Dr. b.r Ambedkar",
          correct: true,
        },
        {
          text: "B.N. Madhav",
          correct: false,
        },
        {
          text: "Dr. A.P.J kalam",
          correct: false,
        },
        {
          text: "Sardar V. Patel",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Name of the national bird of india?",
      answers: [
        {
          text: "Peocock",
          correct: true,
        },
        {
          text: "Crow",
          correct: false,
        },
        {
          text: "Parrot",
          correct: false,
        },
        {
          text: "KingFisher",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Name of the National bird of America?",
      answers: [
        {
          text: "Kingfisher",
          correct: false,
        },
        {
          text: "Duck",
          correct: false,
        },
        {
          text: "Owl",
          correct: false,
        },
        {
          text: "Bald Eagle",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Name of the Capital of America?",
      answers: [
        {
          text: "Los Angels",
          correct: false,
        },
        {
          text: "California",
          correct: false,
        },
        {
          text: "New Jersey",
          correct: false,
        },
        {
          text: "Washington Dc",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Name of the Capiatal of India?",
      answers: [
        {
          text: "Surat",
          correct: false,
        },
        {
          text: "Bengluru",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Name of the biggest ocean?",
      answers: [
        {
          text: "Atlantic ocean",
          correct: false,
        },
        {
          text: "Arabian ocean",
          correct: false,
        },
        {
          text: "Indian ocean",
          correct: false,
        },
        {
          text: "Pacific ocean",
          correct: true,
        },
      ],
    },
    {
      id: 7,
      question: "Capital City Of Maharashtra State?",
      answers: [
        {
          text: "Kolhapur",
          correct: false,
        },
        {
          text: "Pune",
          correct: false,
        },
        {
          text: "Nagpur",
          correct: false,
        },
        {
          text: "Mumbai",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Name of the First Women Prime-Minister of India?",
      answers: [
        {
          text: "Indira gandhi",
          correct:true,
        },
        {
          text: "Madam Kama",
          correct: false,
        },
        {
          text: "Savitri Bai Phule",
          correct: false,
        },
        {
          text: "Pratibha Tai Patil",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Name of biggest State of India(area)?",
      answers: [
        {
          text: "Maharashtra",
          correct: false,
        },
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Uttar Pradesh",
          correct: true,
        },
        {
          text: "Assam",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Name of the national sweet of India?",
      answers: [
        {
          text: "Gulab jamun",
          correct: false,
        },
        {
          text: "Ras malai",
          correct: false,
        },
        {
          text: "Jalebi",
          correct: true,
        },
        {
          text: "Kaju katli",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Name of longest River on Earth?",
      answers: [
        {
          text: "Amazon",
          correct: false,
        },
        {
          text: "Nile",
          correct: true,
        },
        {
          text: "Ganga",
          correct: false,
        },
        {
          text: "Yangtze river",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Who is the prime minister of India?",
      answers: [
        {
          text: "Rahul gandhi",
          correct: false,
        },
        {
          text: "Arvind Kejrival",
          correct: false,
        },
        {
          text: "Narendra Modi",
          correct: true,
        },
        {
          text: "Manmohan singh",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Who invented the Electric Bulb?",
      answers: [
        {
          text: "Robert ",
          correct: false,
        },
        {
          text: "Eddwerd Jenner",
          correct: false,
        },
        {
          text: "Thomas Edison",
          correct: true,
        },
        {
          text: "Joseph",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who invented the telephone?",
      answers: [
        {
          text: "Alexander Graham bell",
          correct: true,
        },
        {
          text: "J.J Thompson",
          correct: false,
        },
        {
          text: "Alphred Nobel",
          correct: false,
        },
        {
          text: "Charles Babez",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "Which planet is the closest to the Sun?",
      answers: [
        {
          text: "Mars",
          correct: false,
        },
        {
          text: "Earth",
          correct: false,
        },
        {
          text: "Jupitor",
          correct: false,
        },
        {
          text: "Mercury",
          correct: true,
        },
      ],
    },
    
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;