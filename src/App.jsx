import { useEffect, useState } from "react";
import { rollDiceApi } from "../api/rollDiceApi";
import "./App.css";

function App() {
  const [results, setResults] = useState([]);

  // Load results from localStorage when the component mounts
  useEffect(() => {
    const savedResults = localStorage.getItem("diceResults");
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    }
  }, []);

  const handleRollDice = async () => {
    try {
      const diceResults = await rollDiceApi(6, 1); // Call the imported function
      setResults(diceResults);
      localStorage.setItem('diceResults', JSON.stringify(diceResults)); // Save to localStorage
    } catch (error) {
      console.error("Error in handleRollDice:", error);
    }
  };

  return (
    <>
      <h1>Roll Dice</h1>
      <div>
        <p>
          Results: <code>{results.join(", ")}</code>
        </p>
      </div>
      <div className="card">
        <button onClick={handleRollDice}>Roll !!</button>
        <p>
          <code>Roll The Dice</code>
        </p>
      </div>
    </>
  );
}

export default App;
