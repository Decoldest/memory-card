import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Card({ name, img, onClick }) {
  return (
    <div className="card">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundPosition: "-2px 0px",
        }}
        aria-label={name}
        onClick={onClick}
      ></div>
      <h5>{name}</h5>
    </div>
  );
}
