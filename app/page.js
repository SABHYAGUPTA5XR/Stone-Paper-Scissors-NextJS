import { useState } from "react";

export default function StonePaperScissors() {
  const choices = ["stone", "paper", "scissors"];
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [result, setResult] = useState("Result");
  const [showMessage, setShowMessage] = useState(false);
  const [winner, setWinner] = useState("");

  const resetGame = () => {
    setUserScore(0);
    setCompScore(0);
    setResult("Result");
    setShowMessage(false);
    setWinner("");
  };

  const playGame = (userChoice) => {
    if (showMessage) return;
    const compChoice = choices[Math.floor(Math.random() * 3)];
    
    if (userChoice === compChoice) {
      setResult("It is a Draw");
    } else if (
      (userChoice === "stone" && compChoice === "scissors") ||
      (userChoice === "paper" && compChoice === "stone") ||
      (userChoice === "scissors" && compChoice === "paper")
    ) {
      setResult(`You win! Your ${userChoice} beats ${compChoice}`);
      setUserScore((prev) => prev + 1);
    } else {
      setResult(`You lose! ${compChoice} beats your ${userChoice}`);
      setCompScore((prev) => prev + 1);
    }

    if (userScore + 1 === 5) {
      setWinner("You");
      setShowMessage(true);
    } else if (compScore + 1 === 5) {
      setWinner("Computer");
      setShowMessage(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-300 text-center">
      <h1 className="text-4xl font-bold">STONE PAPER SCISSORS</h1>
      {showMessage && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-75">
          <div className="text-white text-4xl font-bold mb-4">
            {winner === "DRAW" ? "It's a draw!" : `Congratulations, ${winner} won!`}
          </div>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-300 transition"
          >
            New Game
          </button>
        </div>
      )}
      <div className="flex gap-8 mt-10">
        {choices.map((choice, index) => (
          <button
            key={index}
            className="p-4 bg-gray-200 rounded-full shadow-lg hover:bg-gray-400"
            onClick={() => playGame(choice)}
          >
            <img
              src={`./pictures/${choice}.jpg`}
              alt={choice}
              className="w-20 h-20 rounded-full"
            />
          </button>
        ))}
      </div>
      <div className="flex gap-20 mt-10 text-2xl font-semibold">
        <div>
          <p>You</p>
          <p>{userScore}</p>
        </div>
        <div>
          <p>Computer</p>
          <p>{compScore}</p>
        </div>
      </div>
      <h2 className="mt-10 text-xl italic">{result}</h2>
      <button
        className="mt-6 px-6 py-2 bg-black text-white rounded-lg"
        onClick={resetGame}
      >
        Reset Game
      </button>
    </div>
  );
}
