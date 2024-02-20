import styled from "styled-components";

const Rules = () => {
  // The Rules component displays the rules of the dice game
  return (
    <RulesContainer>
      {/* Title */}
      <h2>How to Play Dice Game</h2>
      {/* Rule details */}
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{""}
        </p>
        <p>if you get wrong guess then 2 point will be deducted</p>
      </div>
    </RulesContainer>
  );
};

export default Rules;

// Styled component for the rules container
const RulesContainer = styled.div`
  max-width: 800px; /* Maximum width */
  margin: 0 auto; /* Center align */
  background-color: #fbf1f1; /* Background color */
  padding: 20px; /* Padding */

  margin-top: 40px; /* Margin at the top */
  border-radius: 10px; /* Border radius */
  
  /* Styling for the title */
  h2 {
    font-size: 24px; /* Font size */
  }

  /* Styling for rule text */
  .text {
    margin-top: 24px; /* Margin at the top */
  }
`;
