import PropTypes from "prop-types";
import fry from "./assets/fry.png";
import zoidberg from "./assets/zoidberg.png";
import leela from "./assets/leela.png";
import disney from "./assets/Disney.png"

Start.propTypes = {
  setDifficulty: PropTypes.func,
  setIsPlaying: PropTypes.func,
};

export default function Start({ setDifficulty, setIsPlaying }) {
  const setDifficultyAndStart = (difficulty) => {
    setDifficulty(difficulty);
    setIsPlaying(true);
  };

  return (
    <>
      <div className="start-container">
        <h2>Select Each Character Once. Choose difficulty:</h2>
        <div className="difficulty-buttons">
          <button onClick={() => setDifficultyAndStart(5)}>
            <img src={fry} alt="Philip J Fry" />
            Easy
          </button>
          <button onClick={() => setDifficultyAndStart(10)}>
            <img src={zoidberg} alt="Doctor Zoidberg" />
            Medium
          </button>
          <button onClick={() => setDifficultyAndStart(20)}>
            <img src={leela} alt="Doctor Zoidberg" />
            Hard
          </button>
        </div>
      </div>
      <img src={disney} alt="Disney Futurama" className="disney" />
    </>
  );
}
