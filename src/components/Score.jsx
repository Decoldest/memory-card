import PropTypes from "prop-types";

Score.propTypes = {
  score: PropTypes.number.isRequired,
  bestScore: PropTypes.number.isRequired,

};

export default function Score({ score, bestScore }) {
  return (
    <>
      <h2>Score: {score}</h2>
      <h2>Best Score: {bestScore}</h2>
    </>
  );
}
