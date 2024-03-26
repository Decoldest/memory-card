import PropTypes from "prop-types";
import fry from "./assets/fry.png";
import zoidberg from "./assets/zoidberg.png";
import leela from "./assets/leela.png";

Start.propTypes = {
  setDifficulty: PropTypes.func,
};

export default function Start({ setDifficulty }) {
  return (
    <div className="start-container">
      <h2>Select Each Character Once. Choose difficulty:</h2>
      <div className="difficulty-buttons">
        <button onClick={() => setDifficulty(5)}>
          <img src={fry} alt="Philip J Fry" />
          Easy
        </button>
        <button onClick={() => setDifficulty(10)}>
          <img src={zoidberg} alt="Doctor Zoidberg" />
          Medium
        </button>
        <button onClick={() => setDifficulty(20)}>
          <img src={leela} alt="Doctor Zoidberg" />
          Hard
        </button>
      </div>
    </div>
  );
}
