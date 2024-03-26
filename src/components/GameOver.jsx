import PropTypes from "prop-types";
import benderDancing from "../assets/bender-dancing.gif";
import benderCrying from "../assets/bender-crying.gif"

GameOver.propTypes = {
  win: PropTypes.bool.isRequired,
};

export default function GameOver({ win }) {
  return (
    <div className="gameover-container">
      {win ? (
        <div className="gameover win">
          <img src={benderDancing} alt="Bender Dancing" />
        </div>
      ) : (
        <div className="gameover lose">
          <img src={benderCrying} alt="Bender Crying" />
        </div>
      )}
    </div>
  );
}
