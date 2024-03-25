import PropTypes from "prop-types";

GameOver.propTypes = {
  win: PropTypes.bool.isRequired,
}

export default function GameOver ({win}) {
  return (
    <div className="gameover-container">
      {win ? (
        <div className="gameover win"
        style={{
          backgroundImage: `url(../assets/bender.gif)`
        }}
        >
          You win
        </div>
      ) : (
        <div className="gameover lose">
          You Lose
        </div>
      )}
    </div>
  )
}