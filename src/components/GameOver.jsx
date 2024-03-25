import PropTypes from "prop-types";

GameOver.propTypes = {
  win: PropTypes.bool.isRequired,
}

export default function GameOver ({win}) {
  return (
    <>
      {win ? (
        <div>
          You win
        </div>
      ) : (
        <div>
          You Lose
        </div>
      )}
    </>
  )
}