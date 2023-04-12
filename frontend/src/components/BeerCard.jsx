import PropTypes from "prop-types";
import "../assets/css/beerCard.css";
import noImg from "../assets/img/no_img_beer.png";

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <h1>{beer.name.toUpperCase()}</h1>
      <img
        src={beer.image_url ? beer.image_url : noImg}
        alt={beer.name}
        className="beer-img"
      />
      <p>{beer.description}</p>
      <div className="background-letters">{beer.name.toUpperCase()}</div>
    </div>
  );
}

export default BeerCard;

BeerCard.propTypes = {
  beer: PropTypes.shape({
    image_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
