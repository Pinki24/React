import styled from "styled-components";
import { Button, OutLineButton } from "../styled/Button"; // Importing styled components for buttons
import { useState } from "react";//importing state
// import components
import Rules from "./Rules";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoleDice from "./RoleDice";

 

const GamePlay = () => {
  // State variables for managing game state
  const [selectedNumber, setSelectedNumber] = useState(); // Selected number
  const [currentDice, setCurrentDice] = useState(1); // Current rolled dice
  const [score, setScore] = useState(0); // Total score
  const [error, setError] = useState(""); // Error message
  const [showRules, setShowRules] = useState(false); // Boolean to show/hide rules

  // Function to generate random number between min and max
  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  // Function to roll the dice
  const roleDice = () => {
    // If no number is selected, show error message
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    // Generate a random number between 1 and 6
    const randomNumber = generateRandomNumber(1, 7);
    // Update the current dice with the random number
    setCurrentDice((prev) => randomNumber);

    // If selected number matches the random number, increase score, else decrease by 2
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    // Reset selected number
    setSelectedNumber(undefined);
  };

  // Function to reset score to 0
  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        {/* Component to display total score */}
        <TotalScore score={score} />
        {/* Component to select a number */}
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      {/* Component to roll the dice */}
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        {/* Button to reset score */}
        <OutLineButton onClick={resetScore}>Reset Score</OutLineButton>
        {/* Button to show/hide rules */}
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {/* Component to display rules */}
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

// Styled component for the main container
const MainContainer = styled.main`
  padding-top: 70px;

  /* Styling for the top section */
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  /* Styling for buttons section */
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
