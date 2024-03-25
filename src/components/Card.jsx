import PropTypes from "prop-types";

Card.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default function Card({ name, img }) {
  return (
    <div>
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: 'cover'
        }}
      ></div>
    </div>
  );
}
