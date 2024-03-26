import PropTypes from "prop-types";

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default function Score({ score }) {
  return <h2>Score: {score}</h2>;
}
