import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  selectedNumber,
  setSelectedNumber,
}) => {
  // Array containing numbers to select from
  const arrNumber = [1, 2, 3, 4, 5, 6];

  // Function to handle selection of a number
  const NumberSelectorHandler = (value) => {
    // Set the selected number and clear any previous errors
    setSelectedNumber(value);
    setError("");
  };

  return (
    <NumberSelectorContainer>
      {/* Display error message if there's any */}
      <p className="error">{error}</p>
      {/* Display numbers for selection */}
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber} // Check if the number is selected
            key={i}
            onClick={() => NumberSelectorHandler(value)} // Call handler when clicked
          >
            {value}
          </Box>
        ))}
      </div>
      {/* Instruction */}
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

// Styled component for the container
const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  /* Styling for the container */
  .flex {
    display: flex;
    gap: 24px; /* Gap between number boxes */
  }

  /* Styling for text */
  p {
    font-size: 24px;
    font-weight: 700; /* Bold */
  }

  /* Styling for error message */
  .error {
    color: red; /* Red color for error messages */
  }
`;

// Styled component for number selection box
const Box = styled.div`
  height: 72px; /* Box height */
  width: 72px; /* Box width */
  border: 1px solid black; /* Border */
  display: grid;
  place-items: center; /* Center text */
  font-size: 24px; /* Font size */
  font-weight: 700; /* Bold */
  background-color: ${(props) => (props.isSelected ? "black" : "white")}; /* Background color based on selection */
  color: ${(props) => (!props.isSelected ? "black" : "white")}; /* Text color based on selection */
`;
