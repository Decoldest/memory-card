import PropTypes from "prop-types";
import benderDancing from "../assets/bender-dancing.gif";
import benderCrying from "../assets/bender-crying.gif";

GameOver.propTypes = {
  win: PropTypes.bool.isRequired,
  resetGame: PropTypes.func,
};

export default function GameOver({ win, resetGame }) {
  return (
    <>
      <div className="overlay"></div>
      <div className="gameover-container">
        {win ? (
          <>
            <div className="gameover win">
              <img src={benderDancing} alt="Bender Dancing" />
            </div>
            <h2>You win</h2>
          </>
        ) : (
          <>
            <div className="gameover lose">
              <img src={benderCrying} alt="Bender Crying" />
            </div>
            <h2>You Lose</h2>
          </>
        )}
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </>
  );
}
