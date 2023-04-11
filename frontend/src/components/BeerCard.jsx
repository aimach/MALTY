import PropTypes from "prop-types";
import "../assets/css/beerCard.css";
import noImg from "../assets/img/no_img_beer.png";

function BeerCard({ beer }) {
  return (
    <div className="beer-card">
      <img
        src={beer.image_url ? beer.image_url : noImg}
        alt={beer.name}
        className="beer-img"
      />
      <h1>{beer.name}</h1>
      <p>{beer.description}</p>
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
