import StartGame from "./component/StartGame";
import { useState } from "react";
import GamePlay from "./component/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameplay} />}</>
  );
}

export default App;
