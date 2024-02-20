import styled from "styled-components";

const RoleDice = ({ roleDice, currentDice }) => {
  // The RoleDice component renders a dice image and allows the user to roll the dice when clicked

  return (
    <DiceContainer>
      {/* Container for the dice */}
      <div className="dice" onClick={roleDice}>
        {/* Display the dice image */}
        <img src={`/dice/dice_${currentDice}.png`} alt={`dice ${currentDice}`} />
      </div>
      {/* Instruction */}
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

// Styled component for the dice container
const DiceContainer = styled.div`
  margin-top: 48px; /* Margin at the top */
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Styling for the dice */
  .dice {
    cursor: pointer; /* Show pointer cursor when hovering */
  }

  /* Styling for text */
  p {
    font-size: 24px; /* Font size */
  }
`;
