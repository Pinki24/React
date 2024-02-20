import styled from "styled-components";

const TotalScore = ({ score }) => {
  // The TotalScore component displays the total score of the game
  return (
    <ScoreContainer>
      {/* Total score */}
      <h1>{score}</h1>
      {/* Label for total score */}
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

// Styled component for the score container
const ScoreContainer = styled.div`
  max-width: 200px; /* Maximum width */
  text-align: center; /* Center align text */
  
  /* Styling for total score */
  h1 {
    font-size: 100px; /* Font size */
    line-height: 100px; /* Line height */
  }

  /* Styling for label */
  p {
    font-size: 24px; /* Font size */
    font-weight: 500; /* Font weight */
  }
`;
