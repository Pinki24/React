import styled from "styled-components";
import { Button } from "../styled/Button"; // Importing Button component from styled/Button

const StartGame = ({ toggle }) => {
  // The StartGame component displays the start screen of the dice game

  return (
    <Container>
      {/* Dice image */}
      <div>
        <img
          style={{ height: "400px", width: "300px" }} // Inline styling for image dimensions
          src="https://th.bing.com/th/id/R.bcf139128b19c0ac949302e7ccf56e54?rik=Mmq58tZKkmP4RQ&riu=http%3a%2f%2fpngimg.com%2fuploads%2fdice%2fdice_PNG129.png&ehk=OZF0dgYTQX43femepukozRM1EtEpBaN6akfjxVl4ETk%3d&risl=&pid=ImgRaw&r=0" // Image source
          alt="dice-image" // Image alt text
        />
      </div>
      {/* Content section */}
      <div className="content">
        {/* Title */}
        <h1>Dice Game</h1>
        {/* Button to start the game */}
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

// Styled component for the container
const Container = styled.div`
  max-width: 1180px; /* Maximum width */
  height: 100vh; /* Full height */
  display: flex; /* Display as flex */
  margin: 0 auto; /* Center align horizontally */
  align-items: center; /* Center align vertically */

  /* Styling for content section */
  .content {
    h1 {
      font-size: 96px; /* Font size for title */
      white-space: nowrap; /* Prevent line break */
    }
  }
`;
